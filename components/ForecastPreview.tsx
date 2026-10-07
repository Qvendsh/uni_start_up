"use client";

import { useState } from "react";

const scenarios = [
  {
    label: "Сині сорочки",
    sku: "SH-BL-042",
    confidence: "91%",
    forecast: "124",
    order: "96",
    saving: "−23%",
    actual: [35, 42, 39, 52, 48, 63, 59, 68, 72, 65, 78, 81],
    predicted: [38, 40, 43, 49, 53, 58, 62, 66, 70, 74, 79, 84],
  },
  {
    label: "Білі кросівки",
    sku: "SN-WH-117",
    confidence: "88%",
    forecast: "86",
    order: "72",
    saving: "−16%",
    actual: [30, 33, 41, 39, 45, 51, 48, 57, 55, 61, 66, 63],
    predicted: [31, 35, 38, 42, 46, 49, 52, 55, 58, 61, 64, 68],
  },
  {
    label: "Осінні куртки",
    sku: "JK-AU-203",
    confidence: "94%",
    forecast: "158",
    order: "143",
    saving: "−10%",
    actual: [22, 27, 25, 35, 31, 42, 48, 58, 67, 75, 87, 96],
    predicted: [24, 27, 29, 34, 39, 44, 50, 57, 65, 74, 84, 95],
  },
];

function points(values: number[]) {
  const max = 105;
  return values.map((value, index) => `${(index / (values.length - 1)) * 520},${180 - (value / max) * 148}`).join(" ");
}

export function ForecastPreview() {
  const [active, setActive] = useState(0);
  const item = scenarios[active];

  return (
    <div className="forecast-card" aria-label="Демонстрація прогнозу попиту">
      <div className="forecast-toolbar">
        <div>
          <span className="eyebrow-small">ПРОГНОЗ ПОПИТУ</span>
          <strong>{item.label}</strong>
        </div>
        <span className="status"><i></i> Модель готова</span>
      </div>
      <div className="scenario-tabs" role="tablist" aria-label="Оберіть товар">
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.sku}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={active === index}
          >
            {scenario.label}
          </button>
        ))}
      </div>
      <div className="chart-wrap">
        <div className="chart-y-label">одиниць / тиждень</div>
        <svg className="chart" viewBox="0 0 520 205" role="img" aria-label={`Графік продажів для ${item.label}`}>
          {[32, 69, 106, 143, 180].map((y) => <line key={y} x1="0" y1={y} x2="520" y2={y} className="grid-line" />)}
          <polyline key={`a-${active}`} points={points(item.actual)} className="line actual-line" />
          <polyline key={`p-${active}`} points={points(item.predicted)} className="line predicted-line" />
          <line x1="380" y1="14" x2="380" y2="185" className="today-line" />
          <text x="389" y="25" className="today-label">сьогодні</text>
        </svg>
        <div className="legend"><span><i className="dot actual"></i>Продажі</span><span><i className="dot predicted"></i>Прогноз</span></div>
      </div>
      <div className="forecast-stats">
        <div><span>Прогноз на 30 днів</span><strong>{item.forecast} <small>од.</small></strong></div>
        <div><span>Рекомендоване замовлення</span><strong>{item.order} <small>од.</small></strong></div>
        <div><span>Менше залишків</span><strong className="positive">{item.saving}</strong></div>
      </div>
      <div className="confidence"><span>Точність прогнозу</span><div><i style={{ width: item.confidence }}></i></div><strong>{item.confidence}</strong></div>
    </div>
  );
}
