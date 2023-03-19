import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "rgba(0,0,0,1)",
    fontWeight: "600",
    textAlign: " !important",
    minHeight: "100vh",
    color: "#fff",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <BrowserRouter>
          <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
