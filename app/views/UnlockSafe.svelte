<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>
your safe adress
trust 1
trust 2
trust 3
<button on:click={()=>navigateTo("Safe")}>create account</button>
<input value="https://yourtrustlink">
<button on:click={()=>navigateTo("GetTrust")}>copy link to clipboard</button>

