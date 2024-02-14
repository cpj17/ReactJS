import React from "react";
import { useLocalStorage } from "primereact/hooks";
import { useSessionStorage } from 'primereact/hooks';

export default function LocalDemo() {
  const [count, setCount] = useLocalStorage(0, "count");
  const [sessCount, setSessCount] = useSessionStorage(0, "ssnCount");
  function handleClick(e) {
    setCount((prevCount) => prevCount + 1)
    setSessCount((prevCount) => prevCount + 1)
  }
  return (
    <>
      <h3> Local Storage -  {count} </h3>
      <button onClick={handleClick}> click </button>

      <br />

      <h3> Session Storage - {sessCount} </h3>
    </>
  );
}
