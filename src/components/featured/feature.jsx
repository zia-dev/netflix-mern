import './feature.scss';
import image from '../../assets/avenger.png'

export const Feature = ({type}) => {
  return (
    <div className='featured'>
       {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
)}
        <img
        src="https://images6.alphacoders.com/127/1271600.jpg"
        alt=""
      />
      <div className="info">
      <img
          src={image}
          alt=""
        />
        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus provident minus possimus nihil aperiam velit placeat maiores, corporis obcaecati.
        </span>
        <div className="buttons">
          <button className="play">
              {/* playarrow */}
              <i className="fa-solid fa-play"></i>
              <span>Play</span>
          </button>
          <button className="more">
              {/* playarrow */}
              <i className="fa-sharp fa-solid fa-circle-info"></i>
              <span>Play</span>
          </button>
        </div>
      </div>
    </div>
  )
}
