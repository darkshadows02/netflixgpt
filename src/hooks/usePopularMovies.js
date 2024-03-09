import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPopularMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const  usePopularMovies=()=>{
    const popularMovies=useSelector(store=>store.movies.popularMovies);
    const dispatch=useDispatch();
    const getnowpopulargMovies=async ()=>{
          const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
           const json= await data.json();
           dispatch(addNowPopularMovies(json.results));
    }
    useEffect(()=>{
         getnowpopulargMovies();
    }, []);
}

export default usePopularMovies;