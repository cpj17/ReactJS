import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Grouped() {
  // const options = top100Films.map((option) => {
  //   const firstLetter = option.title[0].toUpperCase();
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
  //     ...option,
  //   };
  // });
  // console.log(options)

  return (
    <Autocomplete
      id="grouped-demo"
      options={top100Films.sort((a, b) => -b.genre.localeCompare(a.genre))}
      groupBy={(option) => option.genre}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994, genre: "action" },
  { title: 'The Godfather', year: 1972, genre: "drama" },
  { title: 'The Godfather: Part II', year: 1974, genre: "adventure" },
  { title: 'Dark Knight', year: 2008, genre: "action" },
  { title: '12 Angry Men', year: 1957, genre: "adventure" },
  { title: "Schindler's List", year: 1993, genre: "action" },
];