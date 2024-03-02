import { React, useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Card from "../Components/Card";
import "../Home.css"
const HomePage = () => {
  const [movies, setMovieList] = useState([]);

  useEffect(() => {
    fetchAPi();
  }, []);

  console.log(movies);

  async function fetchAPi() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDZlMDU0MzQwZWM2ZWEyYjZmMTY4MTkyNzU1NjA4MSIsInN1YiI6IjY1YzhlNzEwYjZjZmYxMDE0YmE0N2U2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmfk-bnF3vZl45XUP1zRKRm9c2yDkleUAGcdY47hywE",
      },
    };

    try {
      const api = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const res = await api.json();
      const data = res.results;
      setMovieList(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h3>New Release</h3>
      <div className="new-release">
            { movies.slice(0, 14).map((product, index) => (
                <Card title={product.title} image={`https://image.tmdb.org/t/p/w500/${product.poster_path}`} {...product}/>
       
       ))
       }
       </div>
    </div>
  );
};

export default HomePage;
