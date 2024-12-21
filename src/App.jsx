import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Joke from "./components/Joke";
import News from "./components/News";
import About from "./components/About";

function Home() {
  return (
    <div>
      <h1>あほっこ動物</h1>
      <News />
    </div>
  );
}

function NewsPage() {
  return (
    <div>
      <h1>あほジェネレータ</h1>
      <Joke />
    </div>
  );
}

function About_aho() {
  return (
    <div>
      <h1>あほっこ動物とは</h1>
      <About />
    </div>
  );
}

export default function App() {
  return (
    <div>
    <img
      src="/images/aho.png"
      alt="Aho image"
      style={{ display: "block", margin: "0 auto", width: "1500px" }}
    />

    <Router>
      <Header />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<About_aho />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
}