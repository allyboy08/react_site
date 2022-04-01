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
        ←Back{" "}
      </Link>
      <div className="middle-row-detail">
      <div className="card-detail">
      <h1>{data.name}</h1>
      <ul className="info">
        <li> classification: <span className="see">{data.classification}</span></li>
        <li> average lifespan: <span className="see">{data.average_lifespan}</span></li>
        <li> language: <span className="see">{data.language}</span></li>
        <li> Average Height: <span className="see">{data.average_height}</span></li>
        <li> Designation: <span className="see">{data.designation}</span></li>
        <li> Eye Colours: <span className="see">{data.eye_colors}</span></li>
        <li> Hair Colours: <span className="see">{data.hair_colors}</span></li>
        <li> Skin Colours: <span className="see">{data.skin_colors}</span></li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default PlanetDetail;