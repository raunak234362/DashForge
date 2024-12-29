/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useId, useState } from 'react';
import { Input as InputField, Textarea } from '@material-tailwind/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Input(
  { label, type = 'text', className, variant, ...props },
  ref,
) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full items-center">
      {type === 'textarea' ? (
        <Textarea
          variant={variant}
          label={label}
          className={`px-3 py-1 w-full rounded-lg bg-white text-gray-700 focus:bg-slate-300 focus:bg-opacity-60 duration-200 ${className}`}
          ref={ref}
          placeholder={label}
          {...props}
          id={id}
        />
      ) : type === 'file' ? (
        <div className="relative w-full">
          <label
            htmlFor={id}
            className="flex items-center justify-center px-3 py-2 w-full text-gray-500 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-slate-200 hover:border-slate-400 transition duration-200"
          >
            <span className="truncate">
              {props.value ? props.value.name : label || 'Choose a file'}
            </span>
            <input
              type="file"
              id={id}
              className="hidden"
              ref={ref}
              {...props}
            />
          </label>
        </div>
      ) : (
        <div className="relative w-full">
          <InputField
            variant={variant}
            label={label}
            type={showPassword && type === 'password' ? 'text' : type}
            className={`px-3 py-1 w-full rounded-lg bg-white text-gray-700 focus:bg-slate-300 focus:bg-opacity-60 duration-200 ${className}`}
            ref={ref}
            placeholder={label}
            {...props}
            id={id}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded"
            >
              {showPassword ? (
                <FiEye className="text-black" />
              ) : (
                <FiEyeOff className="text-black" />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default React.forwardRef(Input);
