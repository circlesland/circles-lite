import Index from "../app/views/Index.svelte";
import Login from "../app/views/Login.svelte";
import Error from "../app/views/Error.svelte";

export class ViewRegistry {
    private static registry = {
        "login": { view: Login, title: "circles Login" },
        "index": { view: Index, title: "circles Index" },
        "error": { view: Error, title: "circles Error" }
    }

    static getByName(name: string) {
        console.log(name)
        const view = this.registry[name.toLowerCase()];
        return view ? view : this.registry["error"];
    }
}
