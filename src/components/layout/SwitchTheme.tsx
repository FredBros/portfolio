import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="toggle-theme-wrapper">
      <div className="sun-moon-icon" >
        <FiSun size="100%" />
      </div>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <div className="slider"></div>
      </label>

      {/* <Toggle checked={false} disabled={false} onChange={function (): void {
         toggleTheme;
       } } name={''} value={''} labelRight={''} labelLeft={''}/> */}
      <div className="sun-moon-icon" >
        <BiMoon size="100%" />
      </div>

      <style jsx>{`
        .toggle-theme-wrapper {
          display: flex;
          align-items: center;
          gap: 4px;
          width: 110px;
          height: 30px;
        }

        .toggle-theme-wrapper span {
          font-size: 28px;
        }
        .sun-moon-icon {
          height: 34px;
          width: 34px;
          color: ${theme === "light" ? "#000" : "var(--green)"};
        }

        .toggle-theme {
          position: relative;
          display: inline-block;
          height: 34px;
          width: 54px;
        }

        .toggle-theme input {
          display: none;
        }

        .slider {
          background-color: ${theme === "light" ? "#A17FBC" : "var(--green)"};
          position: absolute;
          cursor: pointer;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          transition: 0.2s;
          border-radius: 16px;
          border: ${theme === "light"
            ? "2px solid #000"
            : "2px solid var(--background-color)"};
          box-shadow: ${theme === "light" ? "2px 2px 0px #000" : "none"};
        }

        .slider:before {
          background-color: ${theme === "light"
            ? "#000"
            : "var(--background-color)"};
          bottom: 2px;
          content: "";
          height: 26px;
          left: 4px;
          position: absolute;
          transition: 0.4s;
          width: 26px;
          border-radius: 50%;
        }

        input:checked + .slider:before {
          transform: translateX(10px);
        }

         {
          /* input:checked + .slider {
          background-color: cornflowerblue;
        } */
        }
      `}</style>
    </div>
  );
};

export default SwitchTheme;
