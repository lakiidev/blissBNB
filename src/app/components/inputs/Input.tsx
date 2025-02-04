import { FC } from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatedPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatedPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatedPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed dark:bg-zinc-950 ${
          formatedPrice ? "pl-9" : "pl-4"
        } ${
          errors[id] ? "border-red-500" : "border-neutral-300 dark:border-black"
        } ${
          errors[id]
            ? "focus:border-rose-500"
            : "focus:border-black dark:border-0"
        }`}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${
          formatedPrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
        ${errors[id] ? "text-red-500" : "text-zinc-400"}

        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
