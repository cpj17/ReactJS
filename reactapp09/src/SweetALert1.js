import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import './style.css'

function SweetALert1() {
  function handleClick(stringType) {
    if (stringType === 1) {
      Swal.fire("SweetAlert2 is working!");
    }
    if (stringType === 2) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      }); 
    }
    if (stringType === 3) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        allowOutsideClick: false
      }); 
    }
    if (stringType === 4) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        allowOutsideClick: false
      }).then((result) => {
        //console.log(result)
        // This callback will be executed when the modal is closed
        if (result.isConfirmed) {
          console.log("User clicked OK");
        } else {
          console.log("Modal was closed");
        }
      });
    }
    if (stringType === 5) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("User clicked Yes");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log("User clicked No or closed the modal");
        }
      });
      
    }
    if (stringType === 6) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCloseButton: true,
      });
    }
    if (stringType === 7) {
      Swal.fire({
        title: "The Internet? fgdhfhdhfhgfhgf",
        text: "That thing is still around? fhgdghdfghgdf dfhjghdff dfghdfh fdghdffggg  gfgdffdgh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh end",
        icon: "question",
        position: "top",
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCloseButton: true,
        grow: true,
      });
    }
    if (stringType === 8) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
    }
    if (stringType === 9) {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        heightAuto: true,
        width: "290px",
      }); 
    }
  }
    
  return (
    <div>
        <button className='btn btn-danger' onClick={() => handleClick(1)}> Type 1 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(2)}> Type 2 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(3)}> Type 3 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(4)}> Type 4 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(5)}> Type 5 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(6)}> Type 6 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(7)}> Type 7 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(8)}> Type 8 toast </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(9)}> Type 9 </button> <br /><br />
        <button className='btn btn-danger' onClick={() => handleClick(10)}> Type 10 </button> <br /><br />

        <br />
        <br />

        <button className='btn btn-success custom'> TEST </button>
    </div>
  )
}

export default SweetALert1