import { Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../components/styles/details.css'

const PeopleDetail = (props) => {
  
    const { id } = useParams();
    const [charId, setCharId] = useState();
    const [data, setData] = useState({});
    useEffect(() => {
    setCharId(id);
    }, [id]);
    useEffect(() => {
    if (!charId) return;
    fetch(`https://swapi.dev/api/people/${charId}/`)
        .then((response) => response.json())
        .then((data) => {
        setData(data);
        console.log(data.homeworld)
        })
        .catch((err) => console.log("oh no", err));
    }, [charId]);


  return (
    <div >
      <Link className="link" to="/characters">
        {" "}
        ←Back{" "}
      </Link>
      <div className="middle-row-detail">
      <div className="card-detail">
      <h1>{data.name}</h1>
      <ul className="info">
        <li> birth: <span className="see">{data.birth_year}</span></li>
        <li> gender: <span className="see">{data.gender}</span></li>
        <li> hieght: <span className="see">{data.height + "m"}</span></li>
        <li> Mass: <span className="see">{data.mass + "kg"}</span></li>
        <li> Skin Colour: <span className="see">{data.skin_color}</span></li>
        <li> hair Colour: <span className="see">{data.hair_color}</span></li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default PeopleDetail;