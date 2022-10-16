import { FunctionComponent } from "react";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {
  className?: string;
}

interface FormData {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("Whoops! It looks like you forgot to add your email")
      .email("Please provide a valid email address"),
  })
  .required();

const Form: FunctionComponent<Props> = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form
      className={clsx(
        className,
        "print:hidden lg:flex lg:flex-row lg:items-start"
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-16 lg:mb-0 lg:mr-16 lg:flex-1">
        <label className="sr-only" htmlFor="email-address">
          Email address
        </label>
        <input
          className={clsx(
            "h-40 w-full rounded-full border px-32 text-body-md text-very-dark-blue placeholder:text-gray focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-blue lg:h-56 lg:text-body-lg",
            errors.email ? "border-light-red" : "border-pale-blue"
          )}
          id="email-address"
          type="text"
          placeholder="Your email address..."
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email")}
        />
        {errors.email && (
          <p
            className="mt-6 text-center text-label-sm italic text-light-red lg:mt-8 lg:pl-32 lg:text-left lg:text-label-md"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <button
        className="min-h-40 w-full rounded-full border border-blue bg-blue text-label-md text-white shadow-lg shadow-blue/40 focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-blue motion-safe:transition-opacity lg:min-h-56 lg:w-200 lg:flex-none lg:text-label-lg hover-device:hover:opacity-75"
        type="submit"
      >
        Notify Me
      </button>
    </form>
  );
};

export default Form;
