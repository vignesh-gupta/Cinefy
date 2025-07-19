import { useState } from "react";
import MovieCard from "../components/MovieCard";




function Home() {
    const movies = [
        { id: 1, title: "Saiyaara", release_date: "2025" },
        { id: 2, title: "F1", release_date: "2025" },
        { id: 3, title: "Pathaan", release_date: "2023" },
        { id: 4, title: "John Wick", release_date: "2014" }
    ];
    const[searchQuery, setSearchQuery]= useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("")


    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form"> 
                <input 
                type="text" 
                placeholder="Search for movies.."
                className="search-text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    // movie.title.toLocaleLowerCase().startsWith(searchQuery) &&()
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
        </div>
    )
}

export default Home;