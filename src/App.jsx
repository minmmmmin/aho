import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import JokeGame from './components/JokeGame';
import NewsList from './components/NewsList';
import AhoahoIntroduction from './components/AhoahoIntroduction';
import Faq from './components/Faq';
import Goods from './components/Goods';
import AnimalZukan from './components/AnimalZukan';
import ContactForm from './components/ContactForm';

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
      <NewsList />
    </Page>
  );
}

function NewsPage() {
  return (
    <Page title="あほジェネレータ">
      <JokeGame />
    </Page>
  );
}

function AboutAho() {
  return (
    <Page title="あほっこ動物とは">
      <AhoahoIntroduction />
    </Page>
  );
}

function Zukan() {
  return (
    <Page title="動物ずかん">
      <AnimalZukan />
    </Page>
  );
}

function QandA() {
  return (
    <Page title="よくある質問">
      <Faq />
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
      <ContactForm />
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
