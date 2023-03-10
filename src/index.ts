import { Injector, Logger, common, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("ClickClick");
export const SettingValues = await settings.init("Tharki.ClickClick", defaultSettings);
export const PluginInjector = new Injector();
export const { users: UserStore } = common;
import { registerSettings } from "./Components/Settings";
import { applyInjections } from "./patches/index";
export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
export { patchMessageContextMenu } from "./patches/index";

export { Settings } from "./Components/Settings";
