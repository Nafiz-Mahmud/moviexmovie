import React from "react";
import Action from "./Action";
import Comedy from "./Comedy";
import NewMovies from "./NewMovies";
import Animation from "./Animation";

export const AllMovies = () => {
  return (
    <div className="All-movies">
      <NewMovies />
      <Action />
      <Comedy />
      <Animation />
    </div>
  );
};
