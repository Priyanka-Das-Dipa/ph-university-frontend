import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const nameOptions = [
    {
      value: "01",
      label: "Autumn",
    },
    {
      value: "02",
      label: "Summer",
    },
    {
      value: "03",
      label: "Fall",
    },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
    };

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect options={nameOptions} label="Name" name="name" />
          <PHSelect options={nameOptions} label="Year" name="year" />
          <PHSelect
            options={nameOptions}
            label="Start Month"
            name="startMonth"
          />
          <PHSelect options={nameOptions} label="End Month" name="endMonth" />
          <PHSelect options={nameOptions} label="Select Month" name="name" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
