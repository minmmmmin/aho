import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Joke from "./components/Joke";
import News from "./components/News";

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

export default function App() {
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/news">ミニゲーム</Link>
      </nav>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}