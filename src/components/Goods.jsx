export default function Goods() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 space-y-8 text-center font-hanazome">
      {/* LINE絵文字 */}
      <div className="space-y-3">
        <p>
          ①{' '}
          <a
            href="https://line.me/S/emoji/?id=672c7883f5546179ccca50e0&lang=ja&utm_source=gnsh_sticonDetail"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            LINE絵文字
          </a>
        </p>

        <div className="flex justify-center">
          <img
            src="/images/LINE.png"
            alt="LINE絵文字"
            className="w-96 max-w-full shadow-sm"
          />
        </div>
      </div>

      {/* SUZURI */}
      <div className="space-y-3">
        <p>
          ②{' '}
          <a
            href="https://suzuri.jp/min_min__"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            suzuri
          </a>
        </p>

        <div className="flex justify-center">
          <img
            src="/images/suzuri.png"
            alt="suzuri"
            className="w-96 max-w-full shadow-sm"
          />
        </div>
      </div>

      <p className="text-base-content/70">
        グッズのリクエストがありましたら、お問い合わせフォームにてお願いします。
      </p>
    </div>
  );
}
