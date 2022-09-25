import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
})

export default function api(path: string, query: any) {
  const request = octokit.request(`GET ${path}`, query)

  return request
}
