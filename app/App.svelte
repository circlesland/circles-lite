<script lang="ts">
    import { ViewRegistry } from "../kernel/viewRegistry";
    import * as page from "page";

    const local =
        window.location.hostname == "localhost" ||
        window.location.hostname == "127.0.0.1";
    const css = local
        ? "bundle.css"
        : "https://ipfs.io/ipns/bafzbeieojoxxxqmz6z6yt656msrjmpn6hh4ig2ppxrzxinhjm3njmiy5qq/webpack/bundle.js";

    let current = ViewRegistry.getByName("Index");

    async function show(ctx) {

        current = ViewRegistry.getByName(ctx.path.replace(/\//g, ""));
        console.log(ctx);
        // let page = ctx.query["page"];
        // if (!page) {
        //     page = "index";
        // }
        // page += ".json";
        // viewDocument = await xfetch(
        //     "bafzbeidz3eazquyorhjdiosdgbc5j73yz5omnyqrasuz7pertimlmz7e5y",
        //     page
        // );
    }

    page.base("/#!") 
    page("*", show);
    page({ popstate: true, hashbang:true });

    function navigateTo(toPage:string){
        page(`/${toPage}`);
    }
</script>

<style global>
    @import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,300&family=Josefin+Sans:wght@700&family=Nunito+Sans:wght@400&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Aclonica&display=swap");

    @tailwind base;
    @tailwind utilities;
    @tailwind components;

    html,
    body {
        height: 100%;
        overflow: hidden;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @apply font-sans;
    }
</style>

<svelte:head>
    <title>{current.title}</title>
    <link rel="stylesheet" href={css} />
</svelte:head>
<button on:click={()=>navigateTo("foo")}>to foo</button>
<svelte:component this={current.view} />
