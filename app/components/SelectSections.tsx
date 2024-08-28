import React from "react";
import Select from "./elements/Select";

interface SelectSectionsProps {
  maskID: string;
  questionName: string;
  questionCode: string;
  options: { value: string; label: string }[];
  isRequired: boolean;
}

function SelectSections({
  maskID,
  questionName,
  questionCode,
  options,
  isRequired,
}: SelectSectionsProps) {
  switch (maskID) {
    case "2":
      return (
        <Select
          id={questionCode}
          name={questionName}
          isRequired={isRequired}
          options={options}
        />
      );
  }
}

export default SelectSections;
