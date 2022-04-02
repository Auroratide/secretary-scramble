<script>
	import { createBlankSchedule, scheduleMeetings, randomMeeting } from './game'
	import { flip } from 'svelte/animate'
	import Meeting from './Meeting.svelte'
	import Schedule from './Schedule.svelte'
	import ScheduleColumn from './ScheduleColumn.svelte'
	import Viewport from './Viewport.svelte'
	import { dndzone } from 'svelte-dnd-action'

	let unscheduled = [
		randomMeeting(),
		randomMeeting(),
		randomMeeting(),
		randomMeeting(),
	]

	const onConsider = (e) => {
		document.body.classList.remove('over-schedule')
		unscheduled = e.detail.items
	}

	const onFinalize = (e) => {
		unscheduled = e.detail.items
	}

	let schedule = scheduleMeetings(createBlankSchedule(0))('0')([randomMeeting()])
</script>

<Viewport>
	<main>
		<div use:dndzone={{items: unscheduled, flipDurationMs: 200 }} class="unscheduled" on:consider={onConsider} on:finalize={onFinalize}>
			{#each unscheduled as meeting (meeting.id)}
				<Meeting animate:flip={{duration: 200}} meeting={meeting} />
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
