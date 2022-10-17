import { FunctionComponent } from "react";
import { clsx } from "clsx";
import Navigation from "@components/Navigation";

interface Props {
  className?: string;
}

const Footer: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <footer
      className={clsx(className, "flex flex-col items-center text-center")}
    >
      <Navigation />
      <p className="text-body-sm lg:text-body-md">
        <span aria-hidden="true">©</span> Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
