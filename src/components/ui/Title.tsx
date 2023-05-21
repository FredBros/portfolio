import React from 'react'


const Title = ({ children, color="inherit", theme }: { children: React.ReactNode, color?:string, theme:string | undefined}) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          font-size: ${theme === "light"
            ? "clamp(1.5rem, 0.625rem + 4vw, 4.375rem)"
            : "clamp(2.1875rem, 0.6731rem + 6.9231vw, 5rem)"};
          color: ${color};
          font-weight: ${theme === "light" ? "900" : ""};
        }
      `}</style>
    </h1>
  );
}

export default Title