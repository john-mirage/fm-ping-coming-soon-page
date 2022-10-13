import { FunctionComponent } from "react";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Form: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <form
      className={clsx(
        className,
        "print:hidden lg:flex lg:flex-row lg:items-center"
      )}
    >
      <input
        className="mb-10 h-40 w-full rounded-full border-pale-blue px-32 text-body-md text-very-dark-blue placeholder:text-gray focus-visible:border-blue focus-visible:ring-0 lg:mb-0 lg:mr-16 lg:h-56 lg:flex-1 lg:text-body-lg"
        type="text"
        placeholder="Your email address..."
      />
      <button className="min-h-40 w-full rounded-full bg-blue text-label-md text-white focus-within:outline-none focus-visible:shadow-social-focus motion-safe:transition-shadow lg:min-h-56 lg:w-200 lg:flex-none lg:text-label-lg">
        Notify Me
      </button>
    </form>
  );
};

export default Form;
