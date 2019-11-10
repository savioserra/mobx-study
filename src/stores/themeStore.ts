import { observable, action, reaction } from "mobx";

interface ThemeData {
  accentColor?: string;
  appbarColor?: string;
  textAccentColor?: string;

  variant?: "dark" | "light";
}

const lightTheme: [keyof ThemeData, string][] = [
  ["variant", "light"],
  ["appbarColor", "#FFF"],
  ["accentColor", "#8B2635"],
  ["textAccentColor", "#00171F"]
];

const darkTheme: [keyof ThemeData, string][] = [
  ["variant", "dark"],
  ["appbarColor", "#000"],
  ["accentColor", "#00A7E1"],
  ["textAccentColor", "#FDFEFD"]
];

class ThemeStore {
  @observable current = observable.map(lightTheme);

  constructor() {
    reaction(() => this.current.get("appbarColor"), console.log);
  }

  @action private setLightTheme() {
    this.current.merge(lightTheme);
  }

  @action private setDarkTheme() {
    this.current.merge(darkTheme);
  }

  @action public switchTheme() {
    if (this.current.get("variant") === "dark") {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
}

export default new ThemeStore();
