import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { dataArray } from "@clregions/data";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + ClRegions</h1>
      <div className="card">
        {dataArray.regions.map((region, index) => (
          <div key={index}>
            <h2>{region.id}</h2>
            <p>{region.name}</p>
            <p>{region.shortName}</p>
            <p>{region.abbreviation}</p>
            <p>{region.isoCode}</p>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
