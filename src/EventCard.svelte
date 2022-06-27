<script lang="ts">
    export let title: string;
    export let date: string;
    export let img: string;
</script>

<p>{date}</p>
<p>{title}</p>
<img src="imgs/{img}" alt="{title}"/>

<style>
    p {
        font-size: 150%;
    }
</style>
