export type ContactEmail = {
  name: string
  email: string
  subject: string
  message: string
}

type WorkerResponse = {
  success?: boolean
  error?: string
}

export async function sendContactEmail(data: ContactEmail): Promise<WorkerResponse> {
  const res = await fetch('https://portfolio-email-sender.palanas-jeffrey.workers.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result: WorkerResponse = await res.json()

  if (!res.ok || result.success === false) {
    throw new Error(result.error ?? 'Email worker request failed')
  }

  return result
}
