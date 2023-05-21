import React from 'react'

type Props = {
  isBordered?: boolean;
  children: React.ReactNode;
  padding?: number;
  isPage?: boolean;
  theme?: string | undefined;
  id?: string
};

const SectionContainer = ({ isBordered=true, children, padding=20, theme="dark", id}:Props) => {
  return (
    <>
      <div className="smooth-scroll-anchor" id={id}>
        <section className="section-container">
          {children}
              </section>
          <style jsx>{`
            .smooth-scroll-anchor {
              padding-top: 100px;
            }
            .section-container {
              padding: 0 ${padding}px;              
              ${isBordered && theme === "dark"
                ? "border-top: solid 1px var(--green)"
                : ""};
            }
          `}</style>
      </div>
    </>
  );
}

export default SectionContainer