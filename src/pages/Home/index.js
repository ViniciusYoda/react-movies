import { Container, MovieList. Movie } from './styles'

export default function Home() {

   const movies = [
      {
         title: 'ss',
         image_irl: 'ss'
      },
      {
         title: 'ss',
         image_irl: 'ss'
      }, 
      {
         title: 'ss',
         image_url: 'ss'
      }
   ]

   return (
      <Container>
         <h1>Movies</h1>
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