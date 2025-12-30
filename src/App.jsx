import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Joke from './components/Joke';
import News from './components/News';
import About from './components/About';
import Question from './components/Question';
import Goods from './components/Goods';
import Member from './components/Animal';
import Inf from './components/Contact';

function Home() {
  return (
    <div>
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

function Zukan() {
  return (
    <div>
      <h1>動物ずかん</h1>
      <Member />
    </div>
  );
}

function QandA() {
  return (
    <div>
      <h1>よくある質問</h1>
      <Question />
    </div>
  );
}

function Aho_Goods() {
  return (
    <div>
      <h1>グッズの紹介</h1>
      <Goods />
    </div>
  );
}

function Toiawase() {
  return (
    <div>
      <h1>お問い合わせ</h1>
      <Inf />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<About_aho />} />
            <Route path="/question" element={<QandA />} />
            <Route path="/goods" element={<Aho_Goods />} />
            <Route path="/animal" element={<Zukan />} />
            <Route path="/inf" element={<Toiawase />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
