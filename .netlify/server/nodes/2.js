

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bl3ZI7eT.js","_app/immutable/chunks/scheduler.CV3NVII-.js","_app/immutable/chunks/index.BT3kTLlT.js"];
export const stylesheets = [];
export const fonts = [];
