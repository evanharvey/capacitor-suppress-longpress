import { WebPlugin } from '@capacitor/core';
import { SuppressLongpressPlugin } from './definitions';

export class SuppressLongpressWeb extends WebPlugin implements SuppressLongpressPlugin {
  constructor() {
    super({
      name: 'SuppressLongpress',
      platforms: ['web'],
    });
  }

  async suppress(): Promise<{ result: boolean }> {
    return {result: false}
  }
}

const SuppressLongpress = new SuppressLongpressWeb();

export { SuppressLongpress };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SuppressLongpress);
