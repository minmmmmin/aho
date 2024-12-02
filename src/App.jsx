import { useEffect, useState } from "react";

export default function App() {
    const [joke, setJoke] = useState(null); // ジョークを保存
    const [isLoading, setIsLoading] = useState(true); // 読み込み中の状態
    const [error, setError] = useState(null); // エラーを保存

    const fetchJoke = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single");
            if (!response.ok) {
                throw new Error("ジョークを取得できませんでした");
            }
            const data = await response.json();
            const jokeText = data.type === "single" ? data.joke : `${data.setup} ... ${data.delivery}`;
            setJoke(jokeText);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Joke Generator</h1>
            {isLoading && <p>読み込み中...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {joke && <p>{joke}</p>}
            <button onClick={fetchJoke} style={{ marginTop: "20px" }}>
                新しいジョークを取得
            </button>
        </div>
    );
}
