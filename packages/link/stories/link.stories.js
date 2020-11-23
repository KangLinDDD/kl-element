import KlLink from '../src/link.vue'

export default {
  title: 'KlLink',
  component: KlLink
}

export const Link = _ => ({
  components: { KlLink },
  template: `
    <div>
      <kl-link :disabled="true" href="http://www.baidu.com">百度</kl-link>
    </div>
  `
})