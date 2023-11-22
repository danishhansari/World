import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../Services/CountryContext";

const Details = () => {
  const { countryCode } = useParams();
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const res = await axios.get(`${API}/alpha/${countryCode}`);
    console.log(res.data);
    setDetails(res.data);
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <>
      <div className="bg-gray-100 p-4 min-h-screen">
        <div className="flex md:w-[1000px] flex-col md:flex-row gap-4 mx-auto mt-12">
          <img src={details.flag} className="md:w-[550px]" alt={details.name} />
          <div className="text">
            <p>{details.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
