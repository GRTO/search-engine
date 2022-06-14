import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
  Grid,
} from "@mui/material";
import { fetchInput } from "./state/results/actionCreators";
import { useDispatch, useSelector } from "./utils/react-redux";
import { SearchEngines } from "./services/searchServices";
import SearchItemList from "./components/SearchItemList";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const resultState = useSelector((state) => state.results);

  const [inputSearch, setInputSearch] = useState<string>("");

  const [browserEngines, setBrowserEngines] = useState<string>("");
  const handleChange = (value: SelectChangeEvent<string>) => {
    setBrowserEngines(value.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = () => {
    const browserEnginesDecoded = browserEngines.split(
      ","
    ) as Array<SearchEngines>;
    dispatch(fetchInput(inputSearch, browserEnginesDecoded));
  };

  return (
    <div className="pageContent">
      <FormGroup row className="formGroup">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={4}>
            <Input onChange={handleInputChange} placeholder="Search..." />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id="select-browser-engine">Browser</InputLabel>
              <Select
                labelId="select-browser-engine"
                id="select-browser-engine"
                value={browserEngines}
                label="Browser"
                onChange={handleChange}
              >
                <MenuItem value={SearchEngines.GOOGLE}>Google</MenuItem>
                <MenuItem value={SearchEngines.BING}>Bing</MenuItem>
                <MenuItem
                  value={`${SearchEngines.GOOGLE},${SearchEngines.BING}`}
                >
                  Google and Bing
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
      <SearchItemList
        error={resultState.error}
        loading={resultState.loading}
        results={resultState.resultData}
      />
    </div>
  );
}

export default App;
