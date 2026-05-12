import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import EmptyState from '../components/EmptyState';
import IconRenderer from '../components/IconRenderer';
import MascotMini from '../components/MascotMini';
import MicroBadge from '../components/MicroBadge';
import PremiumCard from '../components/PremiumCard';
import {
  buildCategoryStats,
  buildFavoriteCategoryStats,
  buildSurveyDifficultyStats,
  buildSurveyUnclearCategoryStats,
  getTopCategory,
} from '../utils/statistics';

export default function Statistics({
  t,
  lang,
  categories,
  wasteItems,
  favoriteIds,
  surveyAnswers,
}) {
  const categoryData = useMemo(
    () => buildCategoryStats(categories, wasteItems, lang),
    [categories, wasteItems, lang]
  );
  const favoriteData = useMemo(
    () => buildFavoriteCategoryStats(categories, wasteItems, favoriteIds, lang),
    [categories, wasteItems, favoriteIds, lang]
  );
  const surveyDifficultyData = useMemo(
    () =>
      buildSurveyDifficultyStats(surveyAnswers, t.survey.q2Options).map((item, index) => ({
        ...item,
        color: ['#5db7de', '#8edfc1', '#ffd36e', '#ffdce8'][index % 4],
      })),
    [surveyAnswers, t]
  );
  const surveyCategoryData = useMemo(
    () => buildSurveyUnclearCategoryStats(categories, surveyAnswers, lang),
    [categories, surveyAnswers, lang]
  );
  const topCategory = useMemo(() => getTopCategory(categoryData), [categoryData]);
  const metricCards = useMemo(
    () => [
      { icon: 'PackageCheck', label: t.common.items, value: wasteItems.length },
      { icon: 'Layers3', label: t.common.categories, value: categories.length },
      { icon: 'Heart', label: t.common.favorites, value: favoriteIds.length },
      { icon: 'ClipboardList', label: t.common.answers, value: surveyAnswers.length },
    ],
    [categories.length, favoriteIds.length, surveyAnswers.length, t, wasteItems.length]
  );

  const tooltipStyle = {
    border: '1px solid rgba(120, 150, 170, 0.18)',
    borderRadius: 14,
    boxShadow: '0 18px 42px rgba(31, 53, 73, 0.11)',
    background: 'rgba(255, 255, 255, 0.94)',
  };
  const itemTooltipFormatter = (value) => [value, t.common.items];
  const answerTooltipFormatter = (value) => [value, t.common.answers];

  return (
    <div className="page-stack statistics-page">
      <section className="page-hero statistics-hero">
        <div>
          <span className="section-eyebrow">{t.statistics.kicker}</span>
          <h1>{t.statistics.title}</h1>
          <p>{t.statistics.subtitle}</p>
          {topCategory ? (
            <MicroBadge icon="Crown" tone="cream">
              {t.statistics.topCategory}: {topCategory.name} ({topCategory.count})
            </MicroBadge>
          ) : null}
        </div>
        <MascotMini expression="soft" size="md" peek label={t.common.mascotLabel} />
      </section>

      <section className="metric-grid">
        {metricCards.map((metric) => (
          <PremiumCard className="metric-card" key={metric.label} hover={false}>
            <span className="metric-card__icon">
              <IconRenderer name={metric.icon} size={20} />
            </span>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </PremiumCard>
        ))}
      </section>

      <section className="analytics-grid">
        <article className="chart-card chart-card--wide">
          <div className="panel-heading">
            <div>
              <span className="section-eyebrow">{t.statistics.categoryCount}</span>
              <h2>{t.statistics.categoryShare}</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={categoryData} margin={{ top: 8, right: 12, left: -18, bottom: 76 }}>
              <CartesianGrid vertical={false} stroke="rgba(120, 150, 170, 0.18)" strokeDasharray="4 7" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: '#64748b' }}
                angle={-35}
                textAnchor="end"
                interval={0}
                height={92}
              />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} allowDecimals={false} />
              <Tooltip
                cursor={{ fill: 'rgba(93, 183, 222, 0.09)' }}
                contentStyle={tooltipStyle}
                formatter={itemTooltipFormatter}
              />
              <Bar dataKey="count" radius={[10, 10, 4, 4]}>
                {categoryData.map((entry) => (
                  <Cell key={entry.id} fill={entry.color} fillOpacity={0.78} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </article>

        <article className="chart-card">
          <div className="panel-heading">
            <div>
              <span className="section-eyebrow">{t.statistics.categoryShare}</span>
              <h2>{t.common.categories}</h2>
            </div>
          </div>
          <div className="donut-card">
            <ResponsiveContainer width="100%" height={286}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="count"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={108}
                  paddingAngle={3}
                >
                  {categoryData.map((entry) => (
                    <Cell key={entry.id} fill={entry.color} fillOpacity={0.78} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={itemTooltipFormatter} />
              </PieChart>
            </ResponsiveContainer>
            <div className="donut-summary">
              <strong>{wasteItems.length}</strong>
              <span>{t.common.items}</span>
            </div>
          </div>
          <div className="legend-list legend-list--compact">
            {categoryData.slice(0, 8).map((item) => (
              <span key={item.id}>
                <i style={{ background: item.color }} />
                {item.name}
              </span>
            ))}
          </div>
        </article>

        <article className="chart-card local-card">
          <div className="panel-heading">
            <div>
              <span className="section-eyebrow">{t.statistics.favoriteMemo}</span>
              <h2>{t.statistics.favoriteBreakdown}</h2>
            </div>
          </div>

          {favoriteData.length ? (
            <div className="favorite-breakdown">
              {favoriteData.map((item) => (
                <div className="favorite-breakdown__row" key={item.id}>
                  <span><i style={{ background: item.color }} /> {item.name}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState icon="PieChart" title={t.statistics.noFavorites} expression="empty" mascotLabel={t.common.mascotLabel} />
          )}
          <div className="local-snapshot">
            <span>{t.common.localSavedData}</span>
            <strong>{favoriteIds.length + surveyAnswers.length}</strong>
          </div>
        </article>

        <article className="chart-card survey-card">
          <div className="panel-heading">
            <div>
              <span className="section-eyebrow">{t.common.answers}</span>
              <h2>{t.statistics.surveyDifficulty}</h2>
            </div>
          </div>

          {surveyDifficultyData.length ? (
            <>
              <ResponsiveContainer width="100%" height={230}>
                <BarChart data={surveyDifficultyData} margin={{ top: 8, right: 10, left: -18, bottom: 46 }}>
                  <CartesianGrid vertical={false} stroke="rgba(120, 150, 170, 0.18)" strokeDasharray="4 7" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: '#64748b' }}
                    angle={-24}
                    textAnchor="end"
                    interval={0}
                    height={62}
                  />
                  <YAxis tick={{ fontSize: 12, fill: '#64748b' }} allowDecimals={false} />
                  <Tooltip
                    cursor={{ fill: 'rgba(93, 183, 222, 0.09)' }}
                    contentStyle={tooltipStyle}
                    formatter={answerTooltipFormatter}
                  />
                  <Bar dataKey="value" radius={[10, 10, 4, 4]}>
                    {surveyDifficultyData.map((entry) => (
                      <Cell key={entry.id} fill={entry.color} fillOpacity={0.82} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="survey-breakdown">
                <strong>{t.statistics.surveyUnclearCategories}</strong>
                {surveyCategoryData.length ? (
                  surveyCategoryData.map((item) => (
                    <span key={item.id}>
                      <i style={{ background: item.color }} />
                      {item.name}
                      <b>{item.value}</b>
                    </span>
                  ))
                ) : (
                  <p>{t.statistics.noSurveyData}</p>
                )}
              </div>
            </>
          ) : (
            <EmptyState icon="ClipboardList" title={t.statistics.noSurveyData} expression="empty" mascotLabel={t.common.mascotLabel} />
          )}
        </article>
      </section>
    </div>
  );
}
