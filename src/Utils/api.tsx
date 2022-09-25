import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
})

export default function api(path: string, query: any) {
  const request = octokit.request(`GET ${path}`, query)

  return request
}
