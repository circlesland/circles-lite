<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
    let notifications = [{
        title: "trusted",
        type: "trust 1",
        address: "0x765asfhopasjnfodguzagsfoiuasdfkjbaskdbfj"
    },
    {
        title: "waiting for trust 2",
        type: "trust 2",
        address: "0x765asfhopasjnfodguzagsfoiuasdfkjbaskdbfj"
    },
    {
        title: "waiting for trust 2",
        type: "trust 2",
        address: "0x765asfhopasjnfodguzagsfoiuasdfkjbaskdbfj"
    }];
</script>
<style>
    .card {
        @apply mb-2 border border-gray-200 rounded p-4
    }
</style>

<p class="text-lg text-primary mb-4">Your new GnosisSafe Address: <br>0xai7s6drtf8aubwl3diugasdo8fuga329</p>
<button on:click={()=>navigateTo("GetTrust")}>copy link to clipboard</button>


<div class="mt-4 mb-2 text-xl text-primary">Waiting For Trust</div>

{#each notifications as n}
    <div class="card">{n.title} --- {n.type} --- {n.address}</div>
{/each}

<button class="bg-gray-200 text-gray-400" on:click={()=>navigateTo("Safe")}>create account</button>
<br>
<input value="https://yourtrustlink">
