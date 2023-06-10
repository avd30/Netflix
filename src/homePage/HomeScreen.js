import { Nav } from "./Nav";
import {Banner} from "./Banner";
import "./HomeScreen.css";
import requests from "../Api/Request";
import Row from "../RowComponent/Row";


export const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} isLargeRow = "true"/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetlixOriginals}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}


