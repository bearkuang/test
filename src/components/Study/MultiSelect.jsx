import React from "react";
import Select from "react-select";

function MultiSelect() {
  const options = [
    { value: "java", label: "자바" },
    { value: "spring", label: "스프링" },
    { value: "c언어", label: "c언어" },
    { value: "react", label: "react" },
    { value: "javascript", label: "javascript" },
  ];

  return (
    <div>
      <label
        htmlFor="multi"
        className="block text-sm font-semibold leading-3 text-gray-900 mb-3"
      >
        관심기술스택
      </label>
      <Select options={options} isMulti />
    </div>
  );
}

export default MultiSelect;
