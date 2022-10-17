import { FunctionComponent, useEffect, useState } from "react";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Message from "@components/Message";
import Button from "@components/Button";

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
  const [hasBeenSuccessfullySubmitted, setHasBeenSuccessfullySubmitted] =
    useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onInput = () => {
    if (hasBeenSuccessfullySubmitted) setHasBeenSuccessfullySubmitted(false);
  };

  const onSubmit = () => {
    setHasBeenSuccessfullySubmitted(true);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

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
          onInput={onInput}
        />
        {errors.email && <Message color="red">{errors.email.message}</Message>}
        {hasBeenSuccessfullySubmitted && (
          <Message color="blue">
            Your email address has been added to the notification list.
          </Message>
        )}
      </div>
      <Button type="submit">Notify Me</Button>
    </form>
  );
};

export default Form;
