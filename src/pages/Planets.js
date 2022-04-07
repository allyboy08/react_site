import React, {useState, useEffect} from "react";

import { Link} from "react-router-dom";
import LoadingSpinner from '../components/UI/Loader';
import defaultImage from '../assets/death.png'

const People = () => {
    const API = "https://swapi.dev/api/planets/";
    const imgURL = "https://starwars-visualguide.com/assets/img/planets/";
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    
    function getId(url) {
        return url.split("/")[url.split("/").length - 2];
    }
    
    const addDefaultSrc = (ev) => {
        ev.target.src = defaultImage;
    };
    
    
//     useEffect(() => {
//     const fetchedItems = async () => {
//         const response = await fetch("https://swapi.dev/api/people/");
//         const data = await response.json();
//         console.log(data.next)
//         setItems(data.results)
//         setIsLoading(false)
//     }
//     fetchedItems();
// }, [])

useEffect(() => {
    setHasPrevPage(false);
    setHasNextPage(false);
    setIsLoading(true);

    fetch(`${API}?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.results || []);
        setHasPrevPage(!!data.previous);
        setHasNextPage(!!data.next);
        setIsLoading(false);
      });
  }, [page]);

  function handleSetPage(pageNum) {
    setIsLoading(true);
    setPage(pageNum);
  }
    
    // if(!items){
    //         return <LoadingSpinner/>
    //     }

    return (
        <div>
            <h1>Planets</h1>
            {isLoading ? <LoadingSpinner /> : (
                <div>
                <div className="pages">
                <button
                disabled={!hasPrevPage}
                onClick={() => handleSetPage(Math.max(1, page - 1))}
                >
                Prev Page
                </button>
            
                <button
                disabled={!hasNextPage}
                onClick={() => handleSetPage(Math.max(page + 1))}
                >
                Next Page
                </button>
                    </div>
                    <div className="middle-row">
                {items.map((item, id) => (
                    <div className="card">
                    <Link className="link" to={`/planet/`+ getId(item.url)}>
                    <div className="card-image-container">
                    <img
                    onError={addDefaultSrc}
                    className="medium"
                    src={imgURL + getId(item.url) + ".jpg"}
                    alt={"planet" + item.name}
                    />
                    </div>
                    <div className="card-body">
                        <h2>{item.name}</h2>
                    </div>
                    </Link>
                    </div>
                    ))}
                    </div>
                    <div className="pages">
                <button
                disabled={!hasPrevPage}
                onClick={() => handleSetPage(Math.max(1, page - 1))}
                >
                Prev Page
                </button>
            
                <button
                disabled={!hasNextPage}
                onClick={() => handleSetPage(Math.max(page + 1))}
                >
                Next Page
                </button>
                    </div>
                    </div>
                    )}
            
        </div>
    )
} 

export default People;