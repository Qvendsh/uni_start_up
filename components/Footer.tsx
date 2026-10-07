import Link from "next/link";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-note">Менше залишків. Менше дефіциту. Більше рішень, підкріплених даними.</p>
        </div>
        <div>
          <p className="footer-label">Зв’язок</p>
          <a href="tel:+380976796820">+380 97 679 68 20</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=barchyshynyura%40gmail.com&su=StockMind%20%E2%80%94%20%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B8%20%D0%BF%D1%96%D0%BB%D0%BE%D1%82" target="_blank" rel="noreferrer">barchyshynyura@gmail.com</a>
        </div>
        <div>
          <p className="footer-label">Інформація</p>
          <Link href="/privacy">Дані та приватність</Link>
          <a href="/#trust">Безпека</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} StockMind</span>
        <span>Навчальний стартап-проєкт</span>
      </div>
    </footer>
  );
}
