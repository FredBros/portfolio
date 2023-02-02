import React from 'react'

const VerticalSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="vertical-section">
      {children}
      <style jsx>{`
        .vertical-section {
          max-width: 1000px;
         margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default VerticalSection