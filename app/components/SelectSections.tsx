import React from "react";
import CustomSelect from "./elements/CustomSelect";

interface SelectSectionsProps {
  questionID: number;
  questionName: string;
  questionCode: string;
  options: { value: string; label: string }[];
  isRequired: boolean;
  onChange: (event: any) => void;
}

function SelectSections({
  questionID,
  questionName,
  questionCode,
  options,
  isRequired,
  onChange,
}: SelectSectionsProps) {
  switch (questionID) {
    // case 43:
    // case 49:
    // case 50:
    //   return (
    //     <CustomSelect
    //       id={questionCode}
    //       name={questionName}
    //       isRequired={isRequired}
    //       options={options}
    //       onChange={onChange}
    //     />
    //   );
    default:
      return null;
  }
}

export default SelectSections;
