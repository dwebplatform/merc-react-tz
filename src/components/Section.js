import React from 'react'
import classNames from "classnames";
export const Section = ({ children, className = "" }) => {
  return (
    <section className={classNames("section", className)}>{children}</section>
  );
};
