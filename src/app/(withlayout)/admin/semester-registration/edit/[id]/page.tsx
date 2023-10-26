"use client";
import {
  useSemesterRegistrationQuery,
  useUpdateSemesterRegistrationsMutation,
} from "@/app/redux/api/semesterRegistrationApi";
import ACSemesterField from "@/components/Forms/ACSemesterField";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { semesterRegistrationStatus } from "@/constants/global";
import FromInput from "@/components/Forms/FromInput";
import { Button, Col, Row, message } from "antd";
import dayjs from "dayjs";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FromSelectField";
const EditSemesterRegistration = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useSemesterRegistrationQuery(id);
  const [updateSemesterRegistration] = useUpdateSemesterRegistrationsMutation();
  const updateOnSubmit = async (values: any) => {
    const tempObject = { ...values };
    tempObject["startDate"] = dayjs(tempObject["startDate"]).toISOString();
    tempObject["endDate"] = dayjs(tempObject["endDate"]).toISOString();
    tempObject["minCredit"] = Number(tempObject["minCredit"]);
    tempObject["maxCredit"] = Number(tempObject["maxCredit"]);
    message.loading("Updating....");
    try {
      const res = await updateSemesterRegistration({
        id,
        body: tempObject,
      }).unwrap();
      if (res?.id) {
        message.success("Updated Semester registration successfully");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const statusOptions = semesterRegistrationStatus
    ?.map((status) => {
      return {
        label: status,
        value: status,
        disabled: false,
      };
    })
    .map((el) => {
      if (data?.status === "UPCOMING") {
        if (el.value === "ENDED") {
          el.disabled = true;
        }
      } else if (data?.status === "ONGOING") {
        if (el.value === "UPCOMING") {
          el.disabled = true;
        }
      } else if (data?.status === "ENDED") {
        if (el.value === "UPCOMING" || el.value === "ONGOING") {
          el.disabled = true;
        }
      }
      return el;
    });
  const defaultValues = {
    startDate: data?.startDate || "",
    endDate: data?.endDate || "",
    academicSemesterId: data?.academicSemesterId || "",
    minCredit: data?.minCredit || "",
    maxCredit: data?.maxCredit || "",
    status: data?.status || "",
  };
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: "admin", link: "/admin" },
          {
            label: "semester-registration",
            link: "/admin/semester-registration",
          },
        ]}
      />
      <ActionBar title="Edit semester registration"></ActionBar>
      <Form SubmitHandler={updateOnSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker name="startDate" label="start date" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker name="endDate" label="end date" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <ACSemesterField
                name="academicSemesterId"
                label="Academic semester"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput type="number" name="minCredit" label="min credit" />
            </div>

            <div style={{ margin: "10px 0px" }}>
              <FromInput type="number" name="maxCredit" label="max credit" />
            </div>

            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                options={statusOptions}
                name="status"
                label="status"
              />
            </div>
          </Col>
        </Row>
        <Button htmlType="submit">Update</Button>
      </Form>
    </>
  );
};

export default EditSemesterRegistration;
