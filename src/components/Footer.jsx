export default function Footer() {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content py-6">
      <div className="flex flex-col items-center gap-2">
        {/* 上：Xリンク（Hanazome） */}
        <div className="flex items-center gap-2 font-hanazome">
          <img src="/images/usagi.png" alt="" className="w-6 h-6" />

          <a
            href="https://x.com/carrot__pyon_"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover text-base"
          >
            作者のX（旧Twitter）
          </a>

          <img src="/images/usagi.png" alt="" className="w-6 h-6" />
        </div>

        {/* 下：コピーライト（標準フォント） */}
        <p className="text-xs opacity-70 font-sans tracking-wide">
          Copyright © 2024 min
        </p>
      </div>
    </footer>
  );
}
