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
        })
        .catch((err) => console.log("oh no", err));
    }, [charId]);


  return (
    <div >
      <Link className="link" to="/characters">
        {" "}
        Return to Characters{" "}
      </Link>
      <div className="middle-row-detail">
      <div className="card-detail">
      <h1>{data.name}</h1>
      <ul className="info">
        <li> birth: {data.birth_year}</li>
        <li> gender: {data.gender}</li>
        <li> hieght: {data.height}</li>
        
      </ul>
      </div>
      </div>
    </div>
  );
};

export default PeopleDetail;