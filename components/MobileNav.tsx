"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNav({ fromInnerPage = false }: { fromInnerPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const sectionLink = (hash: string) => (fromInnerPage ? `/${hash}` : hash);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className={`mobile-menu${open ? " open" : ""}`}>
      {open && <button className="mobile-menu-backdrop" type="button" aria-label="Закрити меню" onClick={closeMenu} />}
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? "Закрити меню" : "Відкрити меню"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span></span><span></span><span></span>
      </button>
      <nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Мобільна навігація" aria-hidden={!open}>
        <Link href="/" onClick={closeMenu}>Головна <span>↗</span></Link>
        <a href={sectionLink("#product")} onClick={closeMenu}>Продукт <span>01</span></a>
        <a href={sectionLink("#how")} onClick={closeMenu}>Як це працює <span>02</span></a>
        <a href={sectionLink("#trust")} onClick={closeMenu}>Безпека <span>03</span></a>
        <Link href="/privacy" onClick={closeMenu}>Дані та приватність <span>04</span></Link>
        <a className="mobile-menu-cta" href={sectionLink("#contact")} onClick={closeMenu}>Обговорити пілот <span>→</span></a>
      </nav>
    </div>
  );
}
