import Link from "next/link";
import { Brand } from "./Brand";

export function Header({ compact = false }: { compact?: boolean }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Головна навігація">
          {!compact && (
            <>
              <a href="#product">Продукт</a>
              <a href="#how">Як це працює</a>
              <a href="#trust">Безпека</a>
            </>
          )}
          <Link href="/privacy">Дані та приватність</Link>
        </nav>
        <a className="button button-small" href="/#contact">
          Обговорити пілот
        </a>
        <details className="mobile-menu">
          <summary aria-label="Відкрити меню"><span></span><span></span><span></span></summary>
          <nav aria-label="Мобільна навігація">
            {!compact && (
              <>
                <a href="#product">Продукт</a>
                <a href="#how">Як це працює</a>
                <a href="#trust">Безпека</a>
              </>
            )}
            <Link href="/privacy">Дані та приватність</Link>
            <a href="/#contact">Обговорити пілот</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
