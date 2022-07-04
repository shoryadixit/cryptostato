import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const useStyles = makeStyles((_theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyItems: "",
    },
    carouselItem: {
      margin: "15px",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      justifyContent: "space-evenly",
      width: "240px",
      height: "250px",
      textTransform: "uppercase",
      color: "white",
      backdropFilter: "blur(35px)",
      boxShadow: "10px 10px 10px rgba(255, 255, 255, 0.2)",
      background: "rgba(255, 255, 255, 0.7)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      borderRadius: "20px"
    }
  }));

  const classes = useStyles();

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ 
            marginBottom: 10, 
            border: "2px solid rgba(255, 255, 255, 0.4)", 
            borderRadius: "50%",
            width: "50%",
            height: "50%",
            boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
          }}
        />
        <span style={{fontSize: 20, fontWeight: 700, color: "#f2e311"}}>
          {coin?.symbol} : &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 25, fontWeight: 500, color: "black" }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
