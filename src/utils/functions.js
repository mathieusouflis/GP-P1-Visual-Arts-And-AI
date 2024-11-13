import classNames from "classnames/bind";

const generateAfterSlide = (up = true) => {
  const classs = classNames(
    ` after:left-0 after:w-full after:h-full transition-all after:absolute`,
    {
      "after:bottom-28 hover:translate-y-28": up,
      "after:top-28 hover:-translate-y-28": !up,
    },
  );

  return classs;
};

export { generateAfterSlide };
