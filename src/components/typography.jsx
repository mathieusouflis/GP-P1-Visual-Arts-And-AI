export const Clasical = ({ className, children, ...props }) => {
  return (
    <p className={`text-sm uppercase ${className}`} {...props}>
      {children}
    </p>
  );
};

// export const ClasicalBold = ({ children }) => {
//   return <p className="text-sm uppercase font-bold">{children}</p>;
// };

export const Title = ({ className, children, ...props }) => {
  return (
    <h1 className={`text-9xl uppercase font-black ${className}`} {...props}>
      {children}
    </h1>
  );
};
