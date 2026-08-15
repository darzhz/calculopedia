<script lang="ts">
  import { onMount } from 'svelte';

  function pushAds() {
    const w = window as unknown as { adsbygoogle?: unknown[] };
    if (!w.adsbygoogle) return;
    document.querySelectorAll('ins.adsbygoogle').forEach(() => {
      w.adsbygoogle!.push({});
    });
  }

  function pushWhenReady(attempts = 30) {
    const w = window as unknown as { adsbygoogle?: unknown[] };
    if (w.adsbygoogle) {
      pushAds();
      return;
    }
    if (attempts <= 0) return;
    setTimeout(() => pushWhenReady(attempts - 1), 100);
  }

  onMount(() => {
    pushWhenReady();
  });
</script>
