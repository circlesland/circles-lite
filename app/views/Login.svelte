<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>

<div class="col sm:w-1/2">
    <div class="box border rounded flex flex-col shadow bg-white">
    <div class="box__title bg-grey-lighter px-3 py-2 border-b"><h3 class="text-sm  text-primary font-medium">Please enter your Seedphrase*</h3></div>
    <textarea placeholder="word1 word2 ... word24" class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" ></textarea>
    </div>
</div>

<button class="mt-2" on:click={()=>navigateTo("safe")}>login</button>
<p class="text-xs text-gray-500">*Your seedphrase will be stored in you browser local storage</p>
