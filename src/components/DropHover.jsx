import { useState } from "react";

import { Clasical } from "./typography";

const DropHover = ({
  title,
  description,
  mouseEnterEvent,
  mouseLeaveEvent,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={className}>
      <span
        className={`cursor-default transition-all ${selected ? "opacity-100" : "opacity-0"} relative  w-0 h-0`}
      >
        <span className="absolute top-10 w-[28rem] flex flex-col gap-2">
          {description.map((value, index) => (
            <>
              <Clasical key={index}>{value}</Clasical>
            </>
          ))}
        </span>
      </span>
      <Clasical
        className={"font-semibold"}
        onMouseEnter={(e) => {
          mouseEnterEvent(e);
          setSelected(true);
        }}
        onMouseLeave={() => {
          mouseLeaveEvent();
          setSelected(false);
        }}
      >
        {title}
      </Clasical>
    </div>
  );
};

export default DropHover;
