import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Animation = () => {
  const [animationMovies, setAnimationMovies] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  const getAnimationMovies = async () => {
    const data = await getDocs(movieCollectionRef);
    setAnimationMovies(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  useEffect(() => {
    getAnimationMovies();
  }, []);

  return (
    <div className="Animation">
      <div className="title">
        <h1>Animation Movies</h1>
        <h1>See more...</h1>
      </div>

      <div className="animation-movies">
        {animationMovies
          .filter((movie) => movie.genre == "animation")
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
        <h1>See More</h1>
      </div>
    </div>
  );
};

export default Animation;
