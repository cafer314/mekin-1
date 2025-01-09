import {useState} from "#app";

export const useRtl = () => useState("rtl", () => undefined);
export const useThemeMode = () => useState("mode", () => "light");

const states = {
  themeMode: useThemeMode,
  rtl: useRtl,
};

export function toggleDark() {
  const themeMode = useThemeMode();
  const storedTheme = localStorage.getItem("awroraDarkMode");

  themeMode.value = storedTheme === "dark" ? "light" : "dark";
  localStorage.setItem("awroraDarkMode", themeMode.value);
}

export function setRtl(val) {
  const rtl = useRtl();
  rtl.value = val;
}

export default states;
