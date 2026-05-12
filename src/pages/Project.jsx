import { Code2, Globe2, HeartHandshake, Leaf, ShieldCheck, Users } from 'lucide-react';
import CaseStudySection from '../components/CaseStudySection';
import MascotMini from '../components/MascotMini';
import MicroBadge from '../components/MicroBadge';
import PremiumCard from '../components/PremiumCard';

export default function Project({ t, lang, categories, wasteItems }) {
  const metrics = [
    { label: t.project.metrics[0], value: categories.length },
    { label: t.project.metrics[1], value: wasteItems.length },
    { label: t.project.metrics[2], value: 3 },
  ];
  const featureIcons = [Globe2, ShieldCheck, Leaf, Code2];
  const cardIcons = [Users, HeartHandshake, Leaf];

  return (
    <div className="page-stack project-page">
      <section className="project-case-hero">
        <div className="project-case-hero__copy">
          <span className="section-eyebrow">{t.project.kicker}</span>
          <h1>{t.project.title}</h1>
          <p>{t.project.subtitle}</p>
          <div className="project-tags">
            {t.project.features.map((feature, index) => {
              const FeatureIcon = featureIcons[index];
              return (
                <span key={feature}>
                  <FeatureIcon size={15} />
                  {feature}
                </span>
              );
            })}
          </div>
        </div>
        <div className="project-case-hero__panel">
          <MascotMini expression="soft" size="lg" peek label={t.common.mascotLabel} />
          <div className="project-case-metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <MicroBadge icon="Sparkles" tone="white">{t.project.badge}</MicroBadge>
        </div>
      </section>

      <section className="case-study-grid">
        {t.project.caseSections.map(([eyebrow, title, body, icon], index) => (
          <CaseStudySection
            key={eyebrow}
            eyebrow={eyebrow}
            title={title}
            body={body}
            icon={icon}
            index={index + 1}
            accent={index % 3 === 1 ? 'mint' : index % 3 === 2 ? 'pink' : 'blue'}
          />
        ))}
      </section>

      <section className="project-feature-grid">
        {t.project.featureCards.map((card, index) => {
          const CardIcon = cardIcons[index];
          const className = [
            'project-feature-card',
            index === 1 ? 'project-feature-card--accent' : '',
            index === 2 ? 'project-feature-card--green' : '',
          ].filter(Boolean).join(' ');

          return (
            <PremiumCard className={className} hover={false} key={card.title}>
              <CardIcon size={22} />
              <strong>{card.title}</strong>
              <p>{card.body}</p>
            </PremiumCard>
          );
        })}
      </section>
    </div>
  );
}
