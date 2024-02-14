import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  const [specialCharactersInut, setSpecialCharactersInut] = React.useState("");
  const [numberInput, setNumberInput] = React.useState(1);

  function handleChange(e) {
    const allowedSpecialCharacters = /[!@#$%^&*().?":{}|<>]/;
    // Check if the input value contains only allowed characters
    if (!allowedSpecialCharacters.test(e.target.value)) {
      // If not, update the state with the previous value
      setSpecialCharactersInut(e.target.value);
    } else {
      // Otherwise, update the state with the new value
      setSpecialCharactersInut(specialCharactersInut);
    }
  }

  function numberInputChange(e) {
    if (e.target.value <= 10) {
      setNumberInput(e.target.value);
    }
  }

  const inputProps = {
    style: { textTransform: "uppercase" },
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h3> Restrict special characters </h3>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={specialCharactersInut}
          onChange={handleChange}
        />

        <h3> Uppercase </h3>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          inputProps={inputProps}
        />

        <h3> Number Min Max </h3>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="number"
          value={numberInput}
          onChange={numberInputChange}
        />

        <h3> Text area </h3>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          sx={{
            width: "100%",
            backgroundColor: "lightblue",
            resize: "both",
          }}
        />

        <h3> Helper text </h3>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          helperText="this is helper text"
          error={true}
          required
        />
      </div>
    </Box>
  );
}
