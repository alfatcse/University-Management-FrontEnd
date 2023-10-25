"use client";
export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  label?: string;
  placeholder?: string;
  defaultvalue?: SelectOptions;
  handleChange?: (el: string) => void;
};
import { Input, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
const FromSelectField = ({
  name,
  size,
  value,
  id,
  label,
  defaultvalue,
  options,
  placeholder,
  handleChange,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            style={{
              width: "100%",
            }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FromSelectField;
