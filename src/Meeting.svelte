<script>
    export let meeting
</script>

<article class="meeting" style:height="calc(var(--segment-15) * {meeting.duration / 15})">
    <div class="details">
        <h3>{meeting.name}</h3>
    </div>
</article>

<style>
    .meeting {
        padding: 0.125em;
        position: relative;
        z-index: 2;
    }

    .details {
        background: wheat;
        height: 100%;
    }
</style>