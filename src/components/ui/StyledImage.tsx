import React from "react";

type Props = {
  url: string;
  bordered?: boolean;
  alt?: string;
  objectFit?: "contain" | "cover";
};
const StyledImage = ({
  url,
  bordered = true,
  alt = "Portrait de Fred Brossard",
  objectFit = "cover",
}: Props) => {
  return (
    <>
      <div className="image-wrap">
        <div className="image">
          <img alt={alt} src={url} style={{ objectFit: `${objectFit}` }} />
        </div>
      </div>
      <style jsx>{`
        .image-wrap {
          position: relative;
          background-color: var(--green);
          height: 100%;
          width: 100%;
          transition: all 0.3s ease-in-out;
        }
        .image-wrap::after {
          display: ${bordered ? "block" : "none"};
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
        .image-wrap::before {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          mix-blend-mode: screen;
        }
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
          position: relative;
          overflow: hidden;
        }
        .image-wrap:hover .image {
          mix-blend-mode: normal;
          filter: none;
        }
        .image-wrap:hover {
          background-color: var(--light-gray);
        }
        .image-wrap:hover::after {
          transform: translate(10%, 10%);
        }
        img {
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: 100%;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
};

export default StyledImage;
