<template>

  <div class="bg-image">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fas fa-globe"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >

          <q-menu :offset="[20, 10]" transition-show="flip-up" transition-hide="jump-up">
            <div class="row no-wrap q-pa-md">
<!--              <div class="column">-->
                <div class="text-h6">{{$t('language')}}</div>
<!--                <q-toggle v-model="mobileData" label="Algorithm 1" />-->
<!--                <q-toggle v-model="bluetooth" label="Algorithm 2" />-->
<!--              </div>-->

              <q-separator vertical inset class="q-mx-lg" />

              <div class="row items-center">
                <q-select
                  v-model="lang"
                  :options="langOptions"
                  dense
                  borderless
                  emit-value
                  map-options
                  options-dense
                  style="min-width: 150px"
                />

              </div>
            </div>
          </q-menu>

        </q-btn>
      <router-link to="/" tag="div">
        <q-toolbar-title>
          <b>FASDetect</b>
        </q-toolbar-title>
      </router-link>
      </q-toolbar>
    </q-header>
    <!---

<q-drawer
v-model="leftDrawerOpen"
show-if-above
bordered
content-class="bg-grey-1"
>
<q-list>
  <q-item-label
    header
    class="text-grey-8"
  >
    Essential Links
  </q-item-label>
  <EssentialLink
    v-for="link in essentialLinks"
    :key="link.title"
    v-bind="link"
  />
</q-list> -
    </q-drawer>
    -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<style lang="sass">

.router-link-active
  margin: auto

.q-header
  //background-image: linear-gradient(to left, #036cab, #013250)
  background-image: linear-gradient(to right, $primary, #1c6495)

.bg-image
  background-image: url(/cool-bg2-light-2.png)
  //background-image: url(/cool-bg3-light.png)
  background-size: cover

</style>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {
      leftDrawerOpen: false,
      // essentialLinks: linksData
      lang: this.$i18n.locale.split('-')[0],
      langOptions: [
        { value: 'en', label: 'English' },
        { value: 'de', label: 'Deutsch' }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
}

</script>
