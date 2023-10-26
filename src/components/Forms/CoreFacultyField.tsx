import { useFacultiesQuery } from "@/app/redux/api/facultyApi";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FromSelectField";
type FacultyProps = {
  name: string;
  label?: string;
};

const CoreFacultyField = ({ name }: FacultyProps) => {
  const { data, isLoading } = useFacultiesQuery({
    limit: 100,
    page: 1,
  });
  console.log(data);
  const faculties = data?.faculties;
  const facultiesOptions = faculties?.map((faculty: any) => {
    // console.log(faculty);
    //ts-ignore
    return {
      label: `${faculty?.firstName} ${faculty?.lastName} ${faculty?.middleName}`,
      value: faculty?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label="Faculty"
      options={facultiesOptions as any}
    />
  );
};

export default CoreFacultyField;
