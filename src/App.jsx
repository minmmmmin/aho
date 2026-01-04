import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Joke from './components/Joke';
import News from './components/News';
import About from './components/About';
import Question from './components/Question';
import Goods from './components/Goods';
import Animal from './components/Animal';
import Contact from './components/Contact';

function Page({ title, children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center">
      {title && <h1 className="mb-6 text-3xl font-bold">{title}</h1>}
      {children}
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Home() {
  return (
    <Page title="お知らせ">
      <News />
    </Page>
  );
}

function NewsPage() {
  return (
    <Page title="あほジェネレータ">
      <Joke />
    </Page>
  );
}

function AboutAho() {
  return (
    <Page title="あほっこ動物とは">
      <About />
    </Page>
  );
}

function Zukan() {
  return (
    <Page title="動物ずかん">
      <Animal />
    </Page>
  );
}

function QandA() {
  return (
    <Page title="よくある質問">
      <Question />
    </Page>
  );
}

function AhoGoods() {
  return (
    <Page title="グッズの紹介">
      <Goods />
    </Page>
  );
}

function Toiawase() {
  return (
    <Page title="お問い合わせ">
      <Contact />
    </Page>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutAho />} />
          <Route path="/question" element={<QandA />} />
          <Route path="/goods" element={<AhoGoods />} />
          <Route path="/animal" element={<Zukan />} />
          <Route path="/inf" element={<Toiawase />} />
        </Route>
      </Routes>
    </Router>
  );
}
