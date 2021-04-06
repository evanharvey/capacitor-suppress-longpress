declare module '@capacitor/core' {
  interface PluginRegistry {
    SuppressLongpress: SuppressLongpressPlugin;
  }
}

export interface SuppressLongpressPlugin {
  suppress(): Promise<{ result: boolean }>;
}
