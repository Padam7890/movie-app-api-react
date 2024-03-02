import {React,useState,useEffect} from 'react'
import Card from '../Components/Card';


const Trending = () => {
  const  [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
     fetchTrendingMovies();
  }, []);

  console.log(trendingMovies);

    async function fetchTrendingMovies(){
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
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1",
        options
      );
      const res = await api.json();
      const data = res.results;
      setTrendingMovies(data);
      
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <div>
      <h3>Trending</h3>
      <div className="new-release">
        { trendingMovies.slice(0,14).map((product, index) => (
            <Card title={product.title} image={`https://image.tmdb.org/t/p/w500/${product.poster_path}`} {...product}/>
       
       ))
       }
       </div>
      

    </div>
  )
}

export default Trending