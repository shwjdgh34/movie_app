import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';
import LinesEllipsis from 'react-lines-ellipsis'
/*
class Movie extends Component{
    static propTypes = {
         title : PropTypes.string.isRequired,
         poster : PropTypes.string.isRequired
    }
    render(){
        
        return (
            <div>
                <MoviePoster poster = {this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
*/
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster = {poster} alt = {title}/>    
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>    
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre = {genre} key = {index}/>)}
                </div>
                <div className="Movie__synopsis">
                    <LinesEllipsis
                        text = {synopsis}
                        maxLine='3'
                        ellipsis = '...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
            
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
/*
class MoviePoster extends Component{
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render(){
        //console.log(this.props);
        return (
            <img src = {this.props.poster}/>
        )
    }
}
*/
function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}
function MoviePoster ({poster, alt}){    // poster 와 {poster}의 차이점???
    console.log(poster);
    return (
        <img src={poster} alt = {alt} title = {alt} className="Movie__Poster"/>
        // img src = {this.props.poster} alt = "movie posters"/>   이게 왜 안될까. class가 아니면 props는 없는건가. A) Class가 아니라 this props가 없다. 이미 인자로 poster props를 받았기 때문에
    )
}
MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}
export default Movie;

