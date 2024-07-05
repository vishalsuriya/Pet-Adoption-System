import axios from "axios";
import React, { useEffect, useState } from "react";
import Dogcard from "../Dogpage/Dogcard";
import CatCard from "../Catpage/CatCard";
import Navigationbar from "../Navigationbar";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [title, setTitle] = useState("");
  const [isDog, setisDog] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/petdata")
      .then((response) => setPets(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navigationbar />
      <h1 style={{textAlign:'center'}}>
        Available Pets
      </h1>
      {pets.map((data) => {
        return (
          <>
            <Dogcard dogs={data} />
          </>
        );
      })}
    </>
  );
};

export default Pets;
