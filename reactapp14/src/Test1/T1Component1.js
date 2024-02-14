import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function T1Component1() {
    return (
        <div>
            <h2> Autocomplete 1 </h2>
            <Autocomplete
                disablePortal
                disableCloseOnSelect
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];