import axios from 'axios'

export default class Telegraph {
  static async singIn(token) {
    try {
      const response = await axios.get(
        'https://api.telegra.ph/getAccountInfo',
        {
          params: {
            access_token: token,
          },
        }
      )
      return response.data
    } catch (e) {
      throw e
    }
  }
  static async postPage(values) {
    console.log(values)
    try {
      const response = await axios.get('https://api.telegra.ph/createPage', {
        params: {
          access_token: values.token,
          title: values.title,
          author_name: values.author_name,
          content: [{ tag: 'p', children: ['Hello, world!'] }],
          return_content: true,
        },
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173/',
          'Content-Type': 'json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      })
      return response
    } catch (e) {
      throw e
    }
  }
}
