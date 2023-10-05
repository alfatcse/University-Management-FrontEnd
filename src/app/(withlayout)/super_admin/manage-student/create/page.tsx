"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { error } from "console";
import React from "react";
const steps = [
  {
    title: "Student Information",
    content: <StudentInfo />,
  },
  {
    title: "Basic Information",
    content: <StudentBasicInfo />,
  },
  {
    title: "Guardian Information",
    content: <GuardianInfo />,
  },
  {
    title: "Local Guardian Information",
    content: <LocalGuardianInfo />,
  },
];
const CreateStudentPage = () => {
  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
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
            label: "manage-student",
            link: "/super_admin/manage-student",
          },
          {
            label: "create-student",
            link: "/super_admin/manage-student/create",
          },
        ]}
      />
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
