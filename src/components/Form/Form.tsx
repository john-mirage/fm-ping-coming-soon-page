import { FunctionComponent } from "react";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Form: FunctionComponent<Props> = ({ className = "" }) => {
  return <form className={clsx(className)}></form>;
};

export default Form;
