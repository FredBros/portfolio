import React from "react";

type Props = {
  link: string;
};
const MailButton = ({ link }: Props) => {
  return (
    <button>
      <a href={`mailto:${link}`}>SEND MAIL</a>
      <style jsx>{`
        button {
            background-color: var(--green);
            width: 50vw;
          max-width: 300px;
          height: 100px;
          border: 1px solid var(--background-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        button:hover{
            background-color: var(--background-color);
            color: var(--green);
        }
      `}</style>
    </button>
  );
};

export default MailButton;
