import React, { useEffect, useState } from "react";

export const Movies = () => {
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    fetch(
      '"https://api.themoviedb.org/3/movie/81277950/videos?api_key=697bccbdd485f20ab91cbd1ed65ce799&append_to_response=videos'
    )
      .then((response) => response.json())
      .then((jsonResult) => {
        setTrailer(jsonResult.results);
      });
    console.log(trailer);
  }, [setTrailer]);

  return (
    <div className="trailer">
      <iframe src="https:youtube.com/embed/ID?AIzaSyBTdJqbPdhbQIaBlZi0eyH2QsP7p4xpaiM" height="500" width="800" title="Iframe Example"></iframe>
    </div>
  );
};
