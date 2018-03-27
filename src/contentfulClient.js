const contentful = require('contentful')

const client = contentful.createClient({
  accessToken: 'b1d7121c243cd049a6d265d8957a10a87c8e281a5873339efce680e3e538cefd',
  space: 'vqs4qbu67j9e'
});

export default client;
