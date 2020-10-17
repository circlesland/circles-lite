<script lang="ts">
    import { navigateTo } from "../../kernel/viewRegistry";
    import { CirclesWrapper } from "../../kernel/circles-protocol/circlesActions";
    let seedPhrase = "";
    function login() {
        if (seedPhrase == "") return;
        let account = CirclesWrapper.safeOwnerFromKeyphrase(seedPhrase);
        //@todo catch some errors
        CirclesWrapper.storeAccount(account);
        navigateTo("safe");
    }
</script>

<h1 class="text-primary text-3xl font-bold pb-2">Login</h1>
<div class="col sm:w-1/2">
    <div class="box border rounded flex flex-col shadow bg-white">
        <div class="box__title bg-grey-lighter px-3 py-2 border-b">
            <h3 class="text-sm  text-primary font-medium">
                Please enter your Seedphrase*
            </h3>
        </div>
        <textarea
            placeholder="word1 word2 ... word24"
            bind:value={seedPhrase}
            class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
    </div>
</div>
<button class="mt-2" on:click={() => login()}>login</button>
<p class="text-xs text-gray-500">
    *Your seedphrase will be stored in you browser local storage
</p>
