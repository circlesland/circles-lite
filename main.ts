import  App  from "./app/App.svelte";
declare global {
    interface Window {
    }
}

export const isLocal = window.location.hostname == "localhost"
    || window.location.hostname == "127.0.0.1"
    || window.location.hostname == "omo.local";

// export async function xfetch(hash:string, page?:string) {
//   let baseUrl = isLocal
//     ? `https://${window.location.hostname}:5000/omo/${appHashNameLookup[hash]}/`
//     : `https://${window.location.hostname}/ipns/${hash}/`;

//   let url = page
//     ? baseUrl + page
//     : baseUrl + "index.json";

//   const data = await fetch(url);
//   const json = await data.json();

//   return json;
// }

const app = new App({
    target: document.body,
});
export default app;
