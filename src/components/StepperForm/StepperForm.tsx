"use client";
import React, { ReactElement, ReactNode, useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { getFromLocalStorage } from "@/utils/local-storage";
interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}
interface IStepsProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
}
type FromConfig = {
  defaultValues?: Record<string, any>;
};
type FromProps = {
  children?: ReactElement | ReactNode;
  SubmitHandler: SubmitHandler<any>;
} & FromConfig;
const StepperForm = ({ steps, submitHandler }: IStepsProps) => {
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const formConfig: FromConfig = {};
  const methods = useForm<FromProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleStudentOnSubmit}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
