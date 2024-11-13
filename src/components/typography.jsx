export const Clasical = ({ blur = false, className, children, ...props }) => {
  return (
    <p
      className={`text-[14px] uppercase transition-all ${blur ? "blur-sm" : ""} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export const Title = ({ blur = false, className, children, ...props }) => {
  return (
    <h1
      className={`text-9xl uppercase font-black transition-all ${blur ? "blur-sm" : ""} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
