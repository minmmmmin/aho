import { useState, useEffect } from "react";

export default function About() {
  const [imagePaths, setImagePaths] = useState([]); // 画像パスを保存する
  const [randomImages, setRandomImages] = useState([]); // ランダムに選ばれた画像を保存する

  // aho.jsonから画像パスを読み込む
  useEffect(() => {
    const loadImagePaths = async () => {
      try {
        const response = await fetch("aho.json");
        const data = await response.json();
        setImagePaths(data.imagePaths); // 画像パスをステートにセット
      } catch (err) {
        console.error("画像パスの読み込みに失敗しました:", err);
      }
    };

    loadImagePaths();
  }, []);

  // ランダムに画像を選ぶ処理
  useEffect(() => {
    if (imagePaths.length > 0) {
      const getRandomImages = () => {
        const randomIndexes = [];
        while (randomIndexes.length < 5) {
          // 5枚のランダム画像を選ぶ
          const index = Math.floor(Math.random() * imagePaths.length);
          if (!randomIndexes.includes(index)) {
            randomIndexes.push(index);
          }
        }
        setRandomImages(randomIndexes.map((index) => imagePaths[index]));
      };
      getRandomImages();
    }
  }, [imagePaths]); // 画像パスが更新されたらランダム画像を再設定

  return (
    <>
      <p className="about-text">
        あほっこ動物は、<strong>あほな動物たち</strong>のことを指します。
        <br />
        不定期でさまざまな個性豊かな動物たちが誕生します。
        <br />
        この何とも言えない表情が魅力的。
        <br />
        名前がある動物もいれば、ない動物もいます。
        <br />
        どの動物も、見ているだけで癒やされること間違いなし！
      </p>

      {/* ランダムに選ばれた画像の表示 */}
      <div className="animal-images">
        {randomImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.caption}
            style={{ width: "100px", height: "auto", margin: "10px" }} // スタイル調整
          />
        ))}
      </div>
    </>
  );
}
