import { Col, Row } from "antd";
import React from "react";
import FromInput from "../Forms/FromInput";
import FormDatePicker from "../Forms/FormDatePicker";
import { BloodGroup } from "@/constants/global";
import FormTextArea from "../Forms/FormTextArea";
import FromSelectField from "../Forms/FromSelectField";
const StudentBasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={8} style={{ margin: "10px 0" }}>
          <FromInput
            type="email"
            name="student.email"
            label="Email address"
            size="large"
          />
        </Col>

        <Col span={8} style={{ margin: "10px 0" }}>
          <FromInput
            name="student.contactNo"
            label="Contact no."
            size="large"
          />
        </Col>

        <Col span={8} style={{ margin: "10px 0" }}>
          <FromInput
            name="student.emergencyContactNo"
            label="Emergency contact no."
            size="large"
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date of birth"
            size="large"
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FromSelectField
            name="student.bloodGroup"
            label="Blood group"
            options={BloodGroup}
            size="large"
            placeholder="Select"
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.presentAddress"
            label="Present address"
            rows={4}
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
