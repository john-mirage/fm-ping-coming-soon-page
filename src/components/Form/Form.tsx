import { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@components/Button";
import Input from "@components/Input";
import Message from "@components/Message";

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

const Form = ({ className = "" }: Props) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const hasSuccessMessage = useMemo(() => {
    return successMessage.length > 0;
  }, [successMessage]);

  const onSubmit = (formData: FormData) => {
    setSuccessMessage(
      `${formData.email} has been successfully added to the notification list.`
    );
  };

  const onError = () => {
    if (hasSuccessMessage) {
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    if (isDirty && hasSuccessMessage) {
      setSuccessMessage("");
    }
  }, [isDirty]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form
      className={clsx(className, "print:hidden")}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="space-y-16 lg:flex lg:flex-row lg:items-start lg:space-y-0">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <Input
              name={name}
              label="Email address"
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
      </div>
      {hasSuccessMessage && <Message color="blue">{successMessage}</Message>}
    </form>
  );
};

export default Form;
