<script lang="ts">
  import { navigateTo } from "../../kernel/viewRegistry";
</script>

<main class="overflow-y-scroll h-full bg-gray-100 p-8 text-center">
  <h1 class="text-center text-3xl font-title text-primary">
    Willkommen,
    <br />auf Omo Earth
  </h1>
  <p class="text-sm py-4 text-center text-gray-700">
    Die Menschen auf Omo Earth nennen sich Omo Sapiens. Jeder Omo entwickelt und
    kontrolliert 100% seiner eigenen Daten und Apps und speichert diese in
    seinem privaten Omo Haus. Um als Omo Sapien dein Haus zu öffnen oder ein
    neues Omo Sapien Haus zu bauen, melde dich unten an.
  </p>
</main>

<footer class="flex p-4">
  <button class="w-full" on:click={() => navigateTo('login')}>login</button>
  <button class="w-full" on:click={() => navigateTo('intro1')}>register</button>
</footer>
