<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section class="text-center">
        <div class="row">
        <div class="col-11">
<!--          <div class="text-h4">ERGEBNIS</div>-->
          <div class="text-h3">ERGEBNIS</div>

<!--          <div class="text-h6">Nach dem Screening besteht ein {{ risk_level }} RISIKO, dass der Patient an FASD leidet.</div>-->
        </div>
<!--        <div class="col-1">-->
<!--          <q-icon :color=signal_color :name="risk_icon" size="xl" class="signal"></q-icon>-->
<!--        </div>-->
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-xl q-pl-lg">

        <div class="text-bold">Nach dem Screening besteht ein <u>{{ risk_level }} RISIKO</u>, dass der Patient an FASD leidet.<p/></div>

        <div class="row">

          <div class="col-9 q-pl-lg">
        Es bestehen Auffälligkeiten in folgenden Bereichen: <p/>

          <div class="q-gutter-sm q-pl-md">
            <q-checkbox disable v-model="growth" label="Wachstum" />
    <!--        <q-checkbox disable v-model="face" label="Faciale Dysmorphie" />-->
    <!--        <q-checkbox disable v-model="cns" label="Zentrales Nervensystem" />-->
    <!--        <q-checkbox disable v-model="alcohol" label="Potentielle intrauterine Alkoholexposition" />-->
          </div>
          <div class="q-gutter-sm q-pl-md">
            <q-checkbox v-model="face" @input="click(face)" disable label="Faciale Dysmorphie" />
          </div>
          <div class="q-gutter-sm q-pl-md">
            <q-checkbox disable v-model="cns" label="Zentrales Nervensystem" />
          </div>
          <div class="q-gutter-sm q-pl-md">
            <q-checkbox disable v-model="alcohol" label="Potentielle intrauterine Alkoholexposition" />
          </div>

            <p/>
            <i>
          <u>Was bedeutet dieses Ergebnis?</u> <p/>

            Sensitivität des Tests : 94% <br/>
            Spezifizität des Tests : 78%<br/>
            Zur Prävalenz von FAS(D) gibt es nur ungenaue Schätzungen, die von bis zu 5% der Bevölkerung ausgehen.
            </i>
          </div>

          <div class="col-1">
            <q-icon :color=signal_color :name="risk_icon" size="12em" class="signal"></q-icon>
          </div>

        </div>

      </q-card-section>

      <q-separator inset/>

      <q-card-actions align="between" class="q-pa-md q-pl-xl q-pr-xl">
        <q-btn outline color="primary" @click="info = true">Details</q-btn>
        <q-btn unelevated color="primary" to="/">Beenden</q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card>
          <q-card-section>
            <div class="text-h6">Ergebnis - Detailansicht</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <!--            <q-btn flat label="Decline" color="primary" v-close-popup />-->
            <q-btn flat label="Schließen" color="primary" v-close-popup />
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

.signal
  display: inline-block
  border-radius: 600px
  box-shadow: 0px 0px 8px #888
  padding: 0.1em 0.1em

</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      risk_level: 'UNBEKANNTES',
      signal_color: 'white',
      risk_icon: '',
      // risk_traffic_light_image: '',
      growth: true,
      face: false,
      cns: false,
      alcohol: true,
      info: false
    }
  },

  mounted () {
    const risk = this.$q.sessionStorage.getItem('risk')

    switch (risk) {
      case 'low':
        this.risk_level = 'GERINGES'
        this.signal_color = 'green-7'
        this.risk_icon = 'fas fa-check-circle'
        // this.risk_traffic_light_image = 'green.png'
        break
      case 'medium':
        this.risk_level = 'ERHÖHTES'
        this.signal_color = 'yellow-7'
        this.risk_icon = 'fas fa-exclamation-circle'
        // this.risk_traffic_light_image = 'yellow.png'
        break
      case 'high':
        this.risk_level = 'HOHES'
        this.signal_color = 'red-7'
        this.risk_icon = 'fas fa-exclamation-circle'
        // this.risk_traffic_light_image = 'red.png'
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
