import React, { useEffect, useState } from "react";
import Page from "./page/page";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isloading) return null;
  else
    return (
      <div className=" max-w-[100dvw] overflow-x-clip">
        <Page />
      </div>
    );
}

export default App;
