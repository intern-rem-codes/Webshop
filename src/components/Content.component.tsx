import type React from "react";

interface IContent {
  children: React.ReactNode;
}

export default function Content(props: IContent) {
  return <div className="content">{props.children}</div>;
}
