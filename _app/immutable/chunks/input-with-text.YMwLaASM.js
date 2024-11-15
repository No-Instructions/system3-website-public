const t=`<script lang="ts">
	import { Input } from "$lib/registry/default/ui/input/index.js";
	import { Label } from "$lib/registry/default/ui/label/index.js";
<\/script>

<div class="flex w-full max-w-sm flex-col gap-1.5">
	<Label for="email-2">Email</Label>
	<Input type="email" id="email-2" placeholder="Email" />
	<p class="text-sm text-muted-foreground">Enter your email address.</p>
</div>
`;export{t as default};
