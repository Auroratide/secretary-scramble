<section class="schedule">
    <aside class="times">
        <time datetime="9:00">9 AM</time>
        <time datetime="10:00">10 AM</time>
        <time datetime="11:00">11 AM</time>
        <time datetime="12:00">12 PM</time>
        <time datetime="13:00">1 PM</time>
        <time datetime="14:00">2 PM</time>
        <time datetime="15:00">3 PM</time>
        <time datetime="16:00">4 PM</time>
        <time datetime="17:00">5 PM</time>
    </aside>
    <div class="column">
        <slot name="column-1"></slot>
    </div>
    <div class="column">
        <slot name="column-2"></slot>
    </div>
    <div class="time-dividers" aria-hidden="true">
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
        <div class="divider"><hr /></div>
    </div>
</section>

<style>
    .schedule {
        --times-width: 4em;
        --times-padding: 0.5em;
        --end-of-day-buffer: var(--segment-30);

        position: relative;
        display: grid;
        grid-template-columns: var(--times-width) 1fr 1fr;
        height: calc(18 * var(--segment-30));
        padding: var(--end-of-day-buffer) 0;
        border: 1px solid black;
    }

    .times {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: right;
        padding-right: var(--times-padding);
        height: 100%;
        font-size: var(--font-sz-venus);
        line-height: 1;
    }

    .times time {
        position: relative;
        top: -0.5em;
        height: calc(2 * var(--segment-30));
    }

    .times time:last-child {
        height: auto;
    }

    .time-dividers {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% - var(--times-width) + var(--times-padding));
        top: var(--end-of-day-buffer);
        bottom: 0;
        right: 0;
        /* z-index: -1; */
    }

    .divider {
        font-size: var(--font-sz-venus);
        height: calc(2 * var(--segment-30));
        line-height: 1;
        display: flex;
        align-items: flex-start;
    }

    .divider:last-child {
        height: var(--segment-30);
    }

    hr {
        font-size: 1rem;
        background: none;
        border: none;
        border-top: 0.0625em solid grey;
        height: 0;
        width: 100%;
        margin: 0;
    }
</style>