import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader, { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <ThreeDots
      type="ThreeDots"
      color="#FFFFFF"
      height={50}
      width={50}
      timeout={9000}
    />
  );
}
