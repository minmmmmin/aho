import { useState, useEffect } from 'react';
import CustomLoadingButton from './LoadingButton';

export default function Joke() {
  const [joke, setJoke] = useState(null); // ジョークを保存
  const [error, setError] = useState(null); // エラーを保存
  const [jokeLoading, setJokeLoading] = useState(false);
  const [animalLoading, setAnimalLoading] = useState(false);
  const [imagePaths, setImagePaths] = useState([]); // 画像パスを保存する
  const [image, setImage] = useState(null); // 画像を保存

  // ジョークの取得
  const fetchJoke = async () => {
    setJokeLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single',
      );
      if (!response.ok) {
        throw new Error('ジョークを取得できませんでした');
      }
      const data = await response.json();

      let jokeText;
      if (data.type === 'single') {
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

  // 画像の変更
  const changeImage = async () => {
    setAnimalLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let randomImage = image; // 初期値を現在の画像に設定しておく
      while (randomImage.src === image.src) {
        randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      }
      setImage(randomImage.src); // 画像のみ変更
    } catch (err) {
      console.error('画像変更に失敗しました:', err);
    } finally {
      setAnimalLoading(false);
    }
  };

  // aho.jsonファイルを読み込んで画像パスを設定
  useEffect(() => {
    fetchJoke();
    const loadImagePaths = async () => {
      try {
        const response = await fetch('aho.json');
        const data = await response.json();
        setImagePaths(data.imagePaths); // 画像パスをステートにセット
        setImage(
          data.imagePaths[Math.floor(Math.random() * data.imagePaths.length)]
            .src,
        ); // ランダムな画像を初期設定
      } catch (err) {
        console.error('画像パスの読み込みに失敗しました:', err);
      }
    };

    loadImagePaths();
  }, []); // 初回マウント時に1回だけ実行

  return (
    <div>
      <p>
        動物たちがジョークを言います。ボタンを押すとランダムにジョークと動物を変更できます。
      </p>
      <div className="container">
        {image && <img src={image} alt="Animal" />}{' '}
        {/* 画像がnullでない場合のみ表示 */}
        {error && (
          <p className="joke" style={{ color: 'red' }}>
            {error}
          </p>
        )}
        {!error && <p className="joke">{joke}</p>}
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
