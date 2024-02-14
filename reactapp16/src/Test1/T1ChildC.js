import React from "react";
import { useLocalStorage } from "primereact/hooks";
import { useSessionStorage } from 'primereact/hooks';

const T1ChildC = () => {
  const [count, setCount] = useLocalStorage(0, "count");
  const [sessCount, setSessCount] = useSessionStorage(0, "ssnCount");
  return (
    <div>
      <h2> Local Stotage -  {count} </h2>
      <br />
      <h3> Session Storage - {sessCount} </h3>
      <hr />
    </div>
  );
};

export default T1ChildC;
