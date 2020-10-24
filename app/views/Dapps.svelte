<script lang="ts">
  import { navigateTo } from "../../kernel/viewRegistry";
</script>

<main class="overflow-y-scroll bg-gray-100">
  <div
    class="text-white mx-4 mt-4 mb-2 border-gray-200 border flex justify-center text-4xl font-bold text-center bg-primary rounded">
    <div>
      <img
        src="https://source.unsplash.com/rDEOVtE7vOs/500x500"
        class="w-32 h-32 rounded-full border-white border-4 mt-6"
        alt="name" />
      <p class="text-lg font-title text-gray-100 py-6 uppercase">
        -- My Name --
      </p>
    </div>
  </div>
  <div class="flex flex-wrap mx-2">
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-800 border rounded p-8 text-center bg-white">
        <div class="text-primary" on:click={() => navigateTo('oidentity')}>
          <i class="text-5xl fas fa-user-astronaut" />
          <p class="pt-3">°Identity</p>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-piggy-bank" />
          <p class="pt-3">°Wallet</p>
          <span class="text-xs">(coming soon)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-800 border rounded p-8 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-address-book" />
          <p class="pt-3">°Friends</p>
          <span class="text-xs">(coming soon)</span>
        </div>
      </div>
    </div>

    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-comments" />
          <p class="pt-3">°Talk</p>
          <span class="text-xs">(coming soon)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-store" />
          <p class="pt-3">°Market</p>
          <span class="text-xs">(coming 2021)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-user-friends" />
          <p class="pt-3">°Teams</p>
          <span class="text-xs">(coming 2021)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-film" />
          <p class="pt-3">°Movies</p>
          <span class="text-xs">(coming 2021)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-headphones" />
          <p class="pt-3">°Music</p>
          <span class="text-xs">(coming 2021)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-book" />
          <p class="pt-3">°Books</p>
          <span class="text-xs">(coming 2021)</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-2">
      <div
        class="flex h-48 items-center justify-center border-gray-200 text-gray-400 border rounded p-6 text-center bg-white">
        <div class="text-gray-500">
          <i class="text-5xl fas fa-file-alt" />
          <p class="pt-3">°Files</p>
          <span class="text-xs">(coming 2021)</span>
        </div>
      </div>
    </div>
  </div>
</main>

<footer class="pb-1 pt-2 px-4 flex justify-between text-gray-400">
  <div class="text-xs px-4 flex items-center  text-center justify-center">
    <div>
      <i class="text-2xl fas fa-piggy-bank" />
      <p>soon</p>
    </div>
  </div>
  <div class="text-xs px-4 flex items-center  text-center justify-center">
    <div>
      <i class="text-2xl fas fa-store" />
      <p>soon</p>
    </div>
  </div>
  <div class="text-xs px-4 flex items-center  text-center justify-center">
    <div>
      <i class="text-2xl fas fa-plus" />
      <p>soon</p>
    </div>
  </div>
  <div class="text-xs px-4 flex items-center  text-center justify-center">
    <div>
      <i class="text-2xl fas fa-comments" />
      <p>soon</p>
    </div>
  </div>
  <div
    class="text-xs text-primary px-4 flex items-center  text-center justify-center">
    <div on:click={() => navigateTo('dapps')}>
      <i class="text-2xl fas fa-user-circle" />
      <p>Home</p>
    </div>
  </div>
</footer>
