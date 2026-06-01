const companies = [
  {
    code: '8801',
    name: '三井不動産',
    short: '三井不',
    score: 94,
    revenue: 27097,
    operatingProfit: 3978,
    netIncome: 2787,
    assets: 98599,
    equityRatio: 32.4,
    themes: ['再開発', '資産回転', 'ホテル・リゾート', '物流', '海外'],
    signals: ['売上・利益規模が最大級', '営業CFは投資余力の源泉', '複合開発と保有/回転の両利き'],
    action: '大規模複合開発・資産回転・環境価値向上を横断するCRE/開発PMOを提案。',
    source: 'https://www.mitsuifudosan.co.jp/corporate/ir/',
  },
  {
    code: '3289',
    name: '東急不動産HD',
    short: '東急不HD',
    score: 89,
    revenue: 12460,
    operatingProfit: 1669,
    netIncome: 967,
    assets: 34191,
    equityRatio: 26.3,
    themes: ['再開発', '環境不動産', 'ホテル・リゾート', '資産回転'],
    signals: ['広域渋谷圏の都市開発', '再エネ・環境不動産の差別化', 'D/E 2倍水準で投資規律が重要'],
    action: '広域渋谷圏、再エネ、ホテル/リゾートを束ねた環境価値・回遊性向上施策を提案。',
    source: 'https://www.tokyu-fudosan-hd.co.jp/ir/',
  },
  {
    code: '8802',
    name: '三菱地所',
    short: '三菱地所',
    score: 92,
    revenue: 17461,
    operatingProfit: 3297,
    netIncome: 2225,
    assets: 85662,
    equityRatio: 31.4,
    themes: ['再開発', '資産回転', '賃貸オフィス', '海外'],
    signals: ['丸の内を中核とする都心再開発', '投資有価証券売却益も利益を押上げ', '総資産8.6兆円規模'],
    action: '都心再開発、権利者調整、投資回収ストーリー構築、環境認証高度化を提案。',
    source: 'https://www.mec.co.jp/ir/library/2026/4Q/summary_2025_4.pdf',
  },
  {
    code: '8830',
    name: '住友不動産',
    short: '住友不',
    score: 87,
    revenue: 10578,
    operatingProfit: 2992,
    netIncome: 2125,
    assets: 71857,
    equityRatio: 34.0,
    themes: ['賃貸オフィス', '再開発', '住宅'],
    signals: ['賃貸収益力が高い保有型モデル', '土地・有形固定資産の厚みが大きい', '長期価値向上型の提案が有効'],
    action: '都心大型ビルの収益最大化、築古資産の建替判断、賃貸ポートフォリオ高度化を提案。',
    source: 'https://www.sumitomo-rd.co.jp/ir/financial_summary/',
  },
  {
    code: '3231',
    name: '野村不動産HD',
    short: '野村不HD',
    score: 88,
    revenue: 9425,
    operatingProfit: 1382,
    netIncome: 829,
    assets: 28120,
    equityRatio: 28.5,
    themes: ['住宅', '資産回転', '再開発', 'PM/CRE'],
    signals: ['住宅・PM・仲介/CREが強い', '固定資産売却益と減損損失が同時発生', '建替・資産入替テーマが明確'],
    action: '住宅/複合再開発、建替・減損後の出口戦略、PM/CRE連携の法人提案を設計。',
    source: 'https://www.nomura-re-hd.co.jp/ir/pdf/renketsu_20260424.pdf',
  },
];

const yen = (value) => `${value.toLocaleString()}億円`;
const pct = (value) => `${value.toFixed(1)}%`;

const state = { theme: 'all', sortKey: 'score' };

const filteredCompanies = () => companies
  .filter((company) => state.theme === 'all' || company.themes.includes(state.theme))
  .sort((a, b) => b[state.sortKey] - a[state.sortKey]);

function renderKpis(items) {
  const totals = items.reduce((acc, company) => {
    acc.revenue += company.revenue;
    acc.operatingProfit += company.operatingProfit;
    acc.assets += company.assets;
    acc.score += company.score;
    return acc;
  }, { revenue: 0, operatingProfit: 0, assets: 0, score: 0 });
  const avgScore = items.length ? totals.score / items.length : 0;
  document.querySelector('#kpiGrid').innerHTML = [
    ['対象企業', `${items.length}社`, 'フィルター適用後'],
    ['営業収益合計', yen(totals.revenue), '2026年3月期'],
    ['営業利益合計', yen(totals.operatingProfit), '利益規模'],
    ['平均評価', avgScore.toFixed(1), '100点満点'],
  ].map(([label, value, note]) => `
    <article class="kpi-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${note}</p>
    </article>
  `).join('');
}

function renderRanking(items) {
  const max = Math.max(...companies.map((company) => company.score));
  document.querySelector('#rankingList').innerHTML = items.map((company, index) => `
    <div class="rank-row">
      <b>${index + 1}</b>
      <div>
        <span>${company.name}</span>
        <i><em style="width:${(company.score / max) * 100}%"></em></i>
      </div>
      <strong>${company.score}</strong>
    </div>
  `).join('');
}

function renderProfitChart(items) {
  const max = Math.max(...companies.map((company) => company.operatingProfit));
  document.querySelector('#profitChart').innerHTML = items.map((company) => `
    <div class="bar-row">
      <span>${company.short}</span>
      <i><em style="width:${(company.operatingProfit / max) * 100}%"></em></i>
      <strong>${yen(company.operatingProfit)}</strong>
    </div>
  `).join('');
}

function renderCards(items) {
  document.querySelector('#resultCount').textContent = `${items.length}社表示`;
  document.querySelector('#companyCards').innerHTML = items.map((company) => `
    <article class="company-card">
      <div class="card-head">
        <span>${company.code}</span>
        <strong>${company.score}</strong>
      </div>
      <h3>${company.name}</h3>
      <div class="metrics">
        <div><span>営業収益</span><b>${yen(company.revenue)}</b></div>
        <div><span>営業利益</span><b>${yen(company.operatingProfit)}</b></div>
        <div><span>純利益</span><b>${yen(company.netIncome)}</b></div>
        <div><span>自己資本比率</span><b>${pct(company.equityRatio)}</b></div>
      </div>
      <div class="chips">${company.themes.map((theme) => `<span>${theme}</span>`).join('')}</div>
      <ul>${company.signals.map((signal) => `<li>${signal}</li>`).join('')}</ul>
      <p class="action"><b>提案：</b>${company.action}</p>
    </article>
  `).join('');
}

function renderThemeMatrix() {
  const themes = [...new Set(companies.flatMap((company) => company.themes))];
  document.querySelector('#themeMatrix').innerHTML = themes.map((theme) => {
    const names = companies.filter((company) => company.themes.includes(theme)).map((company) => company.short);
    return `<div class="theme-cell"><b>${theme}</b><span>${names.join(' / ')}</span></div>`;
  }).join('');
}

function renderSources() {
  document.querySelector('#sourceList').innerHTML = companies.map((company) => `
    <a href="${company.source}" target="_blank" rel="noreferrer">
      <b>${company.name}</b>
      <span>${company.source}</span>
    </a>
  `).join('');
}

function render() {
  const items = filteredCompanies();
  renderKpis(items);
  renderRanking(items);
  renderProfitChart(items);
  renderCards(items);
  renderThemeMatrix();
  renderSources();
}

document.querySelector('#themeFilter').addEventListener('change', (event) => {
  state.theme = event.target.value;
  render();
});

document.querySelector('#sortKey').addEventListener('change', (event) => {
  state.sortKey = event.target.value;
  render();
});

render();
