import { FunctionComponent } from "react";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Footer: FunctionComponent<Props> = ({ className = "" }) => {
  return <footer className={clsx(className)}>Test</footer>;
};

export default Footer;
