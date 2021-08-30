import {IncomingWebhook, IncomingWebhookResult} from '@slack/webhook'
import {IncomingWebhookSendArguments} from '@slack/webhook/dist/IncomingWebhook'

export const postSlackMessage = async (
  webhookUrl: string,
  slackRequestBody: string | IncomingWebhookSendArguments
): Promise<IncomingWebhookResult> => {
  const webhook = new IncomingWebhook(webhookUrl)
  return await webhook.send(slackRequestBody)
}
