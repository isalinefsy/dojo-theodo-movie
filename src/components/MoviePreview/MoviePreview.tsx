import { mockMovie } from "../../mock/mockMovie";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";
import { POSTER_URL_PREFIX } from "../../App.tsx";


const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return (
    <><div className={styles.movieCard} onClick={goToMovieDetails}>
      <img className={styles.movieImage} src={POSTER_URL_PREFIX + movie.poster_path} />
      <p className={styles.movieInfo}>{movie.title} </p>
      <div className={styles.starRating}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${styles.star} ${
                index < movie.vote_average/2 ? styles.pink : ""
              }`}
            >
              ★
            </span>
          ))}
        </div>
    </div>
    </>
  );

};

export default MoviePreview;

