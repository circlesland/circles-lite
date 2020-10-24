<script lang="ts">
  import { navigateTo } from "../../kernel/viewRegistry";
</script>

<main class="overflow-y-scroll h-full bg-gray-100 p-8 text-center">
  <h1 class="text-center text-3xl font-title text-primary">Intro Slide 2</h1>
  <p class="text-sm py-4 text-center text-gray-700">Explain More About Omo</p>
</main>

<footer class="flex p-4">
  <button class="w-full" on:click={() => navigateTo('intro3')}>Next</button>
</footer>
