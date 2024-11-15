const e=`<script lang="ts">
	import { Checkbox } from "$lib/registry/new-york/ui/checkbox/index.js";
	import { Label } from "$lib/registry/new-york/ui/label/index.js";
<\/script>

<div class="flex items-center space-x-2">
	<Checkbox id="terms" disabled />
	<Label
		for="terms2"
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[disabled=true]:cursor-not-allowed peer-data-[disabled=true]:opacity-70"
	>
		Accept terms and conditions
	</Label>
</div>
`;export{e as default};
