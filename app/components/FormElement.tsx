import React from "react";
import InputSections from "./InputSections";
import SelectSections from "./SelectSections";
import Title from "./elements/Title";

interface FormElementProps {
  questionID: string;
  questionTypeID: string;
  questionName: string;
  questionCode: string;
  isRequired: boolean;
  options?: { value: string; label: string }[];
  onChange: (event: any) => void;
}

function FormElement({
  questionID,
  questionTypeID,
  questionName,
  questionCode,
  isRequired,
  options,
  onChange,
}: FormElementProps) {
  switch (questionTypeID) {
    case "1":
      return (
        <InputSections
          questionID={Number(questionID)}
          questionName={questionName}
          questionCode={questionCode}
          isRequired={isRequired}
          onChange={onChange}
        />
      );
    case "2":
      return (
        <SelectSections
          questionID={Number(questionID)}
          questionName={questionName}
          questionCode={questionCode}
          options={options || []}
          isRequired={isRequired}
        />
      );
    case "5":
      return <Title name={questionName} />;
  }
}

export default FormElement;
