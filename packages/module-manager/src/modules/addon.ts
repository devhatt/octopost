// import { ReactNode, createElement } from 'react';
// import express from 'express';
// import { addons } from '../lib/addon.js';

// const ROUTE_PREFIX = '/modules';

// type HandlerFunction = (req: any, res: any) => any;
// type HandlerConfig = { method: 'get' | 'post' };
// type HandlerMap = Record<
//   string,
//   { handler: HandlerFunction; config: HandlerConfig }
// >;

// export class Handler {
//   private addonId: string;
//   private handlers: HandlerMap = {};

//   constructor(addonId: string) {
//     this.addonId = addonId;
//   }

//   add(
//     id: string,
//     handler: HandlerFunction,
//     config: HandlerConfig = { method: 'get' }
//   ): void {
//     this.handlers[id] = {
//       handler,
//       config,
//     };
//   }

//   injectMap(
//     cb: (
//       method: 'get' | 'post',
//       route: string,
//       handler: HandlerFunction
//     ) => void
//   ) {
//     Object.entries(this.handlers).forEach(([id, { handler, config }]) => {
//       cb(config.method, `${ROUTE_PREFIX}/${this.addonId}/${id}`, handler);
//     });
//   }
// }

// export class Block {
//   public readonly name: string;
//   public readonly type: string;

//   render(): ReactNode {
//     return createElement('div', null, 'Block');
//   }

//   constructor(name: string, type: string) {
//     this.name = name;
//     this.type = type;
//   }
// }

// export class Addon {
//   private id: string;
//   private name: string;
//   public readonly handlers: Handler;

//   constructor(id: string, name: string, handler: Handler) {
//     this.id = id;
//     this.name = name;
//     this.handlers = handler;
//   }
// }

// // const addon = new Addon('ADDON_NAME', new Handler(''));

// // addons.add({
// //   name: 'ADDON_NAME',

// //   routes: [],
// // });

// // SERVER HANDLER
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// const app = express();

// const router = express.Router();

// app.use(router);

// addon.handlers.add(
//   'ACTION_ID',
//   async (req: Request, res: Response): Promise<void> => {},
//   { method: 'get' }
// );

// addon.handlers.injectMap((method, route, handler) => {
//   router[method](route, handler);
// });
