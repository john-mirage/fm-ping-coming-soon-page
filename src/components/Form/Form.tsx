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
    email: yup.string().required().email(),
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
      <div className="mb-10 lg:mb-0 lg:mr-16 lg:flex-1">
        <input
          className="h-40 w-full rounded-full border-pale-blue px-32 text-body-md text-very-dark-blue placeholder:text-gray focus-visible:border-blue focus-visible:ring-0 lg:h-56 lg:text-body-lg"
          type="text"
          placeholder="Your email address..."
          {...register("email")}
        />
        <p className="text-label-sm italic text-light-red lg:text-label-md">
          {errors.email?.message}
        </p>
      </div>
      <button
        className="min-h-40 w-full rounded-full bg-blue text-label-md text-white focus-within:outline-none focus-visible:shadow-social-focus motion-safe:transition-shadow lg:min-h-56 lg:w-200 lg:flex-none lg:text-label-lg"
        type="submit"
      >
        Notify Me
      </button>
    </form>
  );
};

export default Form;
