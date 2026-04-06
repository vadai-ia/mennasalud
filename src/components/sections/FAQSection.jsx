import { useState } from 'react'
import { events } from '../../lib/analytics'
import styles from './FAQSection.module.css'

const faqs = [
  {
    q: '¿Qué es Menna?',
    content: [
      { type: 'p', text: 'Menna es una plataforma digital de referencia médica en salud hormonal femenina que facilita el acceso a especialistas capacitados en menopausia y bienestar hormonal.' },
      { type: 'p', text: 'A través de Menna puedes recibir orientación, seguimiento y ser canalizada con profesionales que pueden acompañarte según la etapa que estés viviendo, de forma clara, confiable y segura.' },
    ],
  },
  {
    q: '¿Qué tipo de tratamientos se utilizan?',
    content: [
      { type: 'p', text: 'Trabajamos con tratamientos personalizados basados en evidencia científica y en las necesidades específicas de cada mujer.' },
      { type: 'p', text: 'Dependiendo de tu caso, las profesionales pueden recomendar:' },
      { type: 'list', items: [
        'Terapia hormonal (cuando está indicada)',
        'Tratamientos no hormonales',
        'Suplementación',
        'Cambios en estilo de vida',
      ]},
      { type: 'p', text: 'Nuestro objetivo es encontrar la mejor opción para ti, de forma segura, informada y acompañada.' },
    ],
  },
  {
    q: '¿La menopausia tiene tratamiento?',
    content: [
      { type: 'p', text: 'Sí. La menopausia es un proceso hormonal natural y existen tratamientos médicos seguros y efectivos para controlar los síntomas. Cada mujer es diferente, por eso en Menna creamos planes de tratamiento personalizados.' },
    ],
  },
  {
    q: '¿La terapia hormonal es segura?',
    content: [
      { type: 'p', text: 'La terapia hormonal, cuando es indicada por un especialista y se personaliza según tu historial médico, es considerada segura y efectiva por las principales organizaciones médicas internacionales. En tu consulta evaluaremos si es la opción adecuada para ti.' },
    ],
  },
  {
    q: '¿Necesito estudios previos?',
    content: [
      { type: 'p', text: 'No necesitas estudios previos para tu primera consulta. Durante la consulta, la doctora evaluará tus síntomas y tu historial médico, y determinará si se requieren estudios complementarios.' },
    ],
  },
  {
    q: '¿Las consultas en línea funcionan?',
    content: [
      { type: 'p', text: 'Absolutamente. Las consultas en línea permiten una evaluación médica completa, revisión de síntomas y creación de un plan de tratamiento personalizado. Son igual de efectivas que una consulta presencial para el manejo de la menopausia.' },
    ],
  },
]

function FAQItem({ question, content, open, onToggle }) {
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={styles.chevron}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles.answerWrapper} aria-hidden={!open}>
        <div className={styles.answer}>
          <div className={styles.answerInner}>
            {content.map((block, i) => {
              if (block.type === 'p') {
                return <p key={i}>{block.text}</p>
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className={styles.answerList}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    const isOpening = openIndex !== i
    setOpenIndex(isOpening ? i : null)
    if (isOpening) events.faqExpanded(faqs[i].q)
  }

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Preguntas{' '}
            <em className={styles.headingEmphasis}>frecuentes</em>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              question={faq.q}
              content={faq.content}
              open={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
