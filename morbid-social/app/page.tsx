import Image from "next/image";
import { Alert } from "flowbite-react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1>Welcome to the jungle baby, you're gonna die!</h1>
      <Alert color="info">Alert!</Alert>
    </Fragment>
  );
}
