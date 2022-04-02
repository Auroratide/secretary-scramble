<script>
	import { createUnscheduledMeeting, createBlankSchedule, scheduleMeetings } from './game'
	import Meeting from './Meeting.svelte'
	import Schedule from './Schedule.svelte'
	import ScheduleColumn from './ScheduleColumn.svelte'
	import Viewport from './Viewport.svelte'
	import { dndzone } from 'svelte-dnd-action'

	let unscheduled = [
		createUnscheduledMeeting({ duration: 60 }),
		createUnscheduledMeeting({ duration: 30 }),
	]

	const onConsider = (e) => {
		unscheduled = e.detail.items
	}

	const onFinalize = (e) => {
		unscheduled = e.detail.items
	}

	let schedule = scheduleMeetings(createBlankSchedule(0))('0')([createUnscheduledMeeting({ duration: 120 })])
</script>

<Viewport>
	<main>
		<div use:dndzone={{items: unscheduled}} class="unscheduled" on:consider={onConsider} on:finalize={onFinalize}>
			{#each unscheduled as meeting (meeting.id)}
				<Meeting duration={meeting.duration} />
			{/each}
		</div>
		<div class="meetings">
			<Schedule>
				<ScheduleColumn slot="column-1" schedule={schedule} />
			</Schedule>
		</div>
	</main>
</Viewport>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 0.5em;
		height: 100%;
	}

	.unscheduled {
		height: 100%;
	}
	
	.meetings {
		height: 100%;
	}
</style>
