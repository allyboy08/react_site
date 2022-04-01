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
    fetch(`https://swapi.dev/api/planets/${planetId}/`)
        .then((response) => response.json())
        .then((data) => {
        setData(data);
        })
        .catch((err) => console.log("oh no", err));
    }, [planetId]);


  return (
    <div>
      <Link className="link" to="/planets">
        {" "}
        ←Back{" "}
      </Link>
      <div className="middle-row-detail">
      <div className="card-detail">
      <h1>{data.name}</h1>
      <ul className="info">
        <li> climate: <span className="see">{data.climate}</span></li>
        <li> population: <span className="see">{data.population}</span></li>
        <li> terrain: <span className="see">{data.terrain}</span></li>
        <li> Gravity: <span className="see">{data.gravity}</span></li>
        <li> Diameter: <span className="see">{data.diameter}</span></li>
        <li> Orbital Period: <span className="see">{data.orbital_period}</span></li>
        <li> Rotation Period: <span className="see">{data.rotation_period}</span></li>
        <li> Surface Water: <span className="see">{data.surface_water}</span></li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default PlanetDetail;