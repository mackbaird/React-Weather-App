import "./Styles.css";
import Weather from "./Weather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="edinburgh" />
      <Search />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/117675-mackenzie-baird"
          target="_blank"
          rel="noreferrer"
        >
          Mackenzie Baird
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/mackbaird/React-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://6681ccc23d9dce9c63cba710--baird-react-weather.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
