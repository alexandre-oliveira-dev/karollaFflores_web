import Title from "antd/es/typography/Title";
import React from "react";

export default function TitleComponent({text}: {text: string}) {
  return (
    <Title
      style={{margin: "50px 0px 50px 0px", textTransform: "capitalize"}}
      level={1}
    >
      {text}
    </Title>
  );
}
