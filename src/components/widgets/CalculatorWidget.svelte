<script lang="ts" module>
  function formatNumberCell(value: number, col: string): string {
    const isMoney =
      /amount|payment|interest|balance|principal|tax|cess|invested|value|total|deposit|withdraw|calorie|weight/i.test(
        col,
      );
    if (isMoney) {
      return new Intl.NumberFormat('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(value);
    }
    return value.toLocaleString();
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { CalculatorConfig, InputField, SelectField, OutputField } from '@/lib/schema';
  import type { InputValues, OutputValues, TableRow } from '@/lib/formulas/types';
  import { detectBrowserLocale } from '@/lib/locale';
  import { formatOutputValue } from '@/lib/format';
  import { track } from '@/lib/analytics';
  import { loadFormula } from '@/lib/formulas/loader';
  import AmortizationChart from './AmortizationChart.svelte';

  let { config }: { config: CalculatorConfig } = $props();

  const loc = $state(detectBrowserLocale());
  let values = $state<InputValues>(defaultsFor(config));
  let formula: ((i: InputValues) => OutputValues) | null = $state(null);
  let outputs = $state<OutputValues | null>(null);

  function defaultForField(field: InputField): number | string | boolean {
    switch (field.type) {
      case 'select':
        return field.default ?? field.options[0]?.value ?? '';
      case 'date':
        return field.default ?? '';
      case 'time':
        return field.default ?? '';
      case 'toggle':
        return field.default ?? false;
      case 'text':
        return field.default ?? '';
      default:
        return field.default ?? 0;
    }
  }

  function defaultsFor(cfg: CalculatorConfig): InputValues {
    const v: InputValues = {};
    for (const f of cfg.inputs) v[f.id] = f.default ?? defaultForField(f);
    return v;
  }

  function setValue(id: string, val: number | string | boolean) {
    values[id] = val;
  }

  function onSelect(field: SelectField, raw: string) {
    setValue(field.id, raw);
    if (field.presets?.[raw]) {
      for (const [k, v] of Object.entries(field.presets[raw])) values[k] = v;
    }
  }

  function isVisible(field: InputField): boolean {
    if (!field.showWhen) return true;
    return String(values[field.showWhen.field]) === field.showWhen.value;
  }

  onMount(async () => {
    try {
      formula = await loadFormula(config.formulaId);
    } catch (err) {
      console.error('Failed to load formula', err);
    }
  });

  let trackedOnce = false;
  $effect(() => {
    if (!formula) return;
    try {
      outputs = formula(values);
      if (!trackedOnce) {
        trackedOnce = true;
        track('result_generated', { calculator: config.slug });
      }
    } catch {
      outputs = null;
    }
  });

  function formatOut(out: OutputField): string {
    const raw = outputs?.[out.id];
    if (raw == null) return '';
    if (typeof raw === 'object') return '';
    return formatOutputValue(out, raw, loc);
  }

  function isTable(out: OutputField): boolean {
    const raw = outputs?.[out.id];
    return Array.isArray(raw) && raw.length > 0;
  }

  function tableRows(out: OutputField): TableRow[] {
    const raw = outputs?.[out.id];
    return Array.isArray(raw) ? (raw as TableRow[]) : [];
  }

  function fieldLabel(field: InputField): string {
    return field.help ? `${field.label} (${field.help})` : field.label;
  }

  function outputIcon(out: OutputField): string {
    switch (out.format) {
      case 'currency':
        return 'payments';
      case 'percent':
        return 'percent';
      case 'decimal':
        return 'functions';
      case 'duration':
        return 'schedule';
      case 'date':
        return 'calendar_month';
      case 'table':
        return 'table_chart';
      default:
        return 'calculate';
    }
  }
</script>

<div class="card p-5 sm:p-7" aria-live="polite">
  <form class="grid grid-cols-1 gap-5 sm:grid-cols-2" onsubmit={(e) => e.preventDefault()}>
    {#each config.inputs as field}
      {#if isVisible(field)}
        <label class="block">
          <span class="mb-1.5 block text-sm font-medium text-md-on-surface"
            >{fieldLabel(field)}</span
          >

          {#if field.type === 'number'}
            <span class="relative block">
              {#if field.currency}
                <span
                  class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-md-on-surface-variant"
                >
                  <span class="icon text-[20px]">currency_rupee</span>
                </span>
                <input
                  type="number"
                  bind:value={values[field.id]}
                  min={field.min}
                  max={field.max}
                  step={field.step ?? 'any'}
                  placeholder={field.placeholder}
                  class="m3-input {field.currency ? 'pl-11' : ''} {field.unit === '%'
                    ? 'pr-9'
                    : ''}"
                />
              {:else}
                <input
                  type="number"
                  bind:value={values[field.id]}
                  min={field.min}
                  max={field.max}
                  step={field.step ?? 'any'}
                  placeholder={field.placeholder}
                  class="m3-input {field.unit === '%' ? 'pr-9' : ''}"
                />
              {/if}
              {#if field.unit}
                <span
                  class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-md-on-surface-variant"
                >
                  {field.unit}
                </span>
              {/if}
            </span>
          {:else if field.type === 'range'}
            <span
              class="flex items-center gap-3 rounded-t-lg border-b-2 border-md-outline-variant bg-md-surface-variant px-3 py-3 transition-colors duration-200 focus-within:border-md-primary"
            >
              <input
                type="range"
                bind:value={values[field.id]}
                min={field.min ?? 0}
                max={field.max ?? 100}
                step={field.step ?? 1}
                class="w-full accent-md-primary"
              />
              <span
                class="w-16 shrink-0 rounded-full bg-md-surface-container-high px-2 py-1 text-right font-mono text-sm text-md-on-surface"
              >
                {values[field.id]}{field.unit ?? ''}
              </span>
            </span>
          {:else if field.type === 'select'}
            <select
              value={values[field.id]}
              onchange={(e) => onSelect(field, (e.currentTarget as HTMLSelectElement).value)}
              class="m3-select"
            >
              {#each field.options as opt}
                <option value={opt.value}>{opt.label}</option>
              {/each}
            </select>
          {:else if field.type === 'text'}
            <input
              type="text"
              bind:value={values[field.id]}
              placeholder={field.placeholder}
              maxlength={field.maxLength}
              class="m3-input"
            />
          {:else if field.type === 'date'}
            <input type="date" bind:value={values[field.id]} class="m3-input" />
          {:else if field.type === 'time'}
            <input type="time" bind:value={values[field.id]} class="m3-input" />
          {:else if field.type === 'toggle'}
            <span class="flex items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={Boolean(values[field.id])}
                onclick={() => setValue(field.id, !Boolean(values[field.id]))}
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-md {values[
                  field.id
                ]
                  ? 'bg-md-primary'
                  : 'bg-md-surface-variant'} active:scale-95"
              >
                <span
                  class="inline-block h-4 w-4 transform rounded-full shadow transition-transform duration-300 ease-md {values[
                    field.id
                  ]
                    ? 'translate-x-6 bg-md-on-primary'
                    : 'translate-x-1 bg-md-outline'}"
                ></span>
              </button>
              <span class="text-sm text-md-on-surface-variant">{field.label}</span>
            </span>
          {/if}
        </label>
      {/if}
    {/each}
  </form>

  {#if outputs}
    <div class="mt-7 space-y-3 border-t border-md-outline-variant pt-6">
      {#each config.outputs as out}
        {#if isTable(out)}
          <div>
            <h3 class="mb-3 flex items-center gap-1.5 text-sm font-medium text-md-on-surface">
              <span class="icon text-[18px] text-md-primary">table_chart</span>
              {out.label}
            </h3>
            {#if config.chart === 'amortization'}
              <div class="mb-3 rounded-2xl bg-md-surface-container-low p-3">
                <AmortizationChart
                  rows={tableRows(out)}
                  xKey="month"
                  series={[
                    { dataKey: 'principal', label: 'Principal', color: '#6750a4' },
                    { dataKey: 'interest', label: 'Interest', color: '#f59e0b' },
                  ]}
                />
              </div>
            {/if}
            <div class="max-h-72 overflow-auto rounded-2xl bg-md-surface-container-low">
              <table class="w-full text-sm">
                <thead
                  class="sticky top-0 bg-md-surface-variant text-left text-xs font-medium uppercase tracking-wide text-md-on-surface-variant"
                >
                  <tr>
                    {#each Object.keys(tableRows(out)[0]) as col}
                      <th class="px-3 py-2.5">{col}</th>
                    {/each}
                  </tr>
                </thead>
                <tbody>
                  {#each tableRows(out) as row, i}
                    <tr class={i % 2 ? 'bg-md-surface-container/60' : 'bg-transparent'}>
                      {#each Object.entries(row) as [col, val]}
                        <td class="px-3 py-2 tabular-nums text-md-on-surface">
                          {typeof val === 'number' ? formatNumberCell(val, col) : val}
                        </td>
                      {/each}
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        {:else}
          {@const val = formatOut(out)}
          {#if val !== ''}
            <div
              class:list={[
                'flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5',
                out.primary
                  ? 'bg-md-primary-container ring-1 ring-md-primary/20'
                  : 'bg-md-surface-container-low',
              ]}
            >
              <div class="flex items-center gap-3">
                <span
                  class:list={[
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                    out.primary
                      ? 'bg-md-primary text-md-on-primary'
                      : 'bg-md-secondary-container text-md-on-secondary-container',
                  ]}
                >
                  <span class="icon text-[20px]">{outputIcon(out)}</span>
                </span>
                <div>
                  <p class="text-sm text-md-on-surface-variant">{out.label}</p>
                  {#if out.note}
                    <p class="text-xs text-md-on-surface-variant/70">{out.note}</p>
                  {/if}
                </div>
              </div>
              <p
                class:list={[
                  'text-right font-medium tabular-nums',
                  out.primary
                    ? 'text-lg text-md-on-primary-container'
                    : 'text-base text-md-on-surface',
                ]}
              >
                {val}
              </p>
            </div>
          {/if}
        {/if}
      {/each}
    </div>
  {/if}
</div>
