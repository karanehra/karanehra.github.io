import { PropsWithChildren } from "react";

interface IBgColorSpanProps extends PropsWithChildren {
  className?: string;
  noXPad?: boolean;
}

const BgColorSpan = (props: IBgColorSpanProps) => {
  const { children, className, noXPad = false } = props;

  return (
    <span
      className={`bg-primary text-secondary w-fit ${
        noXPad ? "px-0" : "px-2"
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default BgColorSpan;
