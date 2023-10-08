"use client";

import { useAddDepartmentMutation } from "@/app/redux/api/departmentApi";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department Added Successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error("Something went Wrong!", err.message);
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form SubmitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
