<script>
    import Meeting from './Meeting.svelte'
    import { dndzone } from 'svelte-dnd-action'

    export let meetings // { id, duration, start: { minute } }
    export let schedule

    const onConsider = (start) => (e) => {
        console.log(e.detail.info)
        const slots = {
            ...schedule.slots,
            [`${start}`]: e.detail.items,
        }
        schedule = {
            ...schedule,
            slots: slots,
        }
    }

    const onFinalize = (start) => (e) => {
        console.log(e.detail.info)
        const slots = {
            ...schedule.slots,
            [`${start}`]: e.detail.items,
        }
        schedule = {
            ...schedule,
            slots: slots,
        }
    }
</script>

<section class="schedule-column">
    <div class="zone" use:dndzone={{ items: schedule.slots['0']}} on:consider={onConsider(0)} on:finalize={onFinalize(0)}>
        {#each schedule.slots['0'] as meeting (meeting.id)}
            <Meeting duration={meeting.duration} />
        {/each}
    </div>
    <div class="zone" use:dndzone={{ items: schedule.slots['30']}} on:consider={onConsider(30)} on:finalize={onFinalize(30)}>
        {#each schedule.slots['30'] as meeting (meeting.id)}
            <Meeting duration={meeting.duration} />
        {/each}
    </div>
    <div class="zone" use:dndzone={{ items: schedule.slots['60']}} on:consider={onConsider(60)} on:finalize={onFinalize(60)}>
        {#each schedule.slots['60'] as meeting (meeting.id)}
            <Meeting duration={meeting.duration} />
        {/each}
    </div>
    <div class="zone" use:dndzone={{ items: schedule.slots['90']}} on:consider={onConsider(90)} on:finalize={onFinalize(90)}>
        {#each schedule.slots['90'] as meeting (meeting.id)}
            <Meeting duration={meeting.duration} />
        {/each}
    </div>
    <div class="zone" use:dndzone={{ items: schedule.slots['120']}} on:consider={onConsider(120)} on:finalize={onFinalize(120)}>
        {#each schedule.slots['120'] as meeting (meeting.id)}
            <Meeting duration={meeting.duration} />
        {/each}
    </div>
    <div class="zone" use:dndzone={{ items: schedule.slots['150']}} on:consider={onConsider(150)} on:finalize={onFinalize(150)}>
        {#each schedule.slots['150'] as meeting (meeting.id)}
            <Meeting duration={meeting.duration} />
        {/each}
    </div>

<!-- 
    <div use:dndzone={{ items: meetings, transformDraggedElement: (e) => {
        console.log('TRANSFORM: ', e)
        // e.style.display = 'none'
        // e.style.visibility = 'hidden'
        // e.style.top = '100px'
    } }} style:height="100%" on:consider={onConsider} on:finalize={onFinalize}>
        {#each meetings as meeting (meeting.id)}
            <div class="meeting" style:top="calc({meeting.start.minute} / var(--minutes-in-day) * 100%)">
                <Meeting duration={meeting.duration} />
            </div>
        {/each}
    </div> -->

    <!-- <div use:dndzone={{ items: meetings, transformDraggedElement: (e) => {
        console.log('TRANSFORM: ', e)
        // e.style.top = '100px'
    } }} style:height="100%" on:consider={onConsider} on:finalize={onFinalize}>

    </div> -->
</section>

<style>
    .schedule-column {
        position: relative;
        height: 100%;
    }

    .zone {
        height: 30px;
        background-color: rgba(255, 0, 0, 0.5);
    }

    .meeting {
        /* position: absolute; */
        left: 0;
        width: 100%;
        
    }

    :global(#dnd-action-dragged-el) {
        visibility: hidden !important;
    }
</style>