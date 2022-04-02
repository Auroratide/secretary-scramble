<script>
    import MeetingSlot from './MeetingSlot.svelte'
    import { scheduleMeetings, minuteSlots } from './game'

    export let schedule

    const onSchedule = (minute) => (e) => {
        schedule = scheduleMeetings(schedule)(minute)(e.detail.items)
    }
</script>

<section class="schedule-column">
    {#each minuteSlots as minuteSlot (minuteSlot)}
        <MeetingSlot meetings={schedule.slots[minuteSlot]} on:schedule={onSchedule(minuteSlot)} />
    {/each}
</section>

<style>
    .schedule-column {
        position: relative;
        height: 100%;
    }
</style>