import { FunctionComponent } from "react";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Hero: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <div className={clsx(className, "flex flex-col items-center text-center")}>
      <h2 className="mb-16 text-display-md text-gray contrast-more:text-very-dark-blue lg:mb-14 lg:text-display-lg">
        We are launching{" "}
        <span className="font-700 text-very-dark-blue">soon!</span>
      </h2>
      <p className="text-body-md text-very-dark-blue print:hidden lg:text-body-xl">
        Subscribe and get notified
      </p>
    </div>
  );
};

export default Hero;
