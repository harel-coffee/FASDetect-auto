<template>
  <q-page class="flex flex-center">

        <q-carousel
          v-model="slide"
          swipeable
          transition-prev="slide-down"
          transition-next="slide-up"
          animated
          padding
          :vertical="vertical"
          arrows
          ref="carousel"
          :navigation="navigation"
          :navigation-position="navPos"
          class="bg-primary text-white rounded-borders"
          v-on:keydown.enter="gotoNextSlide"
          v-on:wheel.down="gotoNextSlide"

        >
          <q-carousel-slide name="style" class="column no-wrap flex-center"> <!--- v-for --->
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">
              <h3> Kopfumfang Geburt </h3>

              <q-input dark outlined bottom-slots v-model="text_q1" label="Kopfumfang" color="grey-1" autofocus>
                <template v-slot:append>
                  cm
                </template>
              </q-input>

            </div>
          </q-carousel-slide>

          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
            <h3> Kopfumfang 1. Jahr </h3>

            <q-input dark outlined bottom-slots v-model="text_q2" label="Kopfumfang" color="grey-1">
              <template v-slot:append>
                cm
              </template>
            </q-input>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">
            <h3> Größe 1. Jahr </h3>

            <q-input dark outlined bottom-slots v-model="text_q3" label="Kopfumfang" color="grey-1">
              <template v-slot:append>
                cm
              </template>
            </q-input>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
            <h3> Größe jetzt </h3>

            <q-input dark outlined bottom-slots v-model="text_q4" label="Kopfumfang" color="grey-1">
              <template v-slot:append>
                cm
              </template>
            </q-input>
            </div>

<!--            <q-btn unelevated color="secondary" label="Weiter" @click="submitQuestionnaire"/>-->

          </q-carousel-slide>

          <q-carousel-slide name="form" class="column no-wrap flex-center">

            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              autocomplete="off"
            >
              <q-input
                dark
                filled
                v-model="name"
                label="Frage X *"
                hint="Hinweis zur Eingabe"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Bitte Wert eingeben']"
              />

              <q-input
                dark
                filled
                type="number"
                v-model="age"
                label="Alter *"
                lazy-rules
                :rules="[
          val => val !== null && val !== '' || 'Bitte Alter angeben',
          val => val > 0 && val < 100 || 'Bitte Wert prüfen'
        ]"
              />

              <q-toggle v-model="accept" color="accent" label="Ich habe alle Angaben geprüft" />

              <div>
                <q-btn label="Submit" color="accent" type="submit" />
                <q-btn label="Reset" type="reset" color="accent" outline class="q-ml-sm" />
              </div>
            </q-form>

          </q-carousel-slide>

        </q-carousel>
  </q-page>
</template>

<style lang="sass">
.q-carousel
  width: 50%
</style>

<script>
export default {
  name: 'Questionnaire',
  data () {
    return {
      vertical: true,
      navigation: true,
      navPos: 'right',
      slide: 'style',
      text_q1: '',
      text_q2: '',
      text_q3: '',
      text_q4: '',
      name: null,
      age: null,
      accept: false
    }
  },

  methods: {

    gotoNextSlide () {
      this.$refs.carousel.next()
      console.log('GOTO NEXT!!!!!')
    },

    gotoPreviousSlide () {
      this.$refs.carousel.previous()
      console.log('PREEEEEEEEVIOUS')
    },

    notify (quasar, error) {
      console.error(error)
      let errorMessage = 'Keine Verbindung zum Backend'
      let icon = 'report_problem'
      if (error.response.status === 401) {
        errorMessage = 'Authentifiyierung fehlgeschlagen'
        icon = 'lock'
      }
      quasar.notify({

        color: 'negative',
        position: 'bottom',
        message: errorMessage,
        icon: icon

      })
    },

    submitQuestionnaire () {
      const payload = { text1: this.text_q1, text2: this.text_q2 }
      this.$axios.post('http://localhost:8080/route', payload)
        .then((response) => {
          if (response.status === 200) {
            this.$q.sessionStorage.set('risk', response.data.risk)
          }
        })
        .catch((error) => { this.notify(this.$q, error) })

      // TODO: remove the following line as soon as backend is available
      this.$q.sessionStorage.set('risk', 'low')
      this.$router.replace('result')
    },

    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Bitte Angaben prüfen und bestätigen'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Eingaben abgesendet'
        })
        this.submitQuestionnaire()
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }

  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
}
</script>
