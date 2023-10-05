"use client";
import { Col, Row } from "antd";
import React from "react";
import FromInput from "../Forms/FromInput";
import FromSelectField from "../Forms/FromSelectField";
import {
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";
const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid ",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px Opx",
        }}
      >
        {" "}
        Basic Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromSelectField
            size="large"
            name="student.gender"
            options={genderOptions}
            label="Gender"
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromSelectField
            size="large"
            name="student.academicDepartment"
            options={departmentOptions}
            label="Academic Department"
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromSelectField
            size="large"
            name="student.academicFaculty"
            options={facultyOptions}
            label="Academic Faculty"
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromSelectField
            size="large"
            name="student.academicSemester"
            options={acSemesterOptions}
            label="Academic Semester"
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
