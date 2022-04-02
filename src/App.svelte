<script>
	import { onMount } from 'svelte'
	import {
		createBlankSchedule,
		scheduleMeetings,
		randomMeeting,
		startOfDay,
		endOfDay,
		initialSchedule,
	} from './game'
	import Meeting from './Meeting.svelte'
	import Schedule from './Schedule.svelte'
	import ScheduleColumn from './ScheduleColumn.svelte'
	import Viewport from './Viewport.svelte'
	import { dndzone } from 'svelte-dnd-action'

	let currentTime = startOfDay

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

	let currentSchedule = initialSchedule
	let tomorrowSchedule = createBlankSchedule()

	const finishDay = () => {
		currentSchedule = tomorrowSchedule
		tomorrowSchedule = createBlankSchedule()
		currentTime = startOfDay
	}

	const tick = () => {
		currentTime += 1
		if (Math.random() < 0.0025) {
			unscheduled = [...unscheduled, randomMeeting()]
		}

		if (currentTime > endOfDay) {
			finishDay()
		}

		requestAnimationFrame(tick)
	}
	onMount(() => {
		requestAnimationFrame(tick)
	})
</script>

<Viewport>
	<main>
		<div use:dndzone={{items: unscheduled, flipDurationMs: 200 }} class="unscheduled" on:consider={onConsider} on:finalize={onFinalize}>
			{#each unscheduled as meeting (meeting.id)}
				<Meeting meeting={meeting} />
			{/each}
		</div>
		<div class="meetings">
			<Schedule currentTime={currentTime}>
				<ScheduleColumn slot="column-1" bind:schedule={currentSchedule} />
				<ScheduleColumn slot="column-2" bind:schedule={tomorrowSchedule} />
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
