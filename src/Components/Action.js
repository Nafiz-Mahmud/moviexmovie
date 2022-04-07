import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Action = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  const getActionMovies = async () => {
    const data = await getDocs(movieCollectionRef);
    setActionMovies(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  useEffect(() => {
    getActionMovies();
  }, []);
  return (
    <div className="Action">
      <div className="title">
        <h1>Action Movies</h1>
        <h1>See more...</h1>
      </div>

      <div className="action-movies">
        {actionMovies
          .filter((movie) => movie.genre == "action")
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

export default Action;
