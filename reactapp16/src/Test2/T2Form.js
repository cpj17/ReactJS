import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Stack } from "@mui/material";

const T2Form = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={4} sx={{ width: 700, margin: "auto" }}>
        <TextField
          required
          autoFocus
          id="outlined-required"
          label="Name"
          defaultValue=""
          placeholder="Enter your name"
          sx={{ width: "100%" }}
        />
        <Autocomplete
          id="grouped-demo"
          options={top100Films.sort((a, b) => -b.genre.localeCompare(a.genre))}
          groupBy={(option) => option.genre}
          getOptionLabel={(option) => option.title}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Skills" />
          )}
        />
      </Stack>
    </Box>
  );
};

const top100Films = [
  { title: "HTML", year: 1994, genre: "Front End" },
  { title: "ASP Dot Net", year: 1972, genre: "drama" },
  { title: "WPF", year: 1974, genre: "adventure" },
  { title: "C#", year: 2008, genre: "action" },
  { title: "Java", year: 1957, genre: "adventure" },
  { title: "PHP", year: 1993, genre: "action" },
];

export default T2Form;
