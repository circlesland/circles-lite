import Index from "../app/views/Index.svelte";
import Login from "../app/views/Login.svelte";
import Intro1 from "../app/views/Intro1.svelte";
import Intro2 from "../app/views/Intro2.svelte";
import Intro3 from "../app/views/Intro3.svelte";

import Install from "../app/views/Install.svelte";
import Mail from "../app/views/Mail.svelte";
import SaveName from "../app/views/SaveName.svelte";
import SaveProfileImage from "../app/views/SaveProfileImage.svelte";
import Dapps from "../app/views/Dapps.svelte";
import oIdentity from "../app/views/oIdentity.svelte";

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
        "intro1": { view: Intro1, title: "circles Index" },
        "intro2": { view: Intro2, title: "circles Index" },
        "intro3": { view: Intro3, title: "circles Index" },
        "oidentity": { view: oIdentity, title: "oIdentity" },
        "mail": { view: Mail, title: "Mail" },
        "savename": { view: SaveName, title: "SaveName" },
        "saveprofileimage": { view: SaveProfileImage, title: "SaveProfileImage" },
        "dapps": { view: Dapps, title: "Overview" },
        "install": { view: Install, title: "circles Index" },
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