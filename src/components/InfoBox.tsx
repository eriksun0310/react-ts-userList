import React, { ReactNode } from "react";

/*
如果希望
mode: warning 一定要傳 severity
就把type 定義成兩個
*/

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "hight";
  children: ReactNode;
};

//Discriminated Unions
type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { children, mode } = props;

  if (mode === "hint") {
    return <div>{children}</div>;
  }
  const { severity } = props;
  return (
    <div>
      <p>Severity:{severity}</p>
      <h2>Mode:{mode}</h2>
      <p>{children}</p>
    </div>
  );
};

export default InfoBox;
