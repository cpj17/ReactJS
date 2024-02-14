import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const signatureRef = useRef();

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleSave = () => {
    const signatureData = signatureRef.current.toDataURL();
    console.log("Signature Data:", signatureData);
    // You can save the signature data or perform any other actions here

    // Create an anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = signatureData;
    downloadLink.download = "signature.png";

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger a click on the anchor element to initiate the download
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <h3> Signature Pad </h3>
      <SignatureCanvas
        penColor="blue"
        // backgroundColor="white"
        canvasProps={{
          width: 400,
          height: 200,
          className: "signatureCanvas",
          style: { border: "2px solid black" }, // Add border style here
        }}
        ref={signatureRef}
      />
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SignaturePad;
