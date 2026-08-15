<script lang="ts">
  import { onMount } from 'svelte';

  const KEY = 'calc-encyclopedia-consent';
  let visible = $state(false);

  function applyConsent(granted: boolean) {
    document.body.dataset.consent = granted ? 'granted' : 'denied';
    try {
      localStorage.setItem(KEY, granted ? 'granted' : 'denied');
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new CustomEvent('cmp-consent', { detail: { granted } }));
  }

  onMount(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* storage unavailable */
    }
    if (stored) {
      applyConsent(stored === 'granted');
    } else {
      visible = true;
    }
  });

  function accept() {
    applyConsent(true);
    visible = false;
  }

  function deny() {
    applyConsent(false);
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
        We use cookies to personalize content and measure usage. Advertisers may show ads relevant
        to you. You can change your choice anytime.
      </p>
      <div class="flex shrink-0 gap-2">
        <button onclick={deny} class="btn btn-outlined"> Decline </button>
        <button onclick={accept} class="btn btn-filled"> Accept </button>
      </div>
    </div>
  </div>
{/if}
