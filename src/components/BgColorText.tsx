import { PropsWithChildren } from "react";

interface IBgColorTextProps extends PropsWithChildren {
  className?: string;
}

const BgColorText = (props: IBgColorTextProps) => {
  const { children, className } = props;

  return (
    <span className={`bg-primary text-secondary w-fit px-2 py-1 ${className}`}>{children}</span>
  );
};

export default BgColorText;
