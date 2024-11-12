const DropHoverLine = ({ className, children }) => {
  return (
    <div
      className={`flex flex-row w-full justify-evenly place-items-center ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default DropHoverLine;
