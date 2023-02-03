import React from 'react'

const SectionContainer = ({ isBordered=true, children }: { isBordered?:boolean, children: React.ReactNode }) => {
  return (
    <section className="section-container">
      {children}
      <style jsx>{`
        .section-container {
          padding: 0 20px;
          margin-top: 80px;
          ${isBordered ? "border-top: solid 1px var(--green)" : ""};
        }
      `}</style>{" "}
    </section>
  );
}

export default SectionContainer