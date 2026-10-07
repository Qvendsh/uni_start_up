import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ForecastPreview } from "@/components/ForecastPreview";
import { Icon } from "@/components/Icons";
import { CopyEmailButton } from "@/components/EmailActions";
import { gmailComposeUrl } from "@/lib/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-orbit orbit-one" aria-hidden="true"></div>
          <div className="hero-orbit orbit-two" aria-hidden="true"></div>
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span></span> ML-ПЛАНУВАННЯ ДЛЯ РИТЕЙЛУ</p>
              <h1>Купуйте стільки, скільки <em>справді продасте</em></h1>
              <p className="hero-lead">
                StockMind аналізує попередні продажі та прогнозує, який товар і в якій кількості варто замовити — щоб полиці не пустували, а склад не переповнювався.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contact">Обговорити пілот <span>→</span></a>
                <a className="text-link" href="#how">Подивитися, як працює <span>↓</span></a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars" aria-hidden="true"><span>Д</span><span>ML</span><span>BI</span></div>
                <p><strong>Створено навколо реальної проблеми</strong><br/>надлишків і втрачених продажів у ритейлі</p>
              </div>
            </div>
            <div className="hero-demo reveal reveal-delay">
              <ForecastPreview />
              <div className="floating-note"><Icon name="spark"/><span><strong>Рішення, а не просто графік</strong>Модель підказує конкретну кількість</span></div>
            </div>
          </div>
        </section>

        <section className="problem section" id="product">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow"><span></span> ПРОБЛЕМА</p><h2>Інтуїція не бачить усієї картини</h2></div>
              <p>Сезонність, розміри, кольори, бренди та акції створюють тисячі комбінацій. Людині важко врахувати їх одночасно — алгоритму ні.</p>
            </div>
            <div className="comparison-grid">
              <article className="comparison-card old-way">
                <span className="card-kicker">БЕЗ STOCKMIND</span>
                <div className="shirt-visual" aria-hidden="true">
                  <svg viewBox="0 0 200 130" fill="none"><path d="m70 18-47 21 16 33 22-8v49h78V64l22 8 16-33-47-21c-5 12-15 17-30 17S75 30 70 18Z" fill="#2c66d2"/><path d="M70 18c6 13 16 20 30 20s24-7 30-20" stroke="#173f8b" strokeWidth="4"/><path d="M61 64h78" stroke="#477ee3" strokeWidth="3" strokeDasharray="5 5"/></svg>
                  <span className="stock-badge">+146 на складі</span>
                </div>
                <h3>Забагато синіх сорочок</h3>
                <p>Кошти заморожені в залишках, а наступну колекцію уже треба замовляти.</p>
                <div className="mini-metric"><span>Оборотність категорії</span><strong className="negative">−31%</strong></div>
              </article>
              <div className="comparison-arrow" aria-hidden="true"><span><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></span></div>
              <article className="comparison-card new-way">
                <span className="card-kicker">З STOCKMIND</span>
                <div className="signal-visual" aria-hidden="true">
                  {[38,55,44,70,62,88,74,100,93].map((height, i) => <i key={i} style={{height: `${height}%`}}></i>)}
                  <svg viewBox="0 0 240 100" preserveAspectRatio="none"><polyline points="0,82 30,72 60,76 90,52 120,57 150,32 180,40 210,14 240,20"/></svg>
                </div>
                <h3>96 одиниць — оптимальне замовлення</h3>
                <p>Рекомендація враховує темп продажів, сезонність і поточний залишок.</p>
                <div className="mini-metric"><span>Очікуване скорочення залишків</span><strong className="positive">−23%</strong></div>
              </article>
            </div>
          </div>
        </section>

        <section className="how section" id="how">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow"><span></span> ЯК ЦЕ ПРАЦЮЄ</p>
              <h2>Від таблиці продажів до чіткої дії</h2>
              <p>Три зрозумілі етапи. Без необхідності ставати спеціалістом з машинного навчання.</p>
            </div>
            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">01</span><div className="icon-box"><Icon name="database"/></div>
                <h3>Передайте історію</h3><p>Імпортуйте продажі, залишки та базові дані про товари у звичному форматі CSV або XLSX.</p>
                <span className="step-tag">Дані залишаються вашими</span>
              </article>
              <article className="step-card featured-step">
                <span className="step-number">02</span><div className="icon-box"><Icon name="spark"/></div>
                <h3>Модель знаходить закономірності</h3><p>Алгоритм враховує сезонність, тренди, категорії, бренди та поведінку попиту.</p>
                <span className="step-tag">ML-прогноз</span>
              </article>
              <article className="step-card">
                <span className="step-number">03</span><div className="icon-box"><Icon name="chart"/></div>
                <h3>Отримайте рекомендацію</h3><p>Бачте очікуваний попит і конкретну кількість для наступного замовлення по кожному SKU.</p>
                <span className="step-tag">Рішення за хвилини</span>
              </article>
            </div>
          </div>
        </section>

        <section className="benefits section">
          <div className="container benefits-grid">
            <div className="benefit-copy">
              <p className="eyebrow"><span></span> ЩО ЗМІНЮЄТЬСЯ</p>
              <h2>Менше коштів на складі. Більше товару на полиці.</h2>
              <p>StockMind допомагає команді закупівель бачити ризик раніше й приймати рішення на основі сигналів, а не припущень.</p>
              <ul className="check-list">
                <li><Icon name="check"/><span><strong>Менше надлишків</strong> — вчасно помічайте позиції з ризиком низького попиту.</span></li>
                <li><Icon name="check"/><span><strong>Менше дефіциту</strong> — не втрачайте продажі через занадто обережне замовлення.</span></li>
                <li><Icon name="check"/><span><strong>Зрозуміла логіка</strong> — бачте фактори, що вплинули на рекомендацію.</span></li>
              </ul>
            </div>
            <div className="dashboard-stack" aria-label="Приклад інтерфейсу рекомендацій">
              <div className="stack-card back-card"><span></span><span></span><span></span></div>
              <div className="stack-card front-card">
                <div className="stack-head"><div><small>Рекомендації</small><strong>План закупівель</strong></div><span>Цей тиждень⌄</span></div>
                <div className="product-row head"><span>ТОВАР</span><span>ПОПИТ</span><span>ЗАМОВИТИ</span></div>
                <div className="product-row"><span><i className="product-dot blue"></i><b>Сорочка / синя</b></span><span>124</span><strong>96</strong></div>
                <div className="product-row"><span><i className="product-dot sand"></i><b>Светр / беж</b></span><span>82</span><strong>68</strong></div>
                <div className="product-row"><span><i className="product-dot dark"></i><b>Джинси / темні</b></span><span>156</span><strong>143</strong></div>
                <div className="stack-insight"><Icon name="spark"/><span><strong>Виявлено сезонний ріст</strong>Попит на джинси зросте приблизно через 2 тижні.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust section" id="trust">
          <div className="container trust-panel">
            <div className="trust-intro">
              <p className="eyebrow light"><span></span> ДОВІРА ЗА ДИЗАЙНОМ</p>
              <h2>Ваші дані — не навчальний матеріал</h2>
              <p>Ми розуміємо, що історія продажів розкриває бізнес-логіку. Тому доступ і використання даних фіксуються ще до старту роботи.</p>
              <a className="link-light" href="/privacy">Як ми працюємо з даними <span>→</span></a>
            </div>
            <div className="trust-cards">
              <article><div className="trust-icon"><Icon name="lock"/></div><div><h3>Контрольований доступ</h3><p>Доступ лише для визначених учасників команди та тільки на час, необхідний для роботи.</p></div></article>
              <article><div className="trust-icon"><Icon name="database"/></div><div><h3>Ізольоване зберігання</h3><p>Дані кожного пілоту зберігаються окремо, без змішування з файлами інших компаній.</p></div></article>
              <article><div className="trust-icon"><Icon name="file"/></div><div><h3>NDA до передачі даних</h3><p>Юридично закріплюємо конфіденційність договором про нерозголошення до початку обміну.</p></div></article>
              <article><div className="trust-icon"><Icon name="shield"/></div><div><h3>Видалення на запит</h3><p>Після завершення пілоту дані повертаються або видаляються за погодженою процедурою.</p></div></article>
            </div>
          </div>
        </section>

        <section className="cta section" id="contact">
          <div className="container cta-panel">
            <div><p className="eyebrow"><span></span> ПОЧНЕМО З ОДНІЄЇ КАТЕГОРІЇ</p><h2>Перевірмо прогноз на ваших даних</h2><p>Напишіть або зателефонуйте. Обговоримо формат даних, категорію для пілоту та критерії успіху.</p></div>
            <div className="contact-card">
              <a href="tel:+380976796820"><small>ЗАТЕЛЕФОНУВАТИ</small><strong>+380 97 679 68 20</strong><span>↗</span></a>
              <div className="contact-email-row">
                <a href={gmailComposeUrl} target="_blank" rel="noreferrer"><small>ВІДКРИТИ У GMAIL</small><strong>barchyshynyura@gmail.com</strong><span>↗</span></a>
                <CopyEmailButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
