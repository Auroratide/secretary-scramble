<script>
	import Meeting from './Meeting.svelte'
</script>

<main>
	<div class="meetings">
		<Meeting duration={60} />
		<Meeting duration={30} />
	</div>
</main>

<style>
	.meetings {
		width: 600px;
	}
</style>
