import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
 
 const useMoviesTrailer=(movieId)=>{
          //  const [trailerkey, settrailerkey]=useState(null);
          const nowPlayingTrailer=useSelector(store=>store.movies.nowPlayingTrailer);
          const dispatch=useDispatch();
  
        const getMovievideos= async()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
             const json=await data.json();
            //  console.log(json);
             const filterData=json.results.filter((vedio)=> vedio.type=="Trailer");
              
             //checking condition for if trailer is possible then take first trailer(one movie have more then one trailer) if also a 
             //possablity there is no trailer then take first vedio of the list
             const trailer= (filterData.length!=0) ? filterData[0] :json.results[0];
             // so i can access the trailer.key outdise in ifrem in two ways first using state varible and another is use redux store so i'm using here redux store 
            //  settrailerkey(trailer.key);
            dispatch(addNowPlayingTrailer(trailer));
            }
        useEffect(()=>{
         getMovievideos();
        }, []);
 }
 export default useMoviesTrailer;