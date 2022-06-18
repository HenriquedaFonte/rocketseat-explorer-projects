export class GithubUser {
  static search(userName) {
    const gitUser = `https://api.github.com/users/${userName}`

    return fetch(gitUser)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}