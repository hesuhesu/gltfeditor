import React from 'react';
import { BrowserRouter } from "react-router-dom";
import WebEditor from "./routes/WebEditor";

function App() {

  return (
    <div>
      <BrowserRouter>
        <WebEditor />
      </BrowserRouter>
    </div>
  );
}

export default App;