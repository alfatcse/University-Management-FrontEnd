"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";

const CreateStudentPage = () => {
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
        ]}
      />
      <h1>Create Student</h1>
    </div>
  );
};

export default CreateStudentPage;
