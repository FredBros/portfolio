import React from 'react'

const TitleSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="title-section firacode">
      {children}
      <style jsx>{`
        .title-section {
            padding: 0 0.8rem;
            display: inline-block;
            color: var(--green);
            background: var(--background-color);
            font-size: 1.5rem;
            transform: translateY(-50%);
            z-index: 1;
            margin-bottom: 50px
        }
      `}</style>
    </h2>
  );
}

export default TitleSection