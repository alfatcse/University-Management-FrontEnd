"use client";
import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
type FromConfig = {
  defaultValues?: Record<string, any>;
};
type FromProps = {
  children?: ReactElement | ReactNode;
  SubmitHandler: SubmitHandler<any>;
} & FromConfig;
const Form = ({ children, SubmitHandler, defaultValues }: FromProps) => {
  const formConfig: FromConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm<FromProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const onSubmit = (data) => {
    SubmitHandler(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
