import { useAcademicSemestersQuery } from "@/app/redux/api/academic/semesterApi";
import FromSelectField, { SelectOptions } from "./FromSelectField";
type ACFacultyFieldProps = {
  name: string;
  label: string;
};

const ACSemesterField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicSemestersQuery({
    limit: 100,
    page: 1,
  });
  const academicSemesters = data?.academicSemesters;
  const acSemesterOptions = academicSemesters?.map((acSemester) => {
    return {
      label: acSemester?.title + "-" + acSemester?.year,
      value: acSemester?.id,
    };
  });

  return (
    <FromSelectField
      name={name}
      label={label}
      options={acSemesterOptions as SelectOptions[]}
    />
  );
};

export default ACSemesterField;
