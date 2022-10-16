import { FunctionComponent } from "react";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Header: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <header
      className={clsx(className, "flex flex-col items-center text-center")}
    >
      <svg className="mb-40 h-16 w-56 lg:mb-48 lg:h-24 lg:w-86">
        <use href="#logo" />
      </svg>
      <h1 className="mb-16 text-display-md text-gray lg:mb-14 lg:text-display-lg">
        We are launching{" "}
        <span className="font-700 text-very-dark-blue">soon!</span>
      </h1>
      <p className="text-body-md text-very-dark-blue lg:text-body-xl">
        Subscribe and get notified
      </p>
    </header>
  );
};

export default Header;
