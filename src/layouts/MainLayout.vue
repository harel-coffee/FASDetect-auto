<template>

  <div class="bg-image">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fas fa-cog"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >

          <q-menu :offset="[20, 10]" transition-show="flip-up" transition-hide="jump-up">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

<!--                <q-btn-->
<!--                  color="primary"-->
<!--                  label="Logout"-->
<!--                  push-->
<!--                  size="sm"-->
<!--                  v-close-popup-->
<!--                />-->
                <q-btn-dropdown
                  split
                  class="glossy"
                  color="primary"
                  label="Deutsch"
                  size="sm"
                  @click="onMainClick"
                >
                  <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section avatar>
                        <q-avatar icon="folder" color="primary" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>English</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-icon name="info" color="amber" />
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section avatar>
                        <q-avatar icon="assignment" color="secondary" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Deutsch</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-icon name="info" color="amber" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>

              </div>
            </div>
          </q-menu>

        </q-btn>
      <router-link to="/" tag="div" >
        <q-toolbar-title >
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
  margin-left: 43%

.q-header
  //background-image: linear-gradient(to left, #036cab, #013250)
  background-image: linear-gradient(to right, $primary, #1c6495)

.bg-image
  //background-image: url(../assets/bg-network-schatten-75.jpg)
  background-image: url(../assets/cool-bg2.png)
  //background-image: url(/lego.jpg)

  //background-image: url(../assets/bg-network.jpg)

  // for network background
  //background-size: auto
  //background-repeat: no-repeat
  //background-attachment: fixed

  // for triangle geometric background
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
      mobileData: true,
      bluetooth: false
      // essentialLinks: linksData
    }
  }
}
</script>
