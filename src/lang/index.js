import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

// lang 从 store中读的
const i18n = new VueI18n({
  locale: store.getters.language,
  messages
})

export default i18n
