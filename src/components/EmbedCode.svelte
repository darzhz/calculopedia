<script lang="ts">
  import { track } from '@/lib/analytics';

  let { embedUrl }: { embedUrl: string } = $props();
  let copied = $state(false);

  const snippet = `<iframe src="${embedUrl}" width="100%" height="700" style="border:0;border-radius:12px" loading="lazy"></iframe>`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      copied = true;
      track('embed_copied', { url: embedUrl });
      setTimeout(() => (copied = false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }
</script>

<div class="mt-4 rounded-2xl bg-md-surface-container p-4">
  <p class="text-sm font-medium text-md-on-surface">Embed this calculator on your site:</p>
  <div class="mt-3 flex items-start gap-2">
    <pre
      class="flex-1 overflow-x-auto rounded-xl bg-md-inverse-surface p-3 text-xs text-md-inverse-on-surface">{snippet}</pre>
    <button onclick={copy} class="btn btn-tonal shrink-0" aria-label="Copy embed code">
      <span class="icon text-[18px]">{copied ? 'check' : 'content_copy'}</span>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  </div>
</div>
