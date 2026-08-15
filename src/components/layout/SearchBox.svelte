<script lang="ts">
  interface SearchItem {
    title: string;
    url: string;
    category: string;
    icon: string;
    description: string;
    keywords: string;
  }

  let query = $state('');
  let results = $state<SearchItem[]>([]);
  let index: SearchItem[] | null = $state(null);
  let open = $state(false);
  let loading = $state(false);

  async function ensureIndex() {
    if (index) return;
    loading = true;
    try {
      const res = await fetch('/search-index.json');
      index = (await res.json()) as SearchItem[];
    } catch {
      index = [];
    }
    loading = false;
  }

  $effect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      results = [];
      open = false;
      return;
    }
    ensureIndex();
    if (!index) return;
    const scored = (index ?? [])
      .map((item) => {
        const title = item.title.toLowerCase();
        const keywords = item.keywords.toLowerCase();
        const description = item.description.toLowerCase();
        let score = 0;
        if (title.includes(q)) score += 10;
        if (keywords.includes(q)) score += 6;
        if (description.includes(q)) score += 2;
        if (title.startsWith(q)) score += 3;
        return { item, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.item);
    results = scored;
    open = true;
  });
</script>

<div class="relative">
  <span
    class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-md-on-surface-variant"
  >
    <span class="icon text-[20px]">search</span>
  </span>
  <input
    type="search"
    placeholder="Search calculators…"
    bind:value={query}
    onfocus={ensureIndex}
    onblur={() => setTimeout(() => (open = false), 150)}
    class="w-full rounded-full border border-md-outline-variant bg-md-surface-container-low py-2 pl-10 pr-4 text-sm text-md-on-surface transition-all duration-300 ease-md placeholder:text-md-on-surface-variant/70 hover:bg-md-surface-container focus:border-md-primary focus:outline-none"
    aria-label="Search calculators"
  />
  {#if open && results.length > 0}
    <ul
      class="absolute z-50 mt-2 max-h-96 w-full overflow-auto rounded-2xl bg-md-surface-container-high p-1.5 shadow-lg"
    >
      {#each results as item}
        <li>
          <a
            href={item.url}
            class="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-md-secondary-container/60"
            onclick={() => (open = false)}
          >
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-md-secondary-container text-md-on-secondary-container"
            >
              <span class="icon text-[18px]">{item.icon}</span>
            </span>
            <span class="min-w-0">
              <span class="block truncate text-sm font-medium text-md-on-surface">{item.title}</span
              >
              <span class="block text-xs text-md-on-surface-variant">{item.category}</span>
            </span>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
  {#if loading}
    <p
      class="absolute z-50 mt-2 w-full rounded-2xl bg-md-surface-container-high px-4 py-3 text-sm text-md-on-surface-variant shadow-lg"
    >
      Loading…
    </p>
  {/if}
</div>
