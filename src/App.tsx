import React from 'react';
import logo from './logo.svg';
import './App.css';
import PreviewPrintTest from "./debug-svg-print/PreviewPrintTest";
import DemoLine from "./DemoLine";

function App() {
  return (
    <div className="App">
        <DemoLine></DemoLine>
      <PreviewPrintTest></PreviewPrintTest>
    </div>
  );
}

export default App;
