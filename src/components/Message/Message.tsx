import { FunctionComponent, PropsWithChildren } from "react";
import { clsx } from "clsx";

interface Props {
  color?: string;
}

const Message: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  color = "red",
}) => {
  return (
    <p
      className={clsx(
        { "text-light-red": color === "red" },
        { "text-blue": color === "blue" },
        "mt-6 text-center text-label-sm italic lg:mt-8 lg:pl-32 lg:text-left lg:text-label-md"
      )}
      role="alert"
    >
      {children}
    </p>
  );
};

export default Message;
