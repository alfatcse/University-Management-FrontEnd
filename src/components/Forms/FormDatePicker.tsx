import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
type UMDatePikerProps = {
  name: string;
  label?: string;
  value?: Dayjs;
  placeholder?: string;
  onChange?: (valOne: null | Dayjs, valTwo: string) => void;
  size?: "large" | "small";
};
const FormDatePicker = ({
  name,
  label,
  placeholder,
  onChange,
  size,
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();
  const HandleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || ""}
            size={size}
            onChange={HandleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
