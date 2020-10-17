<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>
<div class="text-xl">Welcome to the Circles Lite Wallet</div>
<button on:click={()=>navigateTo("login")}>login</button>
<button on:click={()=>navigateTo("register")}>register</button>
