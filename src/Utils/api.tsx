import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
})

export default function api(path: string, query: any) {
  const request = octokit.request(`GET ${path}`, query)

  return request
}
