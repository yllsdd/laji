import { useCallback, useState } from 'react';
import { Send } from 'lucide-react';
import MascotMini from '../components/MascotMini';

export default function Survey({ t, lang, categories, onSubmitSurvey }) {
  const createEmptyForm = useCallback(
    () => ({
      stayLengthIndex: null,
      difficultyIndex: null,
      unclearCategory: '',
      featureRequest: '',
    }),
    []
  );
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(() => createEmptyForm());
  const [errors, setErrors] = useState({});

  const updateForm = useCallback((key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }, []);

  const resetForm = useCallback(() => {
    setSubmitted(false);
    setErrors({});
    setForm(createEmptyForm());
  }, [createEmptyForm]);

  const validateForm = useCallback(() => {
    const nextErrors = {};
    if (form.stayLengthIndex === null) nextErrors.stayLengthIndex = true;
    if (form.difficultyIndex === null) nextErrors.difficultyIndex = true;
    if (!form.unclearCategory) nextErrors.unclearCategory = true;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    onSubmitSurvey({
      ...form,
      stayLength: t.survey.q1Options[form.stayLengthIndex],
      difficulty: t.survey.q2Options[form.difficultyIndex],
      createdAt: new Date().toISOString(),
      language: lang,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="survey-complete">
        <MascotMini expression="happy" size="lg" label={t.common.mascotLabel} />
        <span className="section-eyebrow">{t.survey.kicker}</span>
        <h1>{t.survey.thanksTitle}</h1>
        <p>{t.survey.thanksText}</p>
        <button
          className="premium-action premium-action--light"
          type="button"
          onClick={resetForm}
          aria-label={t.survey.answerAgain}
        >
          {t.survey.answerAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="page-stack survey-page">
      <section className="page-hero survey-hero">
        <div>
          <span className="section-eyebrow">{t.survey.kicker}</span>
          <h1>{t.survey.title}</h1>
          <p>{t.survey.subtitle}</p>
        </div>
        <MascotMini expression="thinking" size="md" peek label={t.common.mascotLabel} />
      </section>

      <form className="survey-form" onSubmit={handleSubmit} noValidate>
        {Object.values(errors).some(Boolean) ? (
          <div className="form-alert" role="alert">
            {t.survey.validationSummary}
          </div>
        ) : null}

        <fieldset
          className={errors.stayLengthIndex ? 'question-card question-card--error' : 'question-card'}
          aria-invalid={Boolean(errors.stayLengthIndex)}
          aria-describedby={errors.stayLengthIndex ? 'stayLength-error' : undefined}
        >
          <span className="question-card__number">01</span>
          <legend>{t.survey.q1} <span className="required-mark">{t.common.required}</span></legend>
          <div className="option-grid">
            {t.survey.q1Options.map((option, index) => (
              <label key={option} className={form.stayLengthIndex === index ? 'option-card active' : 'option-card'}>
                <input
                  type="radio"
                  name="stayLength"
                  checked={form.stayLengthIndex === index}
                  onChange={() => updateForm('stayLengthIndex', index)}
                  required
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.stayLengthIndex ? <p className="field-error" id="stayLength-error">{t.survey.requiredAnswer}</p> : null}
        </fieldset>

        <fieldset
          className={errors.difficultyIndex ? 'question-card question-card--error' : 'question-card'}
          aria-invalid={Boolean(errors.difficultyIndex)}
          aria-describedby={errors.difficultyIndex ? 'difficulty-error' : undefined}
        >
          <span className="question-card__number">02</span>
          <legend>{t.survey.q2} <span className="required-mark">{t.common.required}</span></legend>
          <div className="option-grid">
            {t.survey.q2Options.map((option, index) => (
              <label key={option} className={form.difficultyIndex === index ? 'option-card active' : 'option-card'}>
                <input
                  type="radio"
                  name="difficulty"
                  checked={form.difficultyIndex === index}
                  onChange={() => updateForm('difficultyIndex', index)}
                  required
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.difficultyIndex ? <p className="field-error" id="difficulty-error">{t.survey.requiredAnswer}</p> : null}
        </fieldset>

        <fieldset
          className={errors.unclearCategory ? 'question-card question-card--error' : 'question-card'}
          aria-invalid={Boolean(errors.unclearCategory)}
          aria-describedby={errors.unclearCategory ? 'unclearCategory-error' : undefined}
        >
          <span className="question-card__number">03</span>
          <legend>{t.survey.q3} <span className="required-mark">{t.common.required}</span></legend>
          <p>{t.survey.categoryHint}</p>
          <div className="category-choice-grid">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={form.unclearCategory === category.id ? 'category-choice active' : 'category-choice'}
                style={{ '--choice-color': category.color, '--choice-soft': category.softColor }}
                onClick={() => updateForm('unclearCategory', category.id)}
                aria-pressed={form.unclearCategory === category.id}
              >
                <span />
                {category.names[lang]}
              </button>
            ))}
          </div>
          {errors.unclearCategory ? <p className="field-error" id="unclearCategory-error">{t.survey.requiredCategory}</p> : null}
        </fieldset>

        <label className="question-card field-block">
          <span className="question-card__number">04</span>
          <span>{t.survey.q4} <span className="optional-mark">{t.common.optional}</span></span>
          <small className="field-help">{t.survey.optionalHint}</small>
          <textarea
            value={form.featureRequest}
            onChange={(event) => updateForm('featureRequest', event.target.value)}
            placeholder={t.survey.q4Placeholder}
            rows={4}
          />
        </label>

        <button className="premium-action submit-button" type="submit">
          <Send size={16} />
          {t.common.submit}
        </button>
      </form>
    </div>
  );
}
