import { ChangeEvent, FocusEvent, forwardRef } from "react";
import { clsx } from "clsx";
import Message from "@components/Message";

interface Props {
  name: string;
  label: string;
  value: string;
  id: string;
  type: string;
  placeholder: string;
  error: string;
  onChange: (event: ChangeEvent) => void;
  onBlur: (event: FocusEvent) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { name, label, value, id, type, placeholder, error, onChange, onBlur },
    ref
  ) => {
    const isNotValid = error.length > 0;
    return (
      <div className="mb-16 lg:mb-0 lg:mr-16 lg:flex-1">
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          className={clsx(
            "h-40 w-full rounded-full border px-32 text-body-md text-very-dark-blue placeholder:text-gray focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-blue lg:h-56 lg:text-body-lg",
            isNotValid ? "border-light-red" : "border-pale-blue"
          )}
          name={name}
          value={value}
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={isNotValid ? "true" : "false"}
          onChange={onChange}
          onBlur={onBlur}
        />
        {isNotValid && <Message color="red">{error}</Message>}
      </div>
    );
  }
);

export default Input;
