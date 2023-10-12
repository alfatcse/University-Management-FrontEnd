import { useAcademicDepartmentsQuery } from "@/app/redux/api/academic/departmentApi";
import FormSelectField, { SelectOptions } from "./FromSelectField";
type ACDepartmentFieldProps = {
  name: string;
  label: string;
};
const ACDepartmentField = ({ name, label }: ACDepartmentFieldProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });
  const academicDepartments = data?.academicDepartments;
  const acDepartmentOptions = academicDepartments?.map((acDepartment) => {
    return {
      label: acDepartment?.title,
      value: acDepartment?.id,
    };
  });
  return (
    <FormSelectField
      name={name}
      label={label}
      options={acDepartmentOptions as SelectOptions[]}
    />
  );
};

export default ACDepartmentField;
