import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

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
 

    try {
      const response = await axios.get('https://api.telegra.ph/createPage', {
        params: {
          access_token: values.token,
          title: values.title,
          author_name: values.author_name,
          content:`[{"tag":"p","children":["${values.descr}"]}]`,
          return_content: false,
        },

      })
      return response.data
    } catch (e) {
      throw e
    }
  }
  static async getPageList(token) {
    try {
      const response = await axios.get(
        'https://api.telegra.ph/getPageList',
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
  static async newUserIngo(newUserInfoToken) {
    try {
      const response = await axios.get(
        'https://api.telegra.ph/editAccountInfo',
        {
          params: {
            access_token: newUserInfoToken.token,
            short_name: newUserInfoToken.short_name,
            author_name: newUserInfoToken.author_name,
            author_url: newUserInfoToken.author_url,
          },
        }
      )
      return response.data
    } catch (e) {
      throw e
    }
  }
}
