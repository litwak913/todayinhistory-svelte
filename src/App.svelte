<script lang="ts">
	import * as eventList from "./events.json";
	import EventCard from "./EventCard.svelte";
	let anime: boolean = true;
	let meme: boolean = true;
	console.log(eventList);
</script>

<main>
	<header>
		<a
			href="https://github.com/litwak913/todayinhistory-svelte"
			style="color:pink;"
			alt="项目地址">项目地址</a
		>
		<div class="select">
			<label class="border anime">
				<input type="checkbox" bind:checked={anime} />
				anime
			</label>
			<label class="border meme">
				<input type="checkbox" bind:checked={meme} />
				meme
			</label>
		</div>
	</header>
	{#each eventList.events as event}
		{#if event.type == "anime"}
			{#if anime}
				<div class="event anime">
					<EventCard
						title={event.title}
						date={event.date}
						img={event.image}
					/>
				</div>
			{/if}
		{:else if event.type == "meme"}
			{#if meme}
				<div class="event meme">
					<EventCard
						title={event.title}
						date={event.date}
						img={event.image}
					/>
				</div>
			{/if}
		{/if}
	{/each}
</main>

<style>
	.event {
		text-align: center;
		margin-top: 1em;
		padding: 2em;
		max-width: 50%;
		border-radius: 12px;
	}
	main {
		display: flex;
		flex-direction: column;
		align-content: space-around;
		align-items: center;
	}
	header {
		text-align: center;
	}
	.border {
		border-radius: 5px;
		padding-top: 5px;
		padding-right: 5px;
	}
	.anime {
		background-color: pink;
	}
	.meme {
		background-color: lightgreen;
	}
</style>
