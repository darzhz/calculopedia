<script lang="ts">
  import { onMount } from 'svelte';
  import { AD_CLIENT_ID } from '@/lib/site';

  let loaded = false;

  function pushAds() {
    const w = window as unknown as { adsbygoogle?: unknown[] };
    if (!w.adsbygoogle) return;
    document.querySelectorAll('ins.adsbygoogle').forEach(() => {
      w.adsbygoogle!.push({});
    });
  }

  function loadAds() {
    if (!AD_CLIENT_ID || loaded) return;
    loaded = true;
    const w = window as unknown as { adsbygoogle?: unknown[] };
    if (w.adsbygoogle) {
      pushAds();
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`;
    script.setAttribute('data-ad-client', AD_CLIENT_ID);
    script.crossOrigin = 'anonymous';
    script.onload = pushAds;
    document.head.appendChild(script);
  }

  function onConsent(e: Event) {
    const granted = (e as CustomEvent<{ granted: boolean }>).detail?.granted;
    if (granted) loadAds();
  }

  onMount(() => {
    window.addEventListener('cmp-consent', onConsent);
    if (document.body.dataset.consent === 'granted') loadAds();

    return () => window.removeEventListener('cmp-consent', onConsent);
  });
</script>
