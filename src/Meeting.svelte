<script>
    export let meeting
</script>

<article class="meeting" style:height="{meeting.duration}px">
    <div class="details">
        <h3>{meeting.name}</h3>
    </div>
</article>

<style>
    .meeting {
        padding: 0.125em;
        outline: 1px solid black;
        position: relative;
        z-index: 2;
        visibility: visible !important;
    }

    .details {
        background: wheat;
        height: 100%;
    }
</style>