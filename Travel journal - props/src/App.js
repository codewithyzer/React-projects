import React from "react";
import Header from './components/Header'
import datas from './components/data'
import Log from "./components/Log";

export default function App() {
  const logs = datas.map((data) => {
    return (
      <Log 
        {...data}
      />
    );
  })
  return (
    <div className="container">
      <Header />
      <div className="logs">
        {logs}
      </div>
    </div>
  );
}
