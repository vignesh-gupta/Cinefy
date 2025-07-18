import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
   <>
   <MovieCard movie={{title: "Saiyaara", release_date: "2025"}}/>
   <MovieCard movie={{title: "F1", release_date: "2025"}}/>
   </>
  )
}

export default App
