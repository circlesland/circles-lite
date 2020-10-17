<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>
<button on:click={()=>navigateTo("login")}>login</button>
<button on:click={()=>navigateTo("register")}>register</button>
