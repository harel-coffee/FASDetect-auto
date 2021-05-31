<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section class="text-center">
          <div class="text-h3 text-bold">ERGEBNIS</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-xl q-pl-lg text-center">

        <div class="text-bold text-h4 text-center">Es besteht ein <u>{{ risk_level }} RISIKO</u>, dass der Patient an FASD leidet.<p/></div>

        <div class="row q-pt-xl" style="height: 50vh">
            <div class="col-5">
            </div>
            <div class="col">
                  <q-img
                    :src="risk_traffic_light_image">
                  </q-img>
            </div>
            <div class="col-5">
            </div>
        </div>

      </q-card-section>

      <q-separator inset/>

      <q-card-actions align="between" class="q-pa-md q-pl-xl q-pr-xl">
        <q-btn outline rounded color="primary" @click="info = true">Details</q-btn>
        <q-btn unelevated rounded color="primary" to="/">Beenden</q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Ergebnis - Detailansicht</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <p></p>
            Sensitivität des Tests : {{Math.round((this.$q.sessionStorage.getItem('prediction').scores.fasd.recall + Number.EPSILON) * 100) / 100}}%<br/>
            Spezifität des Tests : {{Math.round((this.$q.sessionStorage.getItem('prediction').scores.adhs.recall + Number.EPSILON) * 100) / 100}}%<br/>
            Zur Prävalenz von FAS(D) gibt es nur ungenaue Schätzungen, die von bis zu 5% der Bevölkerung ausgehen.
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <!--            <q-btn flat label="Decline" color="primary" v-close-popup />-->
            <q-btn flat rounded label="Schließen" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </q-card>

  </q-page>
</template>

<style lang="sass" scoped>

.q-card
  width: 80%
  //height: 80vh
  border-radius: 32px

.q-dialog
  width: 80%
  border-radius: 32px

//.signal
//  display: inline-block
//  border-radius: 600px
//  box-shadow: 0px 0px 8px #888
//  padding: 0.1em 0.1em

</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      risk_level: 'UNBEKANNTES',
      signal_color: 'white',
      risk_icon: '',
      risk_traffic_light_image: '',
      info: false
    }
  },

  mounted () {
    const risk = this.$q.sessionStorage.getItem('prediction').predict_proba

    if (risk < 0.5) {
      this.risk_level = 'GERINGES'
      this.signal_color = 'green-7'
      this.risk_traffic_light_image = 'green.svg'
    } else if (risk >= 0.5 && risk < 0.75) {
      this.risk_level = 'ERHÖHTES'
      this.signal_color = 'yellow-7'
      this.risk_traffic_light_image = 'yellow.svg'
    } else if (risk >= 0.75) {
      this.risk_level = 'HOHES'
      this.signal_color = 'red-7'
      this.risk_traffic_light_image = 'red.svg'
    }
  },

  methods: {

    click () {
      this.face ? this.face = true : this.face = false
      this.$q.notify({

        color: 'primary',
        position: 'right',
        message: 'asdadsfas'
        // icon: icon

      })
    }

  }

}
</script>
