<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>
<h1 class="text-primary text-3xl font-bold pb-2">Welcome to the Circles Lite Wallet</h1>
<button on:click={()=>navigateTo("login")}>login</button>
<button on:click={()=>navigateTo("register")}>register</button>
