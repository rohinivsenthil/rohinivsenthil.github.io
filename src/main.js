import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  library.add(faGithub, faTwitter, faInstagram, faEnvelope, faLinkedin)
  Vue.component('font-awesome', FontAwesomeIcon)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;500;600;700&family=Roboto&display=swap'
  })
}
