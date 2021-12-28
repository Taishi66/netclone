import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";

function App() {
  return (
    <div className='App'>
      <Banner />
      <Row
        isLargeRow
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending now' fetchUrl={requests.fetchTrending} />
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorroMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
