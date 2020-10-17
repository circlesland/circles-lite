<script lang="ts">
    import { navigateTo } from "../../kernel/viewRegistry";
    import { CirclesWrapper } from "../../kernel/circles-protocol/circlesActions";
    let balance = "";
    let safeaddress = "";
    let samuelsquery: SamuelsQuery;
    async function f() {
        let account = CirclesWrapper.restoreAccount();
        safeaddress = await CirclesWrapper.getSafeAddress(account);
        balance = await CirclesWrapper.getBalance(account, safeaddress);
        samuelsquery = (
            await theGraphClient.samuels({
                safeAddress: safeaddress.toLowerCase(),
            })
        ).data;
    }

    f();

    import { theGraphClient } from "../../kernel/circles-protocol/theGraph/theGraphClient";
    import type { SamuelsQuery } from "../../kernel/circles-protocol/theGraph/generated";
</script>

<style>
    .card {
        @apply mb-2 border border-gray-200 rounded p-4;
    }
</style>

<h1 class="text-primary text-3xl font-bold pb-2">Safe</h1>
<p class="text-6xl  text-primary">Balance: {balance} ø</p>
<p class="text-xl">Your Safe address: {safeaddress.toLowerCase()}</p>

<div class="mt-2" />
<button on:click={() => navigateTo('trustSomeone')}>trustSomeone</button>
<button on:click={() => navigateTo('getTrust')}>shareProfile</button>

<div class="mt-4 mb-2 text-xl text-primary">Your Transactions</div>
{#if samuelsquery}
    {#each samuelsquery.notifications as n}
        <div class="card">
            {n.time}
            ---
            {#if n.transfer}
                {n.transfer.from}
                ---
                {n.transfer.to}
                ---
                {n.transfer.amount}
            {/if}
        </div>
    {/each}
{/if}
