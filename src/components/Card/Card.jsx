
export default function Card(movie={}){

    const {title, original_title, original_language,vote_average} = movie.movie;
    return(
        <div>
            <h1>{title}</h1>
            <h2>{original_title}</h2>
            <h3>{original_language}</h3>
            <h3>{vote_average}</h3>
        </div>
    )
}