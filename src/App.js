import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ThreeDEditor from "./routes/ThreeDEditor";

function App() {

  return (
    <div>
      <BrowserRouter>
        <ThreeDEditor />
      </BrowserRouter>
    </div>
  );
}

export default App;