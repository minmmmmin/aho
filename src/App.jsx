import Footer from "./components/Footer";
import Header from "./components/Header";
import Joke from "./components/Joke";
import News from "./components/News";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Header />
      <h1>あほっこ動物</h1>
      <div>
        <Joke />
      </div>
      <div className="news">
        <News />
      </div>
      <Footer />
    </div>
  );
}