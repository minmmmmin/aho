import { useEffect, useState } from 'react';

export default function Animal() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const loadImagePaths = async () => {
      try {
        const response = await fetch('aho.json');
        const data = await response.json();
        if (!cancelled) {
          setImagePaths(data.imagePaths ?? []);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('画像データの読み込みに失敗しました:', err);
        }
      }
    };

    loadImagePaths();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {imagePaths.map((image, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              loading="lazy"
              src={image.src}
              alt={image.caption}
              className="w-full max-w-[160px] h-auto rounded-lg"
            />

            <p className="text-center font-hanazome text-base sm:text-lg md:text-xl text-base-content/80">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
