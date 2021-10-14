import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

  return (
    <div className={theme}>
      {theme === "light" ? (
        <button onClick={toDark}>🔦</button>
      ) : (
        <button onClick={toLight}>💡</button>
      )}
    </div>
  );
};

export default Theme;
