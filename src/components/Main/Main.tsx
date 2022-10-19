import Form from "@components/Form";
import Illustration from "@components/Illustration";
import { clsx } from "clsx";
import dashboardIllustration from "@images/illustration-dashboard.png";

interface Props {
  className?: string;
}

const Main = ({ className = "" }: Props) => {
  return (
    <main
      className={clsx(className, "mb-32 flex w-full flex-col items-center")}
    >
      <h2 className="mb-16 text-display-md text-gray contrast-more:text-very-dark-blue lg:mb-14 lg:text-display-lg">
        We are launching{" "}
        <span className="font-700 text-very-dark-blue">soon!</span>
      </h2>
      <p className="mb-32 text-body-md text-very-dark-blue print:hidden lg:mb-40 lg:text-body-xl">
        Subscribe and get notified
      </p>
      <Form className="mx-auto mb-72 w-full max-w-280 lg:mb-92 lg:max-w-none" />
      <Illustration src={dashboardIllustration} />
    </main>
  );
};

export default Main;
