import React from "react";
import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header/Index";
import { Card } from "flowbite-react";

function App() {
  return (
    <Card className="overflow-x-auto overflow-y-auto ">
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 space-y-3 ">
          <Header />
          <Table />
        </div>
      </section>
    </Card>
  );
}

export default App;
