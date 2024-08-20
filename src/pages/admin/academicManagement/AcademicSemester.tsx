import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);

//   console.log(data);
  return (
    <div>
      <p>this is Academic Semester </p>
    </div>
  );
};

export default AcademicSemester;
