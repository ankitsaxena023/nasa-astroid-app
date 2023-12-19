import { useContext, useEffect } from "react";
import astroidContext from "../context/astroidContext";
import axios from "axios";
import RandomAstroidData from "../components/RandomAstroidData";

const RandomAstroid = () => {
  const { astroidData, setAstroidData } = useContext(astroidContext);

  const API_Key = "EaBzLDSiyzNKW61SXBrsKJ7oFQMMdlGM05SDbPGL";

  const handleRandomSubmit = async () => {
    try {
      const response2 = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_Key}`
      );

      const randomIndex = Math.floor(
        Math.random() * response2.data.near_earth_objects.length
      );
      console.log("randomIndex: ", randomIndex);
      const randomId = response2.data.near_earth_objects[randomIndex].id;
      console.log("randomId: " + randomId);

      const URL = `https://api.nasa.gov/neo/rest/v1/neo/${randomId}?api_key=${API_Key}`;

      const response3 = await axios.get(URL);
      const data = response3.data;

      const extractedData = {
        id: data.id,
        name: data.name,
        astroidUrl: data.nasa_jpl_url,
        isHazardous: data.is_potentially_hazardous_asteroid,
      };

      setAstroidData(extractedData);
    } catch (err) {}
  };

  console.log("astroidRandomdata", astroidData);

  useEffect(() => {
    handleRandomSubmit();
  }, []);

  return (
    <div>
      <RandomAstroidData astroidData={astroidData} />
    </div>
  );
};

export default RandomAstroid;
