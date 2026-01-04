export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 space-y-6 text-center font-hanazome">
      <div className="space-y-3">
        <p>
          お問い合わせフォーム：
          <a
            href="https://forms.gle/hx6P6pRoqDMoyufw8"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary ml-1"
          >
            Googleフォーム
          </a>
        </p>

        <p>
          今までいただいた質問・リクエスト：
          <a
            href="https://docs.google.com/spreadsheets/d/1iNw2YU2WP6qFEI6z2iuBTNCW_92ih1Tb1Tw07aV7aSc/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary ml-1"
          >
            回答一覧（Googleスプレッドシート）
          </a>
        </p>
      </div>

      <div className="divider" />

      <p className="text-base-content/70">
        質問や動物リクエストがある場合は、上記フォームをご利用ください。
      </p>
    </div>
  );
}
