import Title from "antd/es/typography/Title";
import React, {CSSProperties} from "react";

export default function TitleComponent({
  text,
  fontWeight,
}: {
  text: string;
  fontWeight?: string | number | CSSProperties["fontWeight"];
}) {
  return (
    <Title
      style={{
        margin: "50px 0px 50px 0px",
        textTransform: "capitalize",
        fontWeight,
      }}
      level={1}
    >
      {text}
    </Title>
  );
}
