import { useRouteError } from "react-router-dom";
import React from "react";
import "../common/style.css"
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-image" >
      <div>
      <h1>Oops!</h1>
      <p>Sorry, Page not found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
}