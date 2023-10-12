"use client";
import { useAddSemesterRegistrationsMutation } from "@/app/redux/api/semesterRegistrationApi";
import ACSemesterField from "@/components/Forms/ACSemesterField";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";
import FromInput from "@/components/Forms/FromInput";
const CreateSemesterRegistrationPage = () => {
  const [addSemesterRegistrations] = useAddSemesterRegistrationsMutation();
  const onSubmit = async (data: any) => {
    data.minCredit = parseInt(data?.minCredit);
    data.maxCredit = parseInt(data?.maxCredit);
    console.log(data);
    message.loading("Creating.....");
    try {
      const res = await addSemesterRegistrations(data).unwrap();
      if (res?.id) {
        message.success("Semester registration successfully added");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          {
            label: "semester-registration",
            link: `/${base}/semester-registration`,
          },
        ]}
      />
      <h1>Create Semester Registration</h1>
      <Form SubmitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker
                name="startDate"
                label="Start Date"
                size="large"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker name="endDate" label="End Date" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <ACSemesterField
                name="academicSemesterId"
                label="Academic Semester"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="minCredit" label="Min Credit" type="number" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="maxCredit" label="Max Credit" type="number" />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateSemesterRegistrationPage;
