import "./Styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search</h1>
      <Search />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/117675-mackenzie-baird"
          target="_blank"
        >
          Mackenzie Baird
        </a>
        , is open-sourced on GitHub, and hosted on Netlify
      </footer>
    </div>
  );
}
