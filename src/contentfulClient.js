import { createClient } from 'contentful'

function initClient () {
  var client = createClient({
    space: 'vqs4qbu67j9e',
    accessToken: 'b1d7121c243cd049a6d265d8957a10a87c8e281a5873339efce680e3e538cefd',
    host: 'https://cdn.contentful.com'
  })
  return client
}

export { initClient }
