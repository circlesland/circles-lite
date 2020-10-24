<script lang="ts">
  import { ViewRegistry, navigateTo } from "../kernel/viewRegistry";
  import * as page from "page";

  const local =
    window.location.hostname == "localhost" ||
    window.location.hostname == "127.0.0.1";
  // const css = local
  //     ? "bundle.css"
  //     : "https://ipfs.io/ipns/bafzbeieojoxxxqmz6z6yt656msrjmpn6hh4ig2ppxrzxinhjm3njmiy5qq/webpack/bundle.js";

  let current = ViewRegistry.getByName("Index");

  async function show(ctx) {
    console.log("CONTEXT", ctx);

    current = ViewRegistry.getByName(ctx.path.replace(/\//g, ""));
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
  let base = local
    ? "/#!/"
    : "/ipns/bafzbeieojoxxxqmz6z6yt656msrjmpn6hh4ig2ppxrzxinhjm3njmiy5qq/#!/";
  page.base(base);
  page("*", show);
  page({ popstate: true, hashbang: true });
</script>

<style global>
  @import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,300&family=Josefin+Sans:wght@700&family=Nunito+Sans:wght@400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");

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
  button {
    @apply px-4 py-2 bg-primary rounded border border-gray-300 text-white;
  }

  @media screen and (min-width: 600px) {
    .wrap {
      height: 95%;
    }
  }
  @media screen and (min-width: 1024px) {
    .wrap {
      height: 85%;
    }
  }
  @media screen and (min-width: 1600px) {
    .wrap {
      height: 75%;
    }
  }
  .grid {
    @apply h-full w-full;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
  }
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
    @apply border-t border-gray-300;
  }
</style>

<svelte:head>
  <title>{current.title}</title>
  <link rel="stylesheet" href="bundle.css" />
</svelte:head>

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
  rel="stylesheet" />

<div
  class=" bg-white h-screen flex flex-col items-center justify-center bg-grey-lighter bg-cover bg-center"
  style="background-image: url(https://source.unsplash.com/7awMZWDS4rg)">
  <div
    class="wrap shadow-2xl border border-gray-300 bg-white rounded-lg md:m-12 w-full h-full max-w-md justify-center">
    <div class="grid">
      <header
        class="flex flex-col justify-center bg-grey-lighter border-b border-gray-300">
        <p class="p-4 text-xs text-primary">
          Please note: Omo Earth is in early alpha test mode, use at your own
          risk! Let us know about any feedback:
          <a
            href="https://github.com/omoearth/circles-lite/issues"
            class="text-action font-bold">Github</a>
          -
          <a
            href="https://twitter.com/OmoEarth"
            class="text-action font-bold">Twitter</a>
          -
          <a
            href="https://discord.gg/Rbhy4j9"
            class="text-action font-bold">Discord</a>
        </p>
      </header>
      <svelte:component this={current.view} />
    </div>
  </div>
</div>

<!-- <header
        class="flex flex-col justify-center bg-grey-lighter border-b border-gray-300">
        <div class="text-primary font-bold uppercase text-center">Login</div>
      </header>
      {#if loginProcess != LoginState.LoggedIn}
        <main>
          <h1 class="text-center text-3xl font-title text-primary">
            Willkommen,
            <br />auf Omo Earth
          </h1>
          <p class="text-sm py-4 text-center text-gray-700">
            Die Menschen auf Omo Earth nennen sich Omo Sapiens. Jeder Omo
            entwickelt und kontrolliert 100% seiner eigenen Daten und Apps und
            speichert diese in seinem privaten Omo Haus. Um als Omo Sapien dein
            Haus zu öffnen oder ein neues Omo Sapien Haus zu bauen, melde dich
            unten über unseren Hosting Partner textile.io an.
          </p>
          <div class="flex p-2 mx-auto">
            <img
              src="https://github.com/omoearth/omo-marketplace/workflows/dev.omo.earth/badge.svg"
              alt="deployBadge" />
            <img
              src="https://github.com/omoearth/textile/workflows/hub.dev.omo.earth/badge.svg"
              alt="deployBadge" />
          </div>
        </main>
      {/if}
      {#if loginProcess == LoginState.LoggedIn}
        <main>
          <p class="text-2xl text-center font-title text-primary">
            Herzlich Willkommen,<br />{user.name}
          </p>{user.email}
        </main>
      {/if}

      <footer class="text-sm border-t border-gray-300 p-6">
        {#if loginProcess == LoginState.None}
          <div>
            <form method="POST" onsubmit="return false;">
              <p class="p-1 text-gray-700">Wähle deinen Haus Anbieter</p>
              <div class="flex">
                <div
                  class="mr-1 rounded-lg bg-gray-100 border border-gray-300 p-4 bg-gray-200 h-20 w-20">
                  <img src="images/textile.png" />
                </div>
                <div
                class="text-xs text-center text-gray-500 mr-1 rounded-lg bg-gray-100 bg-gray-100 p-3 h-20 w-20">
                more coming soon
                </div>
              </div>
              <p
                class="p-2 mt-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-600">
                {addrGatewayUrl}
              </p>

              <p class="p-1 text-gray-700">Anmelden</p>
              <div
                class="w-full mb-2 px-2 pt-1 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none">
                <label
                  for="email"
                  class="block text-xs font-medium text-gray-600">Email</label>

                <input
                  type="text"
                  name="email"
                  class=" text-xl w-full rounded-lg bg-gray-200 border text-gray-700 border-transparent focus:outline-none"
                  bind:value={login} />
              </div>
              <div
                class="w-full p-3 bg-primary uppercase font-bold text-white text-center rounded-lg"
                on:click={() => signInOrSignUpAsync()}>
                Omo Haus öffne dich
              </div>
            </form>
          </div>
        {/if}
        {#if loginProcess == LoginState.LoggingIn}
          <div class="bg-gray-200 p-12 rounded-lg text-lg">
            Dein Türschlüssel wurde an deine Email geschickt. Bitte öffne den
            Link in deiner Email, um dein Haus aufzuschließen.
          </div>
        {/if}
        {#if loginProcess == LoginState.Error}
          <div class="bg-red-400 p-12 rounded-lg text-white text-lg">
            <p>{error.message}</p>
            s <p>Code: {error.code}</p>
           <p>{JSON.stringify(error.metadata)}</p>
          </div>
        {/if}
        {#if loginProcess == LoginState.LoggedIn}
          <div class="p-8">App-Navbar</div>
        {/if}
        <button on:click="{()=>dostuff()}">klick mich</button>
      </footer> -->
