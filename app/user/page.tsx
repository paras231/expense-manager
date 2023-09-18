import React from "react";
import AuthForm from "@/components/AuthForm";
const Page = async () => {
  const res = await fetch("http://localhost:3001/api");
  console.log(await res.json());
  return (
    <>
      <AuthForm />
    </>
  );
};

export default Page;
