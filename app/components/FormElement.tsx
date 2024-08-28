import React from "react";
import InputSections from "./InputSections";
import SelectSections from "./SelectSections";
import Title from "./elements/Title";

interface FormElementProps {
  questionID: string;
  maskID: string;
  questionName: string;
  questionCode: string;
  isRequired: boolean;
  options?: { value: string; label: string }[];
}

function FormElement({
  questionID,
  maskID,
  questionName,
  questionCode,
  isRequired,
  options,
}: FormElementProps) {
  switch (questionID) {
    case "1":
      return (
        <InputSections
          maskID={maskID}
          questionName={questionName}
          questionCode={questionCode}
          isRequired={isRequired}
        />
      );
    case "2":
      return (
        <SelectSections
          maskID={maskID}
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
