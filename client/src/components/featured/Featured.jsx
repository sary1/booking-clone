import { useEffect, useState } from "react";
import axios from "axios";
import "./featured.css";

const Featured = () => {
  const [cityProperties, setCityProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFrequentCities = ["munich", "rome", "paris"];
    const frequentCities = getFrequentCities.join(",");

    const fetchData = async () => {
      try {
        const url = "/properties/getByCity?cities=" + frequentCities;
        const result = await axios.get(url);
        setCityProperties(result.data.propertiesByCity);
        setLoading(false);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featured">
      {!loading ? (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{cityProperties[0][0].toUpperCase()}</h1>
              <h2>{cityProperties[0][1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{cityProperties[1][0].toUpperCase()}</h1>
              <h2>{cityProperties[1][1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{cityProperties[2][0].toUpperCase()}</h1>
              <h2>{cityProperties[2][1]} properties</h2>
            </div>
          </div>
        </>
      ) : (
        "Please wait while loading data ;)"
      )}
    </div>
  );
};

export default Featured;
