import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
const Comedy = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  const getComedyMovies = async () => {
    const data = await getDocs(movieCollectionRef);
    setComedyMovies(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  useEffect(() => {
    getComedyMovies();
  }, []);

  return (
    <div className="Comedy">
      <div className="title">
        <h1>Comedy Movies</h1>
        <h1>See more...</h1>
      </div>

      <div className="comedy-movies">
        {comedyMovies
          .filter((movie) => movie.genre == "comedy")
          .slice(0, 6)
          .map((movie) => {
            return (
              <div className="movie" key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <img src={movie.image} alt="" />
                </Link>
              </div>
            );
          })}
      </div>

      <div className="image-container see-more">
        <button>See More</button>
      </div>
    </div>
  );
};

export default Comedy;
