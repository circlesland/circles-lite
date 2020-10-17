<script lang="ts">
    import {navigateTo} from "../../kernel/viewRegistry"
</script>
seedphrase
<textarea></textarea>
<button on:click={()=>navigateTo("safe")}>login</button>
