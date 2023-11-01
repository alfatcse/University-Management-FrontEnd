"use client";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/app/redux/api/departmentApi";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";
type IDProps = {
  params: any;
};
const EditDepartmentPage = ({ params }: IDProps) => {
  console.log(params);
  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();
  //@ts-ignore
  const defaultValues = {
    title: data?.title || "",
  };
  const onSubmit = async (values: { title: string }) => {
    console.log(values);
    message.loading("Updating.....");
    try {
      const result = await updateDepartment({ id, body: values });
      console.log(result);
      if (result) {
        message.success("Department Updated Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error("Something went Wrong!", err.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />
      <ActionBar title="Update Department">
        <Form SubmitHandler={onSubmit} defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput name="title" label="Title" />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </ActionBar>
    </div>
  );
};

export default EditDepartmentPage;
