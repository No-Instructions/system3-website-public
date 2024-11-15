const n=`<script lang="ts">
	import { getLocalTimeZone, today } from "@internationalized/date";
	import { RangeCalendar } from "$lib/registry/default/ui/range-calendar/index.js";

	const start = today(getLocalTimeZone());
	const end = start.add({ days: 7 });

	let value = {
		start,
		end,
	};
<\/script>

<RangeCalendar bind:value class="rounded-md border" />
`;export{n as default};