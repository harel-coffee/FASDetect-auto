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
          v-on:wheel="scrollSlides"

        >

          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
<!--            <q-btn v-if="active" size="xl" icon="home" color="yellow" flat round dense @click="onClick" />-->
            <q-btn v-if="active" size="xs" :icon="btnProps.icon" flat round dense @click="onClick" />
<!--            <q-btn v-else size="xs" :icon="btnProps.icon" color="grey-5" flat round dense @click="onClick" />-->
            <q-btn v-else size="3px" :icon="btnProps.icon" color="grey-5" flat round dense @click="onClick" />
          </template>

          <q-carousel-slide name="0" class="column no-wrap flex-center"> <!--- v-for --->
            <div class="absolute-top custom-caption">
              <div class="text-h2">{{$t('questionnaire')}}</div>
            </div>
            <q-icon name="fas fa-tape" size="56px" class="q-mt-xl"/>
            <div class="q-mt-md text-center">
              <h3>{{$t('gku')}}</h3>
              <q-input dark outlined bottom-slots v-model="features[0]" :label="$t('gku_label')" color="grey-1" autofocus>
<!--                <template v-slot:append>-->
<!--                  z-->
<!--                </template>-->
              </q-input>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="1" class="column no-wrap flex-center">
            <q-icon name="fas fa-ruler" size="56px" />
            <div class="q-mt-md text-center">
            <h3>{{$t('gl')}}</h3>

            <q-input dark outlined bottom-slots v-model="features[1]" :label="$t('gl_label')" color="grey-1">
<!--              <template v-slot:append>-->
<!--                cm-->
<!--              </template>-->
            </q-input>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="2" class="column no-wrap flex-center">
            <q-icon name="far fa-lightbulb" size="56px" />
            <div class="q-mt-md text-center">
              <h3> {{$t('iq')}} </h3>
            </div>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              autocomplete="off"
            >
              <div class="q-pa-md">
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="radio"
                  v-model="features[2]"
                  dark
                  @input="gotoNextSlide"
                />
              </div>
            </q-form>
          </q-carousel-slide>

          <q-carousel-slide name="3" class="column no-wrap flex-center">
            <!--            <q-icon name="layers" size="56px" />-->
            <q-icon name="far fa-meh-blank" size="56px" />
            <div class="row items-center ">
              <h3 class="q-pr-md">{{$t('dist')}}</h3>
            </div>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              autocomplete="off"
            >
              <div class="q-pa-md">
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="radio"
                  v-model="features[3]"
                  dark
                  @input="gotoNextSlide"
                />
              </div>
            </q-form>
          </q-carousel-slide>

          <q-carousel-slide name="4" class="column no-wrap flex-center">
            <q-icon name="fas fa-brain" size="56px" />
            <div class="row items-center ">
              <h3 class="q-pr-md">{{$t('memory')}}</h3>
            </div>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              autocomplete="off"
            >
              <div class="q-pa-md">
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="radio"
                  v-model="features[4]"
                  dark
                  @input="gotoNextSlide"
                />
              </div>
            </q-form>
          </q-carousel-slide>

          <q-carousel-slide name="5" class="column no-wrap flex-center">
<!--            <q-icon name="layers" size="56px" />-->
            <q-icon name="fas fa-bed" size="56px" />
            <div class="row items-center ">
            <h3 class="q-pr-md">{{$t('sleep')}}</h3>
<!--              <q-btn round icon="far fa-question-circle" size="xs" @click="info = true"></q-btn>-->
            </div>
<!--            <q-dialog v-model="info">-->
<!--              <q-card>-->
<!--                <q-card-section>-->
<!--                  <div class="text-h6">Dismorphiezeichen</div>-->
<!--                </q-card-section>-->
<!--                <q-separator />-->
<!--                  <q-img src="../assets/philtrum_guide.jpg"/>-->
<!--                <q-separator />-->
<!--                <q-card-actions align="right">-->
<!--                  &lt;!&ndash;            <q-btn flat label="Decline" color="primary" v-close-popup />&ndash;&gt;-->
<!--                  <q-btn flat label="Schließen" color="primary" v-close-popup />-->
<!--                </q-card-actions>-->
<!--              </q-card>-->
<!--            </q-dialog>-->
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              autocomplete="off"
            >
