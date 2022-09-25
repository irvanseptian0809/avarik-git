import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
})

export default function api(path: string, query: any) {
  const request = octokit.request(`GET ${path}`, query)

  return request
}
