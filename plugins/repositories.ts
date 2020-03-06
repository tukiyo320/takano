import { Plugin } from '@nuxt/types'
import { ConventionRepository, IConventionRepository } from '~/api/conventionRepository'

export interface Repositories {
  conventions: IConventionRepository
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $repositories: Repositories
  }
}

const plugin: Plugin = (context, inject) => {
  const repositories = {
    conventions: new ConventionRepository(context.$axios)
  }

  inject('repositories', repositories)
}

export default plugin
