export const Clasical = ({ children }) => {
  return <p className="text-sm uppercase">{children}</p>;
};

// export const ClasicalBold = ({ children }) => {
//   return <p className="text-sm uppercase font-bold">{children}</p>;
// };

export const Title = ({ className, children }) => {
  return <h1 className={`text-9xl uppercase ${className}`}>{children}</h1>;
};
