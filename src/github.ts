import {getOctokit} from '@actions/github'

export const fetchContent = async (
  token: string,
  repoPath: string,
  repositoryOwner: string,
  repositoryName: string,
  ref: string
): Promise<string> => {
  const client = getOctokit(token)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await client.repos.getContent({
    owner: repositoryOwner,
    repo: repositoryName,
    path: repoPath,
    ref: ref
  })

  return Buffer.from(response.data.content, response.data.encoding).toString()
}
