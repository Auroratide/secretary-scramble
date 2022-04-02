<script>
    import Meeting from './Meeting.svelte'

    export let meetings // { id, duration, start: { minute } }
</script>

<section class="schedule-column">
    {#each meetings as meeting (meeting.id)}
        <div class="meeting" style:top="calc({meeting.start.minute} / var(--minutes-in-day) * 100%)">
            <Meeting duration={meeting.duration} />
        </div>
    {/each}
</section>

<style>
    .schedule-column {
        position: relative;
        height: 100%;
    }

    .meeting {
        position: absolute;
        left: 0;
        width: 100%;
    }
</style>