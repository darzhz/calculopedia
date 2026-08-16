<script lang="ts">
  import { onMount } from 'svelte';

  const RETRY_MS = 100;
  const MAX_TRIES = 10;

  function unfilledSlots(): HTMLElement[] {
    return [...document.querySelectorAll<HTMLElement>('ins.adsbygoogle')].filter(
      (ins) => !ins.hasAttribute('data-adsbygoogle-status')
    );
  }

  function slotsReady(): boolean {
    return unfilledSlots().every((ins) => ins.getBoundingClientRect().width > 0);
  }

  function pushAds() {
    const w = window as unknown as { adsbygoogle?: unknown[] };
    if (!w.adsbygoogle) return;
    const count = unfilledSlots().length;
    for (let i = 0; i < count; i++) {
      w.adsbygoogle!.push({});
    }
  }

  function waitForLayout(attempts = MAX_TRIES) {
    if (slotsReady() || attempts <= 0) {
      pushAds();
      return;
    }
    setTimeout(() => waitForLayout(attempts - 1), RETRY_MS);
  }

  function pushWhenReady(attempts = 30) {
    const w = window as unknown as { adsbygoogle?: unknown[] };
    if (w.adsbygoogle) {
      waitForLayout();
      return;
    }
    if (attempts <= 0) return;
    setTimeout(() => pushWhenReady(attempts - 1), RETRY_MS);
  }

  onMount(() => {
    pushWhenReady();
  });
</script>