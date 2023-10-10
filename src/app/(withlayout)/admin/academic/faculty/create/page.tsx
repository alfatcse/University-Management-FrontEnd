"use client";
import { useAddAcademicFacultyMutation } from "@/app/redux/api/academic/facultyApi";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";

const CreateFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      console.log(data);
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Academic Faculty Created Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error("Something went Wrong!", err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "faculty", link: `/${base}/academic/faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
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

export default CreateFacultyPage;
