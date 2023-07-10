import { PropsWithChildren } from "react";

interface IBgColorSpanProps extends PropsWithChildren {
  className?: string;
}

const BgColorSpan = (props: IBgColorSpanProps) => {
  const { children, className } = props;

  return (
    <span className={`bg-primary text-secondary w-fit px-2 ${className}`}>
      {children}
    </span>
  );
};

export default BgColorSpan;
