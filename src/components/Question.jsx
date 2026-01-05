import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

const API_URL = 'https://ahoaho.microcms.io/api/v1/question?limit=100';

export default function Question() {
  const [data, setData] = useState(null); // microCMSレスポンス全体
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchQuestions = async () => {
      try {
        setError(null);

        const res = await fetch(API_URL, {
          headers: {
            'X-MICROCMS-API-KEY': import.meta.env.VITE_X_MICROCMS_API_KEY,
          },
        });

        if (!res.ok) throw new Error('お知らせの取得に失敗しました。');

        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e) {
        console.error('Error fetching content:', e);
        if (!cancelled) setError('お知らせの取得中にエラーが発生しました。');
      }
    };

    fetchQuestions();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="alert alert-error max-w-3xl mx-auto">
        <span className="font-hanazome">{error}</span>
      </div>
    );
  }

  if (!data?.contents) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 space-y-6">
      <h3 className="text-left text-xl font-bold font-hanazome">
        みんなからの質問をまとめています
      </h3>

      <div className="space-y-4">
        {data.contents.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="text-left text-sm text-base-content/60 font-hanazome">
                {new Date(item.publishedAt).toLocaleDateString()}
              </div>

              <h2 className="text-left text-lg font-bold font-hanazome">
                {item.title}
              </h2>

              {/* microCMSのHTML表示 */}
              <div className="text-left font-hanazome leading-relaxed">
                <div
                  className="prose max-w-none news-content"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.content),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
