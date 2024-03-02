import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import noImage from '../assets/no image.jpg'

const Category = () => {
  const [searchMovie, setSearchMovies] = useState([]);
  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    searchMovies();
  }, [search]);

  async function searchMovies() {
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
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1'`,
        options
      );
      const res = await api.json();
      const data = res.results;
      setSearchMovies(data);
      console.log(data);
    } catch (error) {}
  }

  return (
    <div>
      <h3>
        Search of "<strong>{search}</strong>"
      </h3>
      <div className="new-release">
        {searchMovie.slice(0, 14).map((product, index) => (
          <Card
            title={product.title}
            image={
              product.poster_path
                ? `https://image.tmdb.org/t/p/w500/${product.poster_path}`
                : noImage
            }
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
