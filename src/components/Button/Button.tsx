import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  type: "button" | "reset" | "submit" | undefined;
}

const Button: FunctionComponent<PropsWithChildren<Props>> = ({
  type,
  children,
}) => {
  return (
    <button
      className="min-h-40 w-full rounded-full border border-blue bg-blue text-label-md text-white shadow-lg shadow-blue/40 focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-blue motion-safe:transition-opacity lg:min-h-56 lg:w-200 lg:flex-none lg:text-label-lg hover-device:hover:opacity-75"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
