import { useState } from "react";
import Form from "./component/form/Form";
import Page from "./component/langSwitsh/page";
import "./App.css";
import Form3 from "./component/form/Form3";
import FormValidation from "./component/form/FormValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Page /> */}
      <FormValidation />
    </>
  );
}

export default App;
