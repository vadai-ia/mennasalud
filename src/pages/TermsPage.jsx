import { useEffect } from 'react'
import styles from './TermsPage.module.css'

const sections = [
  {
    title: '1. Naturaleza del servicio',
    blocks: [
      { type: 'p', text: 'MENNA SALUD LTD ("MENNA") es una plataforma digital de intermediación que conecta a usuarias con profesionales de la salud independientes.' },
      { type: 'p', text: 'MENNA:' },
      { type: 'list', items: ['No es hospital', 'No es clínica', 'No presta servicios médicos'] },
      { type: 'p', text: 'Los servicios médicos son prestados exclusivamente por profesionales independientes.' },
    ],
  },
  {
    title: '2. Aceptación',
    blocks: [
      { type: 'p', text: 'Al utilizar la plataforma, la usuaria:' },
      { type: 'list', items: ['Acepta estos términos', 'Reconoce la naturaleza del servicio', 'Declara haber leído el consentimiento informado'] },
    ],
  },
  {
    title: '3. Servicios médicos',
    blocks: [
      { type: 'p', text: 'Los servicios:' },
      { type: 'list', items: ['Son brindados directamente por la profesional', 'Se basan en la información proporcionada por la usuaria'] },
      { type: 'p', text: 'MENNA:' },
      { type: 'list', items: ['No controla decisiones médicas', 'No valida diagnósticos', 'No es responsable por resultados clínicos'] },
    ],
  },
  {
    title: '4. Limitaciones del servicio',
    blocks: [
      { type: 'p', text: 'La usuaria reconoce que:' },
      { type: 'list', items: ['Las consultas son virtuales', 'Existen limitaciones diagnósticas', 'No sustituyen atención presencial en todos los casos'] },
      { type: 'p', text: 'En caso de emergencia, deberá acudir a un hospital.' },
    ],
  },
  {
    title: '5. Responsabilidad',
    blocks: [
      { type: 'p', text: 'La usuaria acepta que:' },
      { type: 'list', items: ['La responsabilidad médica recae en la profesional', 'MENNA no será responsable por daños derivados de consultas'] },
    ],
  },
  {
    title: '6. Pagos y cancelaciones',
    blocks: [
      { type: 'list', items: ['El pago se realiza previo a la consulta', 'Cancelaciones deben hacerse con mínimo 24 horas', 'No shows no son reembolsables', 'MENNA podrá evaluar reembolsos a discreción'] },
    ],
  },
  {
    title: '7. Conducta de la usuaria',
    blocks: [
      { type: 'p', text: 'La usuaria se compromete a:' },
      { type: 'list', items: ['Proporcionar información veraz', 'Mantener respeto durante la consulta'] },
      { type: 'p', text: 'MENNA podrá suspender cuentas por mal uso.' },
    ],
  },
  {
    title: '8. Propiedad intelectual',
    blocks: [
      { type: 'p', text: 'Todo el contenido de MENNA:' },
      { type: 'list', items: ['Marca', 'Diseño', 'Información'] },
      { type: 'p', text: 'Es propiedad de MENNA y no puede ser reproducido.' },
    ],
  },
  {
    title: '9. Modificaciones',
    blocks: [
      { type: 'p', text: 'MENNA podrá modificar estos términos en cualquier momento.' },
    ],
  },
  {
    title: '10. Jurisdicción',
    blocks: [
      { type: 'p', text: 'Regido por leyes de Inglaterra y Gales, con posibilidad de ejecución en México.' },
    ],
  },
]

function renderBlocks(blocks) {
  return blocks.map((block, i) => {
    if (block.type === 'p') {
      return <p key={i} className={styles.body}>{block.text}</p>
    }
    if (block.type === 'list') {
      return (
        <ul key={i} className={styles.list}>
          {block.items.map((item) => (
            <li key={item} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      )
    }
    return null
  })
}

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero header */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Términos y condiciones</h1>
          <p className={styles.heroDate}>Fecha de la última revisión: 6/4/2026</p>
        </div>
      </section>

      {/* Terms content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.reading}>
            {sections.map((section) => (
              <div key={section.title} className={styles.termSection}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {renderBlocks(section.blocks)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informed consent */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.reading}>
            <div className={styles.consentDivider} />
            <h2 className={styles.consentTitle}>Consentimiento informado</h2>
            <p className={styles.consentSubtitle}>Consentimiento para consulta médica en línea</p>

            <p className={styles.body}>La usuaria declara que:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Entiende que la consulta es virtual</li>
              <li className={styles.listItem}>Reconoce que pueden existir limitaciones diagnósticas</li>
              <li className={styles.listItem}>Acepta que la información proporcionada es su responsabilidad</li>
              <li className={styles.listItem}>Entiende que MENNA no presta servicios médicos</li>
              <li className={styles.listItem}>Reconoce que la profesional es responsable de la consulta</li>
            </ul>

            <p className={styles.bodyFinal}>Al continuar, la usuaria acepta este consentimiento.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
