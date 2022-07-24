import { useEffect, useState } from "react";
import axios from "axios";
import "./featured.css";

const Featured = () => {
  const [cityProperties, setCityProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/properties/countByCity?city=munich");
        setCityProperties(result.data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Munich</h1>
          <h2>{cityProperties.length} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
