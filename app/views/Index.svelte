<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>
<main class="overflow-y-scroll h-full bg-gray-100 p-8">
    <h1 class="text-primary text-3xl font-bold pb-2">Welcome to the Circles Lite Wallet</h1>
    <p class="">The Circles Lite Wallet is build on ipfs</p>
</main>

<footer class="flex p-4">
    <button class="w-full" on:click={()=>navigateTo("login")}>login</button>
    <button class="w-full" on:click={()=>navigateTo("register")}>register</button>
</footer>

