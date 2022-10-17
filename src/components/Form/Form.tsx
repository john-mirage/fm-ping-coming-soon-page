import { FunctionComponent, useEffect } from "react";
import { clsx } from "clsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@components/Button";
import Input from "@components/Input";

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
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData.email);
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
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            name={name}
            value={value}
            id="email"
            type="text"
            placeholder="Your email address..."
            error={errors.email?.message ? errors.email.message : ""}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <Button type="submit">Notify Me</Button>
    </form>
  );
};

export default Form;
