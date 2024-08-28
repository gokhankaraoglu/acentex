import React from "react";

interface TitleProps {
  name: string;
}

function Title({ name }: TitleProps) {
  return <h2 className="font-semibold">{name}</h2>;
}

export default Title;
