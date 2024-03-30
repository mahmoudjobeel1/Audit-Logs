import React from "react";
import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header/Index";

function App() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 space-y-3 ">
        <Header />
        <Table />
      </div>
    </section>
  );
}

export default App;
