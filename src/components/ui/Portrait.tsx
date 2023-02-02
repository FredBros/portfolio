import React from 'react'
import Image from "next/image";

type Props = {
    url:string
}
const Portrait = ({url}:Props) => {
  return (
    <>
      <div className="portrait-wrap">
        <div className="portrait">
          <Image
            alt="Fred Brossard Portrait"
            src={url}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <style jsx>{`
        .portrait-wrap {
          position: relative;
          background-color: var(--green);
          max-width: 300px;
          max-height: 300px;
          height: 60vw;
          width: 60vw;
          margin: 40px auto 50px auto;
          transition: all 0.3s ease-in-out;
        }
        .portrait-wrap::after {
          z-index: -1;
          position: absolute;
          content: "";
          height: 100%;
          width: 100%;
          top: 0;
          transform: translate(15%, 15%);
          border: 1px solid var(--green);
          transition: all 0.3s ease-in-out;
        }
        .portrait-wrap::before {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          mix-blend-mode: screen;
        }
        .portrait {
          height: 100%;
          width: 100%;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
          position: relative;
        }
        .portrait-wrap:hover .portrait {
          mix-blend-mode: normal;
          filter: none;
        }
        .portrait-wrap:hover {
          background-color: var(--light-gray);
        }
        .portrait-wrap:hover::after {
          transform: translate(10%, 10%);
        }
         {
        }
      `}</style>
    </>
  );
}

export default Portrait