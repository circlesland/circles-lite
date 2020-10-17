<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
    let notifications = [{
        title: "you trusted someone",
        type: "trust",
        amount: "-0.01",
        address: "0x765asfhopasjnfodguzagsfoiuasdfkjbaskdbfj"
    },
    {
        title: "you got UBI",
        type: "transfer",
        amount: "+5.33",
        address: "0x765asfhopasjnfodguzagsfoiuasdfkjbaskdbfj"
    }]
</script>

<style>
    .card {
        @apply mb-2 border border-gray-200 rounded p-4
    }
</style>

<p class="text-6xl  text-primary">Balance: 45.00 CRC</p>
<p class="text-xl">Your Safe address: 0x45678908786asdfiouais765sdiushdfis</p>

<div class="mt-2"/>
<button on:click={()=>navigateTo("trustSomeone")}>trustSomeone</button>
<button on:click={()=>navigateTo("getTrust")}>shareProfile</button>

<div class="mt-4 mb-2 text-xl text-primary">Your Transactions</div>

{#each notifications as n}
    <div class="card">{n.amount} --- {n.title} --- {n.type} --- {n.address}</div>
{/each}