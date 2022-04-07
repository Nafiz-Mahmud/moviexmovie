import React, { useEffect, useState } from "react";
import NewMovies from "../Components/NewMovies";
import Action from "../Components/Action";
import Comedy from "../Components/Comedy";
import Animation from "../Components/Animation";
import Footer from "../GlobalComp/Footer";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <NewMovies />
      <Action />
      <Comedy />
      <Animation />
      <Footer />
    </div>
  );
};
export default Homepage;
