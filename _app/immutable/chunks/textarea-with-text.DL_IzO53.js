const e=`<script lang="ts">
	import { Label } from "$lib/registry/new-york/ui/label/index.js";
	import { Textarea } from "$lib/registry/new-york/ui/textarea/index.js";
<\/script>

<div class="grid w-full gap-1.5">
	<Label for="message-2">Your Message</Label>
	<Textarea placeholder="Type your message here." id="message-2" />
	<p class="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
</div>
`;export{e as default};
