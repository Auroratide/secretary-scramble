<script>
    export let duration // minutes
</script>

<article class="meeting" style:height="{duration}px">
    <div class="details">
        <h3>Meeting</h3>
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