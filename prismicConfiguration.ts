// -- Prismic Repo Name
export const repoName = 'rodrigofernandes'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

type LinkProps = {
  type: string
  uid: string
}
// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: LinkProps) => {
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`
  }
  if (doc.type === 'portfolio_item') {
    return `/portfolio/${doc.uid}`
  }
  return '/'
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router = {
  routes: [
    {
      type: 'blog_post',
      path: '/blog/:uid'
    },
    {
      type: 'portfolio_item',
      path: '/portfolio/:uid'
    }
  ]
}
