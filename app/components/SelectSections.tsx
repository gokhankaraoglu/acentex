import React from "react";
import Select from "./elements/Select";

interface SelectSectionsProps {
  questionID: number;
  questionName: string;
  questionCode: string;
  options: { value: string; label: string }[];
  isRequired: boolean;
}

function SelectSections({
  questionID,
  questionName,
  questionCode,
  options,
  isRequired,
}: SelectSectionsProps) {
  switch (questionID) {
    case 43:
    case 49:
    case 50:
      return (
        <Select
          id={questionCode}
          name={questionName}
          isRequired={isRequired}
          options={options}
        />
      );
    default:
      return null;
  }
}

export default SelectSections;
