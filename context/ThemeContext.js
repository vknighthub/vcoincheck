import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const body = document.querySelector("body");
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [, setBackground] = useState({ value: "dark", label: "Dark" });

  const changeBackground = (name) => {
    body.setAttribute("data-theme-version", name.value);
    setBackground(name);
  };
  //setAttr.value = themeSettings.version;
  //changeBackground(setAttr);

  useEffect(() => {
    const body = document.querySelector("body");
    let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      window.innerWidth >= 768 && window.innerWidth < 1300
        ? body.setAttribute("data-sidebar-style", "overlay")
        : window.innerWidth <= 768
        ? body.setAttribute("data-sidebar-style", "overlay")
        : body.setAttribute("data-sidebar-style", "full");
    };
    body.setAttribute("data-typography", "quicksand");
    body.setAttribute("data-theme-version", "dark");
    //body.setAttribute("data-theme-version", "dark");
    body.setAttribute("data-layout", "vertical");
    body.setAttribute("data-nav-headerbg", "color_1");
    body.setAttribute("data-headerbg", "color_1");
    body.setAttribute("data-sidebar-style", "overlay");
    body.setAttribute("data-sibebarbg", "color_1");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-sidebar-position", "fixed");
    body.setAttribute("data-header-position", "fixed");
    body.setAttribute("data-container", "wide");
    body.setAttribute("direction", "ltr");
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        body,
        windowWidth,
        windowHeight,
        changeBackground,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
