import { useCountries } from "../Services/CountryContext";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Product from "../components/Product";
const Home = () => {
  const allCountries = useCountries();
  const [filterCountry, setFilterCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleRegion = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    if (search === "" && region === "") {
      setFilterCountry(allCountries);
    } else {
      let filterArray = allCountries;
      if (region.length) {
        filterArray = filterArray.filter((country) => {
          return country.region === region ? true : false;
        });
      }
      if (search.length) {
        filterArray = filterArray.filter((country) => {
          const lowerCaseCountryName = country.name.toLowerCase();
          return lowerCaseCountryName.includes(search.toLowerCase())
            ? true
            : false;
        });
      }
      setFilterCountry(filterArray);
    }
  }, [search, region, allCountries]);
  return (
    <>
      <nav className="py-2 flex max-w-[1300px] mx-auto">
        <TextField
          id="outlined-basic"
          className="max:w-[300px]"
          label="Search Country"
          variant="outlined"
          onChange={handleSearch}
          value={search}
        />
        <Box>
          <FormControl className="md:w-[200px]">
            <InputLabel id="demo-simple-select-label">
              Country Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select By Region"
              onChange={handleRegion}
              value={region}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </nav>
      <div className="flex justify-center items-center flex-wrap gap-8 max-w-[1500px] mx-auto my-6">
        {filterCountry.map((curr) => {
          return <Product {...curr} key={curr.alpha3Code} />;
        })}
      </div>
    </>
  );
};

export default Home;
