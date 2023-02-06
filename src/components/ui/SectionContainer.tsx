import React from 'react'

const SectionContainer = ({ isBordered=true, children, padding=20 }: { isBordered?:boolean, children: React.ReactNode, padding: number }) => {
  return (
    <section className="section-container">
      {children}
      <style jsx>{`
        .section-container {
          padding: 0 ${padding}px;
          margin-top: 80px;
          ${isBordered ? "border-top: solid 1px var(--green)" : ""};
        }
      `}</style>{" "}
    </section>
  );
}

export default SectionContainer