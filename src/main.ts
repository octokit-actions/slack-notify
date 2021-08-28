import * as core from '@actions/core'
import {postSlackMessage} from './slack'
import {context} from '@actions/github'
import {fetchContent} from './github'
import {createMessage} from './message'
import {IncomingWebhookSendArguments} from '@slack/webhook/dist/IncomingWebhook'
import {filterByKeys, splitComma} from './util'
import {error} from '@actions/core'

async function run(): Promise<void> {
  try {
    const incomingWebhookUrl = core.getInput('incoming-webhook-url', {
      required: true
    })
    const repoToken = core.getInput('repo-token', {required: false})
    const messageTemplatePath:
      | string
      | undefined = core.getInput('message-template', {required: false})
    const message: string | undefined = core.getInput('message', {
      required: false
    })
    const environmentValue = filterByKeys(
      process.env,
      splitComma(core.getInput('env-vars-for-template', {required: false}))
    )

    let slackRequestBody: string | IncomingWebhookSendArguments | undefined
    if (messageTemplatePath) {
      if (!repoToken) {
        slackRequestBody = createMessage(
          await fetchContent(
            repoToken,
            messageTemplatePath,
            context.repo.repo,
            context.repo.owner,
            context.ref
          ),
          environmentValue
        )
      }
    } else if (message) {
      slackRequestBody = message
    } else {
      core.error('message or message-template required')
    }

    if (slackRequestBody) {
      await postSlackMessage(incomingWebhookUrl, slackRequestBody)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
  .then()
  .catch(error => {
    core.error(error)
  })
