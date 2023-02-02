import React from 'react'


const Title = ({ children, color="inherit" }: { children: React.ReactNode, color?:string}) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          font-size: clamp(40px, 8vw, 80px);
          color: ${color};
        }
      `}</style>
    </h1>
  );
}

export default Title