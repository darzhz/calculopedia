<script lang="ts">
  import type { TableRow } from '@/lib/formulas/types';

  let {
    rows,
    xKey = 'month',
    series,
  }: {
    rows: TableRow[];
    xKey?: string;
    series: { dataKey: string; label: string; color: string }[];
  } = $props();

  const W = 760;
  const H = 220;
  const PAD = { top: 20, right: 10, bottom: 26, left: 10 };

  function toNum(v: unknown): number {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  }

  const maxValue = rows.reduce((m, row) => {
    const total = series.reduce((s, sItem) => s + toNum(row[sItem.dataKey]), 0);
    return Math.max(m, total);
  }, 0);

  const max = maxValue > 0 ? maxValue : 1;
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const n = Math.max(1, rows.length);
  const barW = plotW / n;

  const ticks = 4;
  const gridLines = Array.from({ length: ticks + 1 }, (_, i) => {
    const value = (max * i) / ticks;
    return { y: PAD.top + plotH - (plotH * i) / ticks, value };
  });
</script>

<div class="overflow-x-auto">
  <svg viewBox="0 0 {W} {H}" class="min-w-[520px] w-full" role="img" aria-label="Chart">
    {#each gridLines as line}
      <line
        x1={PAD.left}
        x2={W - PAD.right}
        y1={line.y}
        y2={line.y}
        stroke="#cac4d0"
        stroke-width="1"
      />
      <text x={PAD.left} y={line.y - 4} font-size="10" fill="#49454f">
        {Math.round(line.value)}
      </text>
    {/each}

    {#each rows as row, i}
      {@const key = String(row[xKey] ?? i)}
      {@const x = PAD.left + i * barW}
      {@const values = series.map((s) => toNum(row[s.dataKey]))}
      {@const yBase = PAD.top + plotH}
      {#each series as sItem, sIndex}
        {@const cum = values.slice(0, sIndex + 1).reduce((a, b) => a + b, 0)}
        {@const barHeight = (values[sIndex] / max) * plotH}
        {@const y = yBase - (cum / max) * plotH}
        <rect x={x + 1} {y} width={Math.max(1, barW - 2)} height={barHeight} fill={sItem.color}>
          <title>{sItem.label}: {values[sIndex]} (period {key})</title>
        </rect>
      {/each}
    {/each}

    {#each series as sItem}
      {@const li = series.indexOf(sItem)}
      <rect x={PAD.left} y={PAD.top - 12 - li * 14} width="10" height="10" fill={sItem.color} />
      <text x={PAD.left + 14} y={PAD.top - 3 - li * 14} font-size="11" fill="#1c1b1f">
        {sItem.label}
      </text>
    {/each}
  </svg>
</div>
