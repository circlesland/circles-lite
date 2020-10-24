<script lang="ts">
  import { navigateTo } from "../../kernel/viewRegistry";
</script>

<main class="overflow-y-scroll h-full bg-gray-100 p-8 text-center">
  <h1 class="text-center text-3xl font-title text-primary">
    What is your Name?
  </h1>
  <p class="text-sm py-4 text-center text-gray-700">
    My Name is Mama Omo and I will guide you around Omo Earth. In the beginning
    your name will only be written securly into your own home, nobody from
    outside can see and read your data. Whenever you want to interact or show
    your profile to someone or pin it publicly via an app, they have to request
    access to your data.
  </p>
</main>

<footer class="p-4">
  <input
    placeholder="firstname"
    class="p-2 mb-2 w-full rounded-lg bg-gray-100 border border-gray-300 text-gray-600" />
  <input
    placeholder="lastname"
    class="p-2 mb-2 w-full rounded-lg bg-gray-100 border border-gray-300 text-gray-600" />
  <button class="w-full" on:click={() => navigateTo('saveprofileimage')}>Save
    Name</button>
</footer>
