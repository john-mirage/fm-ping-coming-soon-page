import { FunctionComponent } from "react";
import logo from "@images/logo.svg";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Header: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <header className={clsx(className, "flex flex-col items-center")}>
      <img className="mb-40" src={logo} alt="company logo" aria-hidden="true" />
      <h1 className="mb-16 text-display-md text-very-dark-blue">
        We are launching <span className="font-700">soon!</span>
      </h1>
      <p className="text-body-md text-gray">Subscribe and get notified</p>
    </header>
  );
};

export default Header;
