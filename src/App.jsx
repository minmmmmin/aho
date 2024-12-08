import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function App() {
  const [joke, setJoke] = useState(null); // ジョークを保存
  // const [isLoading, setIsLoading] = useState(true); // 読み込み中の状態
  const [error, setError] = useState(null); // エラーを保存
  const [image,setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const imagePaths = [//コピーしてきたパスだと怒られるのはなんでなのか
    "images/hebi.PNG",
    "images/hituji.PNG",
    "images/inoshishi.PNG",
    "images/inu.PNG",
    "images/kumasan.png", 
    "images/mogumogurisu.png", 
    "images/monkey.PNG",
    "images/mouse.PNG",
    "images/pig.png",
    "images/piyo.PNG",
    "images/tanuki.png",
    "images/tatu.PNG",
    "images/tora.PNG",
    "images/uma.PNG",
    "images/usagi.PNG",
    "images/usi.PNG",
  ];

  const fetchJoke = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      if (!response.ok) {
        throw new Error("ジョークを取得できませんでした");
      }
      const data = await response.json();
      const jokeText =
        data.type === "single"
          ? data.joke
          : `${data.setup} ... ${data.delivery}`;
      setJoke(jokeText);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changeImage = () => {
    const randomImage = 
    imagePaths[Math.floor(Math.random() * imagePaths.length)];
    setImage(randomImage);
  };
  
  

  useEffect(() => {
    fetchJoke();
    changeImage();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>ahoaho Generator</h1>
      {/* {isLoading && <p>読み込み中...</p>} */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="container">
        <img src={image} alt="ahoaho-Animal" />

        <p className="joke">{joke}</p> {/* 吹き出しはこのpタグだけに適用 */}

      </div>

      <div className="button">
      {/* ロードボタンできたのうれしいけど需要はないかも */}
      <LoadingButton
          loading={isLoading}
          variant="contained"
          onClick={fetchJoke}
          style={{ marginTop: "20px" }}
        >
          新しいジョークを取得
        </LoadingButton>

        <Button variant="contained" onClick={changeImage}>
          動物を変更
          </Button>
      </div>
    <Footer />
    </div>
  );
}