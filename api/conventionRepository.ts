import { NuxtAxiosInstance } from '@nuxtjs/axios'

const baseUrl = process.env.OUKA_API_BASE_URL

export interface IConventionRepository {
  getList(): Promise<Array<Convention>>
}

export class ConventionRepository implements ConventionRepository {
  private axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  getList(): Promise<Array<Convention>> {
    return this.axios.$get(`${baseUrl}/conventions`)
  }
}
