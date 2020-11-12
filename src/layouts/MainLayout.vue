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
        />
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

.bg-image
  background-image: url(../assets/bg-network.jpg)
  background-size: auto
  background-repeat: no-repeat
  background-attachment: fixed

</style>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {
      leftDrawerOpen: false
      // essentialLinks: linksData
    }
  }
}
</script>
