import { Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../components/styles/details.css'

const PlanetDetail = (props) => {
    const { id } = useParams();
    const [planetId, setPlanetId] = useState();
    const [data, setData] = useState({});
    useEffect(() => {
    setPlanetId(id);
    }, [id]);
    useEffect(() => {
    if (!planetId) return;
    fetch(`https://swapi.dev/api/species/${planetId}/`)
        .then((response) => response.json())
        .then((data) => {
        setData(data);
        })
        .catch((err) => console.log("oh no", err));
    }, [planetId]);


  return (
    <div>
      <Link className="link" to="/species">
        {" "}
        Return to Species{" "}
      </Link>
      <div className="middle-row-detail">
      <div className="card-detail">
      <h1>{data.name}</h1>
      <ul className="info">
        <li> classification: {data.classification}</li>
        <li> average lifespan: {data.average_lifespan}</li>
        <li> language: {data.language}</li>
        
      </ul>
      </div>
      </div>
    </div>
  );
};

export default PlanetDetail;