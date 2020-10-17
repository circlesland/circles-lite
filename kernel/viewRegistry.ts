import Index from "../app/views/Index.svelte";
import Login from "../app/views/Login.svelte";

export class ViewRegistry {
    private static registry = {
        "Login": Login,
        "Index":Index
    }

    static getByName(name: string) {
        return this.registry[name];
    }
}
