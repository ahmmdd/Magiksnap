

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/guest-book/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Bfwe9Jsh.js","_app/immutable/chunks/scheduler.CjnXJ6Ir.js","_app/immutable/chunks/index.BaHuaqhG.js"];
export const stylesheets = [];
export const fonts = [];
