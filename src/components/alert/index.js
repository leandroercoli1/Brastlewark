import React from "react";

export default function Alert({ children }) {
  return <div className="message-container message-fail">{children}</div>;
}
