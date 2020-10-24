<script lang="ts">
  import { navigateTo } from "../../kernel/viewRegistry";
</script>

<main class="overflow-y-scroll h-full bg-gray-100 p-8 text-center">
  <h1 class="text-center text-3xl font-title text-primary">Build Home</h1>
  <p class="text-sm py-4 text-center text-gray-700">
    Explain installation of your new home
    <br /><br />
    <span class="text-xs text-gray-500">*during alpha test phase only remote
      textile hosting partner. More options coming soon, including offline first
      storage, filecoin backups and metamask authentication</span>
  </p>
</main>

<footer class="p-4">
  <div>
    <form method="POST" onsubmit="return false;">
      <p class="p-1 text-gray-700">Choose your home provider</p>
      <div class="flex">
        <div
          class="mr-1 rounded-lg bg-gray-100 border border-gray-300 p-4 bg-gray-200 h-20 w-20">
          <img src="images/textile.png" />
        </div>
        <div
          class="text-xs text-center text-gray-500 mr-1 rounded-lg bg-gray-100 bg-gray-100 p-3 h-20 w-20">
          other (coming soon)
        </div>
        <div
          class="text-xs text-center text-gray-500 mr-1 rounded-lg bg-gray-100 bg-gray-100 p-3 h-20 w-20">
          download (coming soon)
        </div>
      </div>
      <p
        class="p-2 mt-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-600">
        https://hub.textile.io
        <!-- {addrGatewayUrl} -->
      </p>

      <!-- <p class="p-1 text-gray-700">Anmelden</p>
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
      </div> -->
    </form>
  </div>
  <button class="w-full" on:click={() => navigateTo('register')}>Set provider</button>
</footer>
