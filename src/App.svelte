<script>
	import { createUnscheduledMeeting, scheduleMeeting } from './game'
	import Meeting from './Meeting.svelte'

	let unscheduled = [
		createUnscheduledMeeting({ duration: 60 }),
		createUnscheduledMeeting({ duration: 30 }),
	]

	let scheduled = [
		scheduleMeeting(createUnscheduledMeeting({ duration: 60 }))(0, 0),
		scheduleMeeting(createUnscheduledMeeting({ duration: 30 }))(0, 120),
	]
</script>

<main>
	<div class="unscheduled">
		{#each unscheduled as meeting (meeting.id)}
			<Meeting duration={meeting.duration} />
		{/each}
	</div>
	<div class="meetings">
		{#each scheduled as meeting (meeting.id)}
			<Meeting duration={meeting.duration} />
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		gap: 1em;
	}

	.unscheduled {
		width: 600px;
	}
	
	.meetings {
		width: 600px;
	}
</style>
