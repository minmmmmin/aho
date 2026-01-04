import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { to: '/', label: 'ホーム' },
  { to: '/about', label: 'しょうかい' },
  { to: '/animal', label: 'ずかん' },
  { to: '/news', label: 'ミニゲーム' },
  { to: '/question', label: 'よくある質問' },
  { to: '/goods', label: 'グッズ' },
  { to: '/inf', label: 'お問い合わせ' },
];

export default function Header() {
  const drawerId = useId();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ルート遷移したら閉じる（リンク押したのと同じ挙動に）
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full">
      <div className="drawer">
        <input
          id={drawerId}
          type="checkbox"
          className="drawer-toggle"
          checked={open}
          onChange={(e) => setOpen(e.target.checked)}
        />

        {/* 画面側 */}
        <div className="drawer-content">
          {/* 上段：タイトル行 */}
          <div className="flex items-center px-4 py-4 border-b border-base-300">
            {/* 左：スマホだけハンバーガー（PCは空のまま幅だけ確保） */}
            <div className="w-12">
              <label
                htmlFor={drawerId}
                className="btn btn-ghost btn-square md:hidden"
                aria-label="メニューを開く"
              >
                {/* ハンバーガーアイコン（SVG） */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>

            {/* 中央：タイトル */}
            <Link
              to="/"
              className="mx-auto text-2xl md:text-3xl font-bold no-underline text-base-content font-hanazome"
            >
              あほっこ動物
            </Link>

            {/* 右：幅合わせ */}
            <div className="w-12" />
          </div>

          {/* ヘッダー画像 */}
          <img
            src="/images/aho.png"
            alt="あほっこ動物たちのヘッダー画像"
            className="w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover"
          />

          {/* PCナビ */}
          <nav className="hidden md:flex justify-center border-b border-base-300 bg-base-100">
            <div className="menu menu-horizontal px-2 gap-2">
              {menuItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="btn btn-ghost font-hanazome text-base font-bold"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* ドロワー側（スマホメニュー） */}
        <div className="drawer-side md:hidden">
          <label htmlFor={drawerId} className="drawer-overlay" />
          <div className="w-72 min-h-full bg-base-100 p-4">
            <div className="mb-3 text-lg font-bold font-hanazome">メニュー</div>

            <ul className="menu gap-1">
              {menuItems.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="font-hanazome text-base">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
