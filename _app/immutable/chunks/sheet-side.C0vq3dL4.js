const t=`<script lang="ts">
	import * as Sheet from "$lib/registry/new-york/ui/sheet/index.js";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Input } from "$lib/registry/new-york/ui/input/index.js";
	import { Label } from "$lib/registry/new-york/ui/label/index.js";

	const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
<\/script>

<div class="grid grid-cols-2 gap-2">
	{#each SHEET_SIDES as side, _ (side)}
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline">{side}</Button>
			</Sheet.Trigger>
			<Sheet.Content {side}>
				<Sheet.Header>
					<Sheet.Title>Edit profile</Sheet.Title>
					<Sheet.Description>
						Make changes to your profile here. Click save when you're done.
					</Sheet.Description>
				</Sheet.Header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="name" class="text-right">Name</Label>
						<Input id="name" value="Pedro Duarte" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="username" class="text-right">Username</Label>
						<Input id="username" value="@peduarte" class="col-span-3" />
					</div>
				</div>
				<Sheet.Footer>
					<Sheet.Close asChild let:builder>
						<Button builders={[builder]} type="submit">Save changes</Button>
					</Sheet.Close>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	{/each}
</div>
`;export{t as default};
