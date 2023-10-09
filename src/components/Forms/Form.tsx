"use client";
import { ReactElement, ReactNode, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
type FromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type FromProps = {
  children?: ReactElement | ReactNode;
  SubmitHandler: SubmitHandler<any>;
} & FromConfig;
const Form = ({
  children,
  SubmitHandler,
  defaultValues,
  resolver,
}: FromProps) => {
  const formConfig: FromConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm<FromProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    SubmitHandler(data);
    reset();
  };
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset, methods]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
