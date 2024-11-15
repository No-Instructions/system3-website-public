const t=`<script lang="ts">
	import Bell from "svelte-radix/Bell.svelte";
	import Check from "svelte-radix/Check.svelte";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import * as Card from "$lib/registry/new-york/ui/card/index.js";
	import { Switch } from "$lib/registry/new-york/ui/switch/index.js";

	const notifications = [
		{
			title: "Your call has been confirmed.",
			description: "1 hour ago",
		},
		{
			title: "You have a new message!",
			description: "1 hour ago",
		},
		{
			title: "Your subscription is expiring soon!",
			description: "2 hours ago",
		},
	];
<\/script>

<Card.Root class="w-[380px]">
	<Card.Header>
		<Card.Title>Notifications</Card.Title>
		<Card.Description>You have 3 unread messages.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="flex items-center space-x-4 rounded-md border p-4">
			<Bell />
			<div class="flex-1 space-y-1">
				<p class="text-sm font-medium leading-none">Push Notifications</p>
				<p class="text-sm text-muted-foreground">Send notifications to device.</p>
			</div>
			<Switch />
		</div>
		<div>
			{#each notifications as notification, idx (idx)}
				<div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
					<span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
					<div class="space-y-1">
						<p class="text-sm font-medium leading-none">
							{notification.title}
						</p>
						<p class="text-sm text-muted-foreground">
							{notification.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">
			<Check class="mr-2 h-4 w-4" /> Mark all as read
		</Button>
	</Card.Footer>
</Card.Root>
`;export{t as default};
