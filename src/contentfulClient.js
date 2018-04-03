// import createClient directly
import { createClient } from 'contentful'

const client = createClient({
  space: 'vqs4qbu67j9e',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'b1d7121c243cd049a6d265d8957a10a87c8e281a5873339efce680e3e538cefd'
})

export default client;
