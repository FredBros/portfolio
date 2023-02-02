import React from 'react'

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>{children}
    <style jsx>{`
            section{
                padding: 0 20px;
    
    }
          `}</style>   </section>
  )
}

export default SectionContainer