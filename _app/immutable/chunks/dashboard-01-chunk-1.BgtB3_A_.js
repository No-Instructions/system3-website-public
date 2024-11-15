const t=`<script lang="ts">
	import Users from "lucide-svelte/icons/users";
	import * as Card from "$lib/registry/new-york/ui/card/index.js";
<\/script>

<Card.Root
	data-x-chunk-name="dashboard-01-chunk-1"
	data-x-chunk-description="A card showing the total subscriptions and the percentage difference from last month."
>
	<Card.Header
		class="flex flex-row items-center justify-between space-y-0 pb-2"
	>
		<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
		<Users class="h-4 w-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">+2350</div>
		<p class="text-xs text-muted-foreground">+180.1% from last month</p>
	</Card.Content>
</Card.Root>
`;export{t as default};
