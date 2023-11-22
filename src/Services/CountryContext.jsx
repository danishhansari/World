import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const API = "https://restcountries.com/v2";

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const getProducts = async (url) => {
    const res = await axios.get(`${url}/all`);
    setCountries(res.data);
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};
const useCountries = () => {
  return useContext(CountryContext);
};
export { CountryContext, CountryProvider, useCountries, API };
