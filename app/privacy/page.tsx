import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { CopyEmailButton } from "@/components/EmailActions";
import { gmailComposeUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Дані та приватність",
  description: "Як StockMind працює з бізнес-даними під час пілотного проєкту.",
};

const principles = [
  { icon: "file" as const, title: "Спочатку домовленості", text: "До передачі файлів сторони погоджують перелік даних, мету використання, строк зберігання та підписують NDA." },
  { icon: "database" as const, title: "Мінімально необхідні дані", text: "Для прогнозу потрібні продажі, залишки та характеристики товарів. Дані покупців або платіжні реквізити не потрібні." },
  { icon: "lock" as const, title: "Обмежений доступ", text: "Доступ отримують лише визначені учасники проєкту. Кожен набір даних зберігається окремо від інших пілотів." },
  { icon: "shield" as const, title: "Контроль завершення", text: "Після завершення співпраці дані видаляються або повертаються у строк і спосіб, зафіксовані в домовленостях." },
];

export default function PrivacyPage() {
  return (
    <>
      <Header compact />
      <main className="privacy-main">
        <section className="privacy-hero">
          <div className="container narrow">
            <a className="back-link" href="/">← На головну</a>
            <p className="eyebrow"><span></span> ДАНІ ТА ПРИВАТНІСТЬ</p>
            <h1>Прогноз будується на ваших даних. Контроль залишається у вас.</h1>
            <p>Прозорі правила для навчального пілоту StockMind: що передається, хто має доступ і що відбувається після завершення роботи.</p>
          </div>
        </section>
        <section className="privacy-content section">
          <div className="container privacy-layout">
            <aside>
              <p>Коротко</p>
              <a href="#principles">4 принципи</a>
              <a href="#flow">Життєвий цикл даних</a>
              <a href="#nda">NDA</a>
              <a href="#contact">Контакт</a>
            </aside>
            <div className="privacy-article">
              <section id="principles">
                <p className="section-label">01 / ПРИНЦИПИ</p>
                <h2>Як ми ставимося до бізнес-даних</h2>
                <div className="principles-grid">
                  {principles.map((item) => <article key={item.title}><div className="icon-box"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
                </div>
              </section>
              <section id="flow">
                <p className="section-label">02 / ЖИТТЄВИЙ ЦИКЛ</p>
                <h2>Від передачі до видалення</h2>
                <div className="data-flow">
                  <div><span>1</span><strong>Погодження</strong><p>Фіксуємо мету, склад і формат даних.</p></div>
                  <div><span>2</span><strong>Захищена передача</strong><p>Обираємо узгоджений приватний канал.</p></div>
                  <div><span>3</span><strong>Аналіз</strong><p>Використовуємо лише для створення прогнозу.</p></div>
                  <div><span>4</span><strong>Завершення</strong><p>Повертаємо або видаляємо за процедурою.</p></div>
                </div>
              </section>
              <section id="nda" className="nda-block">
                <div className="nda-icon"><Icon name="file"/></div>
                <div><p className="section-label">03 / ЮРИДИЧНИЙ ЗАХИСТ</p><h2>NDA до початку роботи</h2><p>Договір про нерозголошення визначає, яка інформація є конфіденційною, хто може з нею працювати, для якої мети вона використовується та яку відповідальність несуть сторони. Конкретні умови узгоджуються з партнером до передачі будь-яких даних.</p></div>
              </section>
              <section id="contact" className="privacy-contact">
                <p className="section-label">04 / КОНТАКТ</p>
                <h2>Залишилися запитання про дані?</h2>
                <p>Напишіть нам — обговоримо необхідний набір полів і умови пілоту до того, як ви щось передасте.</p>
                <div className="privacy-contact-actions"><a className="button" href={gmailComposeUrl} target="_blank" rel="noreferrer">Відкрити Gmail <span>→</span></a><CopyEmailButton className="copy-email light-copy"/><a className="text-link" href="tel:+380976796820">+380 97 679 68 20</a></div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
