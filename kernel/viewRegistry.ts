import Index from "../app/views/Index.svelte";
import Login from "../app/views/Login.svelte";
import GetTrust from "../app/views/GetTrust.svelte";
import Register from "../app/views/Register.svelte";
import Safe from "../app/views/Safe.svelte";
import TrustSomeone from "../app/views/TrustSomeone.svelte";
import UnlockSafe from "../app/views/UnlockSafe.svelte";
import Error from "../app/views/Error.svelte";

export class ViewRegistry {
    private static registry = {
        "login": { view: Login, title: "circles Login" },
        "": { view: Index, title: "circles Index" },
        "index": { view: Index, title: "circles Index" },
        "gettrust": { view: GetTrust, title: "circles" },
        "register": { view: Register, title: "circles Index" },
        "safe": { view: Safe, title: "circles Index" },
        "trustsomeone": { view: TrustSomeone, title: "circles Index" },
        "unlocksafe": { view: UnlockSafe, title: "circles Index" },
        "error": { view: Error, title: "circles Error" }
    }

    static getByName(name: string) {
        console.log(name)
        const view = this.registry[name.toLowerCase()];
        return view ? view : this.registry["error"];
    }


}

import * as page from "page";
export const navigateTo = function (toPage: string) {
    page(`/${toPage}`);
}