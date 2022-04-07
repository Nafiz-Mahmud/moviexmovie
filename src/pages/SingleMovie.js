import { useState, useEffect } from "react";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const movieRef = doc(db, "movies", id);

  const getMovie = async () => {
    const data = await getDoc(movieRef);
    setMovie(data.data());
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="Single-movie">
      <div className="title">
        <h1>{movie.title} </h1>
      </div>
      <div className="bg-img-container">
        <img src={movie.image} alt="" />
      </div>
      <div className="image-container">
        <img src={movie.image} alt="" />
      </div>
      <div className="download-btn">
        <button>Download</button>
      </div>
    </div>
  );
};

export default SingleMovie;
