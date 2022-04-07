import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  const getMovies = async () => {
    const data = await getDocs(movieCollectionRef);
    setMovies(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="new-movies">
      <div className="title">
        <h1>New Movies</h1>
        <h1>See more...</h1>
      </div>

      <div className="allMovies">
        {movies
          .filter((movie) => movie.status == "new")
          .slice(0, 6)
          .map((movie) => {
            {
              if (movie.status == "new") {
                return (
                  <div className="movie" key={movie.id}>
                    <Link to={`movie/${movie.id}`}>
                      <img src={movie.image} alt="" />
                    </Link>
                  </div>
                );
              }
            }
          })}
      </div>

      <div className="see-all">
        <button>
          <h1>See all...</h1>
        </button>
      </div>
    </div>
  );
};

export default NewMovies;

//old
{
  /* <div className="New-movies">
<div className="title">
  <h1>New Movies</h1>
  <h1>See more...</h1>
</div>
<div className="container">
  <div className="image-container">
    <Link to="/single">
      <img
        src="https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg"
        alt=""
      />
    </Link>
  </div>
  <div className="image-container">
    <img
      src="https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg"
      alt=""
    />
  </div>
  <div className="image-container">
    <img
      src="https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg"
      alt=""
    />
  </div>
  <div className="image-container">
    <img
      src="https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg"
      alt=""
    />
  </div>
  <div className="image-container see-more">
    <h1>See More</h1>
  </div>
</div>
</div> */
}
