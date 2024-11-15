const t=`<script lang="ts">
	import * as AlertDialog from "$lib/registry/default/ui/alert-dialog/index.js";
	import { Button } from "$lib/registry/default/ui/button/index.js";
<\/script>

<AlertDialog.Root>
	<AlertDialog.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline">Show Dialog</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will permanently delete your account and remove
				your data from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
`;export{t as default};
