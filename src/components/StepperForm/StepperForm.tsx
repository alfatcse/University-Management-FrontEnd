"use client";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import Form from "@/components/Forms/Form";
interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}
interface IStepsProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
}
type FromConfig = {
  defaultValues?: Record<string, any>;
};
type FromProps = {
  children?: ReactElement | ReactNode;
  SubmitHandler: SubmitHandler<any>;
} & FromConfig;
const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );
  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);
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
  const handleStudentSubmit = (data: any) => {
    console.log(data);
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink);
  };
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <Form SubmitHandler={handleStudentSubmit}>
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
        </Form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
