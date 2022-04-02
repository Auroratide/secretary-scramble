<script>
	import { createUnscheduledMeeting, scheduleMeeting } from './game'
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

	let schedule = {
		day: 0,
		slots: {
			'0': [createUnscheduledMeeting({ duration: 120 })],
			'30': [],
			'60': [],
			'90': [],
			'120': [],
			'150': [createUnscheduledMeeting({ duration: 30 })],
		},
	}

	let scheduled = [
		scheduleMeeting(createUnscheduledMeeting({ duration: 120 }))(0, 0),
		scheduleMeeting(createUnscheduledMeeting({ duration: 30 }))(0, 150),
	]
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
				<ScheduleColumn slot="column-1" meetings={scheduled} schedule={schedule} />
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
