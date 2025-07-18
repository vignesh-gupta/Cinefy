import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "Saiyaara", release_date: "2025" },
        { id: 2, title: "F1", release_date: "2025" },
        { id: 3, title: "Pathaan", release_date: "2023" }
    ];

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form"> <input className="input-text" type="text" placeholder="Search for movies.." />
            <button type="submit" className="search-button">Search</button>
             </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
        </div>
    )
}

export default Home;