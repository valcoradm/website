import { useEffect, useState } from "react";

function ThemeSelector() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("covax_theme") === "theme-dark") {
      setTheme("theme-dark");
      setChecked(false);
    } else {
      setTheme("theme-light");
      setChecked(true);
    }
  }, []);
  const setTheme = (themeName) => {
    localStorage.setItem("covax_theme", themeName);
    document.documentElement.className = themeName;
  };
  const toggleTheme = () => {
    setChecked(localStorage.getItem("covax_theme") === "theme-dark");
    if (localStorage.getItem("covax_theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  };
  return (
    <div class="switch-box">
      <label id="switch" class="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          id="slider"
          checked={checked}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default ThemeSelector;
