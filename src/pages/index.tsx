import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/Header";

export const Head: HeadFC = () => <title>Home Page</title>

export default function IndexPage() {
  return (
    <>
      <Header />
      <main className="text-center">
        <p className="text-lg font-bold">test</p>
      </main>
    </>
  );
};
