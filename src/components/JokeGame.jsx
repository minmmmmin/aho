import { useEffect, useMemo, useState } from 'react';

const JOKE_URL =
  'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

function pickRandom(list, exclude) {
  if (!list || list.length === 0) return null;
  if (list.length === 1) return list[0];

  let item = list[Math.floor(Math.random() * list.length)];
  while (exclude && item?.src === exclude?.src) {
    item = list[Math.floor(Math.random() * list.length)];
  }
  return item;
}

// このファイル内にまとめる（MUIなし）
function LoadingBtn({
  loading = false,
  onClick,
  children,
  className = '',
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={['btn btn-neutral', className].join(' ')}
    >
      {loading && <span className="loading loading-spinner" />}
      <span className={loading ? 'opacity-80' : ''}>{children}</span>
    </button>
  );
}

export default function Joke() {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState(null);

  const [jokeLoading, setJokeLoading] = useState(false);
  const [animalLoading, setAnimalLoading] = useState(false);

  const [imagePaths, setImagePaths] = useState([]);
  const [animal, setAnimal] = useState(null); // {src, caption}

  const hasAnimals = useMemo(() => imagePaths.length > 0, [imagePaths]);

  const fetchJoke = async () => {
    setJokeLoading(true);
    setError(null);
    try {
      const response = await fetch(JOKE_URL);
      if (!response.ok) throw new Error('ジョークを取得できませんでした');

      const data = await response.json();
      const jokeText =
        data.type === 'single'
          ? data.joke
          : `${data.setup} ... ${data.delivery}`;

      setJoke(jokeText);
    } catch (err) {
      console.error(err);
      setError(err?.message ?? 'エラーが発生しました');
    } finally {
      setJokeLoading(false);
    }
  };

  const changeAnimal = async () => {
    if (!hasAnimals) return;
    setAnimalLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setAnimal((prev) => pickRandom(imagePaths, prev));
    } catch (err) {
      console.error('画像変更に失敗しました:', err);
    } finally {
      setAnimalLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const fetchInitialData = async () => {
      // Fetch joke
      setJokeLoading(true);
      setError(null);
      try {
        const response = await fetch(JOKE_URL);
        if (!response.ok) throw new Error('ジョークを取得できませんでした');
        const data = await response.json();
        if (cancelled) return;
        const jokeText =
          data.type === 'single'
            ? data.joke
            : `${data.setup} ... ${data.delivery}`;
        setJoke(jokeText);
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setError(err?.message ?? 'エラーが発生しました');
      } finally {
        if (!cancelled) {
          setJokeLoading(false);
        }
      }

      // Fetch animals
      try {
        const response = await fetch('aho.json');
        const data = await response.json();
        if (cancelled) return;
        const list = data.imagePaths ?? [];
        setImagePaths(list);
        setAnimal(pickRandom(list, null));
      } catch (err) {
        if (cancelled) return;
        console.error('画像パスの読み込みに失敗しました:', err);
      }
    };

    fetchInitialData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-center text-base-content/70">
        動物たちがジョークを言います。ボタンを押すとランダムにジョークと動物を変更できます。
      </p>

      {/* 動物 + 吹き出し（位置調整：下揃え） */}
      <div className="flex justify-center px-4">
        <div className="flex items-end gap-4">
          {/* 動物アイコン */}
          <div className="avatar">
            <div className="w-20">
              {animal?.src ? (
                <img src={animal.src} alt={animal.caption ?? 'Animal'} />
              ) : (
                <div className="w-20 h-20" />
              )}
            </div>
          </div>

          {/* 吹き出し */}
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-neutral whitespace-pre-wrap max-w-xl">
              {error ? error : joke || 'ジョークを読み込み中...'}
            </div>
          </div>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <LoadingBtn loading={animalLoading} onClick={changeAnimal}>
          動物を変更
        </LoadingBtn>

        <LoadingBtn loading={jokeLoading} onClick={fetchJoke}>
          新しいジョークを取得
        </LoadingBtn>
      </div>
    </div>
  );
}
