import { Container, MovieList. Movie } from './styles'
import { APIKey } from '../../config/key'
import { useState, useEffect } from 'react'

export default function Home() {

   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey>}&language-en-US&page=1`)
   }, [])

   return (
      <Container>
         <h1>Movies Popular</h1>
         <MovieList>

            {movies.map(movie => {
               return(
                  <Movie>
                     <a>
                        <img src={movie.image_url} alt={movie.title}/>
                     </a>
                     <span>{movie.title}</span>
                  </Movie>
               )
            })}
            
         </MovieList>
      </Container>
   )
}