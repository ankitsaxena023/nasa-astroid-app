import { useContext, useEffect } from "react";
import astroidContext from "../context/astroidContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import AstroidDetails from "../components/AstroidDetails";

const Astroid = () => {
  const { id } = useParams();
  console.log("id", id);
  const { astroidData, setAstroidData } = useContext(astroidContext);

  const API_Key = "";
  const URL = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_Key}`;

  const fetchIdData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      const extractedData = {
        id: data.id,
        name: data.name,
        astroidUrl: data.nasa_jpl_url,
        isHazardous: JSON.stringify(data.is_potentially_hazardous_asteroid),
      };

      setAstroidData(extractedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIdData(URL);
  }, [id]);

  console.log("astroid astroiddata", astroidData);

  return (
    <>
      <AstroidDetails astroidData={astroidData} />
    </>
  );
};

export default Astroid;
