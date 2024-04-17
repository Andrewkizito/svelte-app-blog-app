

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6QfsR4tM.js","_app/immutable/chunks/scheduler.CV3NVII-.js","_app/immutable/chunks/index.BT3kTLlT.js","_app/immutable/chunks/entry.B7TqZKXO.js"];
export const stylesheets = [];
export const fonts = [];
