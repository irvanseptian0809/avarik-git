import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
})

export default function api(path: string, query: any) {
  const request = octokit.request(`GET ${path}`, query)

  return request
}
