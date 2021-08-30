import * as Handlebars from 'handlebars'
import {IncomingWebhookSendArguments} from '@slack/webhook/dist/IncomingWebhook'

export const createMessage = (
  messageTemplate: string,
  env: {[key: string]: string}
): IncomingWebhookSendArguments => {
  const templateDelegate = Handlebars.compile(messageTemplate)
  return JSON.parse(templateDelegate(env)) as IncomingWebhookSendArguments
}
