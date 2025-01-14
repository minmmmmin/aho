import { useState, useEffect } from "react";
import CustomLoadingButton from "./LoadingButton";

export default function Joke() {
  const [joke, setJoke] = useState(null); // ジョークを保存
  // const [isLoading, setIsLoading] = useState(true); // 読み込み中の状態
  const [error, setError] = useState(null); // エラーを保存
  const [jokeLoading, setJokeLoading] = useState(false);
  const [animalLoading, setAnimalLoading] = useState(false);

  const imagePaths = [
    //コピーしてきたパスだと怒られるのはなんでなのか
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
    "images/musi.png",
  ];

  const [image, setImage] = useState(
    imagePaths[Math.floor(Math.random() * imagePaths.length)]
  );
  // ここがnullだったから動かなかった。最初が。

  const fetchJoke = async () => {
    setJokeLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"
      );
      if (!response.ok) {
        throw new Error("ジョークを取得できませんでした");
      }
      const data = await response.json();

      let jokeText;
      if (data.type === "single") {
        jokeText = data.joke;
      } else {
        jokeText = `${data.setup} ... ${data.delivery}`;
      }
      setJoke(jokeText);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setJokeLoading(false);
    }
  };

  // こういう時のための非同期処理なのね意図的に 500ms した後に画像をランダムに選ぶ処理を入れることでロード演出が出るようになる。
  //jokeのほうはAPIの所得分があるのでそういう作業はしなくてもいい。めんどくせーーやんなきゃよかったな
  const changeImage = async () => {
    setAnimalLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let randomImage = image; // 初期値を現在の画像に設定しておく
      while (randomImage === image) {
        randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      }
      setImage(randomImage);
    } catch (err) {
      console.error("画像変更に失敗しました:", err);
    } finally {
      setAnimalLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  // ここにまだchangeimageが入っていると二重になるのでさようなら。ほんらいあんまよくないらしいけどまあいいや。

  return (
    <div>
      <p>
        動物たちがジョークを言います。ボタンを押すとランダムにジョークと動物を変更できます。
      </p>
      <div className="container">
        <img src={image} alt="ahoaho-Animal" />
        {error && (
          <p className="joke" style={{ color: "red" }}>
            {error}
          </p>
        )}
        {!error && <p className="joke">{joke}</p>}{" "}
        {/* 吹き出しはこのpタグだけに適用。!errorってしたらエラーじゃない時に出るようになる->二重吹き出しを防げる */}
      </div>

      <div className="button">
        <CustomLoadingButton loading={animalLoading} onClick={changeImage}>
          動物を変更
        </CustomLoadingButton>
        <CustomLoadingButton loading={jokeLoading} onClick={fetchJoke}>
          新しいジョークを取得
        </CustomLoadingButton>
      </div>
    </div>
  );
}
