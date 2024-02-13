import React, { useState } from "react"

function Form1() {
    const [inputData, setInputData] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputData);
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setInputData((prevState) => {return {...prevState, [name] : value}})
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                enter your name
                <input type="text" required name="name" onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                enter your age
                <input type="text" required name="age" onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                enter your email
                <input type="text" required name="email" onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                select country
                <select name="country" onChange={handleChange} required id="">
                    <option value=""> Select </option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                </select>
            </label>
            <br />
            <label htmlFor="">
                bio
                <textarea name="bio" onChange={handleChange} required id="" cols="10" rows="5"></textarea>
            </label>
            <br />

            <button> Submit </button>
        </form>
    )
}

export default Form1