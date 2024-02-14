import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function T1Component2() {
    const [selectedMovie, setSelectedMovie] = React.useState(null);

    const handleAutocompleteChange = (event, newValue) => {
        setSelectedMovie(newValue);
    };

    return (
        <div>
            <h2> Autocomplete 2 </h2>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: 400 }}
                onChange={handleAutocompleteChange}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            {selectedMovie && (
                <div>
                    <h3>Selected Movie:</h3>
                    <p>Title: {selectedMovie.label}</p>
                    <p>Year: {selectedMovie.year}</p>
                </div>
            )}
        </div>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
];
