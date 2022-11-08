import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import React from "react";

const useStyles = makeStyles(() => ({
  Banner: {
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-evenly"
  },
  tagline: {
    display: "flex",
    height: "1%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
    cursor: "default",
  }
}));

const Banner = () => {
  const style = useStyles();

  return (
    <div className={style.Banner}>
      <Container className={style.bannerContent}>
        <div className={style.tagline}>
          <Typography
            variant="h2"
            className={style.title}
          >
            Crypto Stato
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat"
            }}
          >
            Get All the info regarding your favourite Crypto currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