<!--              <q-input-->
<!--                dark-->
<!--                filled-->
<!--                v-model="name"-->
<!--                label="Frage X *"-->
<!--                hint="Hinweis zur Eingabe"-->
<!--                lazy-rules-->
<!--                :rules="[ val => val && val.length > 0 || 'Bitte Wert eingeben']"-->
<!--              />-->
<!--              <q-input-->
<!--                dark-->
<!--                filled-->
<!--                type="number"-->
<!--                v-model="age"-->
<!--                label="Alter *"-->
<!--                lazy-rules-->
<!--                :rules="[-->
<!--          val => val !== null && val !== '' || 'Bitte Alter angeben',-->
<!--          val => val > 0 && val < 100 || 'Bitte Wert prüfen'-->
<!--        ]"-->
<!--              />-->
              <div class="q-pa-md">
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="radio"
                  v-model="features[5]"
                  dark
                  @input="gotoNextSlide"
                />
              </div>
<!--              <q-toggle v-model="accept" color="accent" label="Ich habe alle Angaben geprüft" />-->
            </q-form>
            <div class="row justify-center q-pt-lg" >
              <!--                <q-btn label="Zurücksetzen" type="reset" color="accent" outline  />-->
              <!--                <q-btn label="Weiter" color="accent" type="submit" class="q-ml-sm" />-->
              <q-btn :label="$t('next_btn')" rounded color="accent" @click="submitQuestionnaire" />
            </div>
          </q-carousel-slide>

<!--          <q-carousel-slide name="q8" class="column no-wrap flex-center">-->
<!--            <q-icon name="far fa-calendar-alt" size="56px" />-->
<!--            <div class="q-mt-md text-center">-->
<!--              <h3> SSW Entbindung </h3>-->

<!--              <q-input dark outlined bottom-slots v-model="text_q8" label="SSW Entbindung" color="grey-1">-->
<!--                <template v-slot:append>-->
<!--                  SSW-->
<!--                </template>-->
<!--              </q-input>-->
<!--            </div>-->
<!--&lt;!&ndash;            <div class="row justify-center" >&ndash;&gt;-->
<!--&lt;!&ndash;              &lt;!&ndash;                <q-btn label="Zurücksetzen" type="reset" color="accent" outline  />&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;              &lt;!&ndash;                <q-btn label="Weiter" color="accent" type="submit" class="q-ml-sm" />&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;              <q-btn label="Weiter" color="accent" type="submit" />&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </q-carousel-slide>-->

        </q-carousel>
  </q-page>
</template>

<style lang="sass" scoped>
.q-carousel
  width: 80%
  height: 80vh

.rounded-borders
  border-radius: 32px

.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

</style>

<script>
export default {
  name: 'Questionnaire',
  data () {
    return {
      vertical: true,
      navigation: true,
      navPos: 'right',
      slide: '0',
      features: ['', '', '', '', '', ''],
      accept: true,
      info: false,
      options: [
        { label: this.$t('yes'), value: 1, color: 'accent' },
        { label: this.$t('no'), value: 0, color: 'accent' }
      ]
    }
  },

  methods: {

    scrollSlides (e) {
      if (e.wheelDelta > 0) {
        this.gotoPreviousSlide()
      } else if (e.wheelDelta < 0) {
        this.gotoNextSlide()
      } else {
        // this is for Firefox, which does not support wheelDelta
        // TODO fix scrolling for Firefox
        this.gotoNextSlide()
      }
    },

    gotoNextSlide () {
      this.$refs.carousel.next()
    },

    gotoPreviousSlide () {
      this.$refs.carousel.previous()
    },

    notify (quasar, error) {
      console.error(error)
      quasar.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Backend ' + error,
        icon: 'report_problem'
      })
    },

    submitQuestionnaire () {
      for (let i = 0; i < this.features.length; i++) {
        if (this.features[i] === '') {
          this.features[i] = 'nan'
        }
      }

      const data = {
        features: this.features
      }
      this.$axios.post('http://127.0.0.1:5000/predict', data, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
      // this.$axios({
      //   method: 'get',
      //   url: 'http://localhost:5000/predict',
      //   data: {
      //     features: this.features
      //   }
      // })
        .then((response) => {
          if (response.status === 200) {
            this.$q.sessionStorage.set('prediction', response.data)
            this.$router.replace('result')
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Eingaben abgesendet ' + response.data.predict_proba
            })
          }
        })
        .catch((error) => { this.notify(this.$q, error) })

      // TODO: remove the following line as soon as backend is available
      // this.$q.sessionStorage.set('risk', 'medium')
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
