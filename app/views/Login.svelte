<script lang="ts">
  import { navigateTo } from "../../kernel/viewRegistry";
  //   import { CirclesWrapper } from "../../kernel/circles-protocol/circlesActions";
  //   let seedPhrase = "";
  //   function login() {
  //     if (seedPhrase == "") return;
  //     let account = CirclesWrapper.safeOwnerFromKeyphrase(seedPhrase);
  //     //@todo catch some errors
  //     CirclesWrapper.storeAccount(account);
  //     navigateTo("safe");
  //   }
</script>

<main class="overflow-y-scroll h-full bg-gray-100 p-8">
  <h1 class="text-primary text-3xl font-bold pb-2">Login</h1>
</main>
<footer class="p-4 ">
  <h3 class="text-sm text-primary font-medium">Please enter your email</h3>
  <div class="box border rounded flex flex-col bg-white">
    <input
      placeholder="f.e. omo@sapien.org"
      class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
  </div>
  <button class="w-full" on:click={() => navigateTo('dapps')}>Send login mail</button>
</footer>
