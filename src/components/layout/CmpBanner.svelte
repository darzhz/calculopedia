<script lang="ts">
  import { onMount } from 'svelte';

  const KEY = 'calculopedia-notice-dismissed';
  let visible = $state(false);

  onMount(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* storage unavailable */
    }
    if (!stored) visible = true;
  });

  function dismiss() {
    try {
      localStorage.setItem(KEY, '1');
    } catch {
      /* storage unavailable */
    }
    visible = false;
  }
</script>

{#if visible}
  <div
    class="fixed inset-x-0 bottom-0 z-50 border-t border-md-outline-variant bg-md-surface-container p-4 shadow-lg"
    role="dialog"
    aria-live="polite"
  >
    <div
      class="mx-auto flex w-full max-w-3xl flex-col items-start gap-3 sm:flex-row sm:items-center"
    >
      <p class="flex-1 text-sm text-md-on-surface-variant">
        This site uses Google Analytics to measure usage and Google AdSense to display
        advertisements. Read our
        <a href="/privacy/" class="text-md-primary hover:text-md-primary/80">Privacy Policy</a>.
      </p>
      <div class="flex shrink-0 gap-2">
        <button onclick={dismiss} class="btn btn-filled"> Got it </button>
      </div>
    </div>
  </div>
{/if}
