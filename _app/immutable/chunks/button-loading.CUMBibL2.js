const t=`<script lang="ts">
	import LoaderCircle from "lucide-svelte/icons/loader-circle";
	import { Button } from "$lib/registry/default/ui/button/index.js";
<\/script>

<Button disabled>
	<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
	Please wait
</Button>
`;export{t as default};
