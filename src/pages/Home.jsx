import { useContext, useEffect, useState } from "react";
import astroidContext from "../context/astroidContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { astroidData, setAstroidData, inputValue, setInputValue } =
    useContext(astroidContext);

  console.log("astroidData", astroidData);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") return;

    setInputValue(value);
    setValue("");
  };

  const API_Key = "EaBzLDSiyzNKW61SXBrsKJ7oFQMMdlGM05SDbPGL";
  const URL = `https://api.nasa.gov/neo/rest/v1/neo/${inputValue}?api_key=${API_Key}`;

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      const extractedData = {
        id: data.id,
        name: data.name,
        astroidUrl: data.nasa_jpl_url,
        isHazardous: data.is_potentially_hazardous_asteroid,
      };

      setAstroidData(extractedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, [inputValue]);

  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-indigo-100 bg-cover bg-center"
      style={{
        backgroundImage: `url(/astroid-space.jpg)`,
      }}
    >
      <form className="mb-14" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-full border-0 outline-none py-2 px-4 placeholder:p-2"
            placeholder="Astroid id"
          />
        </div>
        <div className="flex justify-between">
          <Link to={value === "" ? `/` : `astroid/${value}`}>
            <button
              className="text-white px-4 py-2 mt-3 border-2 border-orange-500 rounded-full hover:bg-orange-500 transition-all 1s ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </Link>
          <Link to={`random-astroid`}>
            <button
              className="text-white px-4 py-2 mt-3 border-2 border-orange-500 rounded-full hover:bg-orange-500 transition-all 1s ease-in-out"
              type="button"
            >
              Random
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Home;
