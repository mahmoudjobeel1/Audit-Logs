import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import Table from "./Components/Table";

function App() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 space-y-3 ">
        <SearchInput />
        {/* Filters */}
        <Table />
      </div>
    </section>
  );
}

export default App;
