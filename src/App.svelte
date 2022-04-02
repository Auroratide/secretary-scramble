<script>
	import { createUnscheduledMeeting, scheduleMeeting } from './game'
	import Meeting from './Meeting.svelte'
	import Schedule from './Schedule.svelte'
	import ScheduleColumn from './ScheduleColumn.svelte'
	import Viewport from './Viewport.svelte'

	let unscheduled = [
		createUnscheduledMeeting({ duration: 60 }),
		createUnscheduledMeeting({ duration: 30 }),
	]

	let scheduled = [
		scheduleMeeting(createUnscheduledMeeting({ duration: 60 }))(0, 0),
		scheduleMeeting(createUnscheduledMeeting({ duration: 30 }))(0, 150),
	]
</script>

<Viewport>
	<main>
		<div class="unscheduled">
			{#each unscheduled as meeting (meeting.id)}
				<Meeting duration={meeting.duration} />
			{/each}
		</div>
		<div class="meetings">
			<Schedule>
				<ScheduleColumn slot="column-1" meetings={scheduled} />
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
		height: 100%
	}
</style>
