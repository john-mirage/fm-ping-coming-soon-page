import { ReactNode } from "react";
import { clsx } from "clsx";

interface Props {
  children: ReactNode;
  color?: "blue" | "red";
}

const Message = ({ children, color = "blue" }: Props) => {
  return (
    <p
      className={clsx(
        { "text-light-red": color === "red" },
        { "text-blue": color === "blue" },
        "mt-8 text-center text-label-sm italic lg:mt-8 lg:pl-32 lg:text-left lg:text-label-md"
      )}
      role="alert"
    >
      {children}
    </p>
  );
};

export default Message;
