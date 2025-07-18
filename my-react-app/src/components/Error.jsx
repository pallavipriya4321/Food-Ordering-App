import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>OOPS......</h1>
      <h2>Something went wrong</h2>
      <h1>{err.status + " : " + err.statusText}</h1>
    </>
  );
};

export default Error;
