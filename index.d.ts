declare module 'kyaru-api.js' {
  export class KyaryAgent {
    constructor(key: string);
    get(endpoint: string): Promise<object>;
  }

  export const version: string;
}
