import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTopRatedMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const  useTopRatedMovies=()=>{
    const topRatedMovies=useSelector(store=>store.movies.topRatedMovies);
    const dispatch=useDispatch();
    const getTopReatedMovies=async ()=>{
          const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
           const json= await data.json();
        //    console.log("suraj");
        //    console.log(json.results);
           dispatch(addTopRatedMovies(json.results));
           
    }
    useEffect(()=>{
          getTopReatedMovies();
    }, []);
}

export default useTopRatedMovies;