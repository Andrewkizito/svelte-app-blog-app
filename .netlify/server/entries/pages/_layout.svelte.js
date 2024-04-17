import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head data-svelte-h="svelte-1rnx4y8"><title>Blog App</title></head> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
