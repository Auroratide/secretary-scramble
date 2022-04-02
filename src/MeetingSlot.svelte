<script>
    import { dndzone } from 'svelte-dnd-action'
    import Meeting from './Meeting.svelte'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let meetings

    const onConsider = (e) => {
        document.body.classList.add('over-schedule')
        dispatch('schedule', {
            items: e.detail.items,
        })
    }

    const onFinalize = (e) => {
        dispatch('schedule', {
            items: e.detail.items,
        })
    }
</script>

<div class="zone" use:dndzone={{ items: meetings }} on:consider={onConsider} on:finalize={onFinalize}>
    {#each meetings as meeting (meeting.id)}
        <Meeting meeting={meeting} />
    {/each}
</div>

<style>
    .zone {
        height: 30px;
        background-color: rgba(255, 0, 0, 0.5);
    }
</style>