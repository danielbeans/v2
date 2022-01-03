import * as React from "react";
import "../styles/tailwind.css";

const IndexPage = () => {
  return (
    <main className="bg-dark-blue text-light-blue grid place-items-center h-screen">
      <div>
        <h1 className="text-6xl font-bold">Daniel Williams</h1>
        <p className="text-center m-3 text-light-blue">
          See this on{" "}
          <a
            href="https://github.com/danielbeans/v2"
            className="font-bold link link-underline link-underline-black"
          >
            Github
          </a>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
