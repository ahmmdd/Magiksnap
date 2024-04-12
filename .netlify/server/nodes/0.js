import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.WKNP_Fdv.js","_app/immutable/chunks/scheduler.CjnXJ6Ir.js","_app/immutable/chunks/index.BaHuaqhG.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.sI1wcqA5.js","_app/immutable/chunks/entry.D_xFNZ0u.js"];
export const stylesheets = ["_app/immutable/assets/0.Ca7IhUOl.css"];
export const fonts = [];
