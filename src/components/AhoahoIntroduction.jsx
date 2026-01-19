import { useEffect, useState } from 'react';

const PICK_COUNT = 5;

export default function About() {
  const [imagePaths, setImagePaths] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const loadImagePaths = async () => {
      try {
        const res = await fetch('aho.json');
        const data = await res.json();
        if (!cancelled) {
          setImagePaths(data.imagePaths ?? []);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('画像パスの読み込みに失敗しました:', err);
        }
      }
    };

    loadImagePaths();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (imagePaths.length === 0) return;

    const shuffled = [...imagePaths].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, PICK_COUNT));
  }, [imagePaths]);

  return (
    <div className="space-y-8">
      {/* 説明文 */}
      <div className="mx-auto max-w-3xl text-center leading-loose text-base-content">
        <p>
          あほっこ動物は、あほな動物たちのことを指します。
          <br />
          不定期でさまざまな個性豊かな動物たちが誕生します。
          <br />
          この何とも言えない表情が魅力的。
          <br />
          名前がある動物もいれば、ない動物もいます。
          <br />
          どの動物も、見ているだけで癒やされること間違いなし。
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {randomImages.map((image, index) => (
          <div key={index} className="w-16 sm:w-16 md:w-24">
            <figure className="p-2">
              <img
                loading="lazy"
                src={image.src}
                alt={image.caption}
                className="rounded-lg object-contain"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
