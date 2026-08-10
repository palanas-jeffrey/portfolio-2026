import { type FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

import { contact } from '../data/portfolioData'

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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Email service is not configured. Add EmailJS credentials to your .env file.')
      return
    }

    if (!formRef.current) return

    setIsSending(true)
    setErrorMessage('')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setIsSending(false)
      formRef.current.reset()
      onSubmit(event)
    } catch (error) {
      setIsSending(false)
      setErrorMessage('Something went wrong while sending the message. Please try again.')
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
