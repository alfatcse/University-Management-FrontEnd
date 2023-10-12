"use client";
import { useAddBuildingMutation } from "@/app/redux/api/buildingApi";
import Form from "@/components/Forms/Form";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";
import FromInput from "@/components/Forms/FromInput";
const CreateBuildPage = () => {
  const [addBuilding] = useAddBuildingMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await addBuilding(data).unwrap();
      // console.log(res);
      if (res?.id) {
        message.success("Building added successfully");
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
          { label: "building", link: `/${base}/building` },
        ]}
      />
      <h1>Create Building</h1>
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

export default CreateBuildPage;
