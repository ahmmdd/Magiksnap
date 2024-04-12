import * as server from '../entries/pages/book-an-event/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/book-an-event/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/book-an-event/+page.server.js";
export const imports = ["_app/immutable/nodes/4.V2d5Nx5x.js","_app/immutable/chunks/scheduler.CjnXJ6Ir.js","_app/immutable/chunks/index.BaHuaqhG.js","_app/immutable/chunks/entry.D_xFNZ0u.js"];
export const stylesheets = ["_app/immutable/assets/4.B3L-Ck64.css"];
export const fonts = [];
