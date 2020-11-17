import { callLoginApi } from './api/call-login'

export async function login() {
	try {
    const responseApi = await callLoginApi({ email: this.email, password: this.password })

    if (responseApi.status == 202) {
      this.$toast.success('Successfully authenticated')
      this.$router.push('http://google.com.br')
    } else {
      this.$toast.error('Something is wrong with your email or password')
    }
  } catch (error) {
    return Promise.reject(`[scripts|login] ${ error }`)
  }
}