import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_API_TOKEN,
})

export default function api(path: string, query: any) {
  const request = octokit.request(`GET ${path}`, query)

  return request
}
