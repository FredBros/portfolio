import React, { useState } from "react";

type Props = {
  backgroundColor?: string
  color?: string
  delay?: number;
  content: string;
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
};

const Tooltip = (props:Props) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
      <style jsx>{`
        .Tooltip-Tip {
          border-color: ${props.backgroundColor || "black"};
          color: ${props.color || "white"};
          background-color: ${props.backgroundColor || "black"};
        }
      `}</style>
    </div>
  );
};

export default Tooltip;
