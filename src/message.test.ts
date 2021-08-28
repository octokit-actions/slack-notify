import {createMessage} from './message'
import fs from 'fs'

describe('message test', () => {
  test('message', async () => {
    const strings = fs.readFileSync(
      './src/__template__/slack.template.json',
      'utf-8'
    )
    const message = createMessage(strings, {message: 'good'})
    expect(message).toEqual({text: 'good'})
  })
})
