import { type FormEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { contact } from '../data/portfolioData'

import { sendContactEmail } from '../services/emailService'

type ContactProps = {
  submitted: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function Contact({ submitted, onSubmit }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) return

    setIsSending(true)
    setErrorMessage('')

    try {
      const formData = new FormData(formRef.current)
      const name = formData.get('from_name')
      const email = formData.get('from_email')
      const message = formData.get('message')

      if (
        typeof name !== 'string' ||
        typeof email !== 'string' ||
        typeof message !== 'string'
      ) {
        throw new Error('Contact form data is invalid')
      }

      await sendContactEmail({
        name,
        email,
        subject: 'Portfolio contact form message',
        message,
      })

      formRef.current.reset()
      onSubmit(event)
    } catch {
      setErrorMessage('Something went wrong while sending the message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="section contact-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-copy">
        <span>{contact.eyebrow}</span>
        <h2>{contact.title}</h2>
        <a className="button primary" href={`mailto:${contact.email}`}>
          {contact.button}
        </a>
      </div>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <label>
          {contact.form.name}
          <input type="text" name="from_name" placeholder={contact.form.placeholders.name} required />
        </label>
        <label>
          {contact.form.email}
          <input type="email" name="from_email" placeholder={contact.form.placeholders.email} required />
        </label>
        <label>
          {contact.form.message}
          <textarea name="message" placeholder={contact.form.placeholders.message} rows={5} required />
        </label>

        <button type="submit" className="button primary" disabled={isSending}>
          {isSending ? 'Sending...' : contact.form.submit}
        </button>

        {submitted && (
          <motion.p
            className="form-success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {contact.form.success}
          </motion.p>
        )}

        {errorMessage && <p className="form-error">{errorMessage}</p>}
      </form>
    </motion.section>
  )
}
