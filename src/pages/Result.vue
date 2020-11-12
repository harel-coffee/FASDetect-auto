<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
        <div class="row">
        <div class="col-11">
          <div class="text-h6">ERGEBNIS</div>
          <div class="text-subtitle2">Es besteht ein {{ risk_level }} RISIKO für FASD.</div>
        </div>
        <div class="col-1">
          <q-icon :color=signal_color :name="risk_icon" size="xl"></q-icon>
        </div>
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>

      </q-card-section>

      <div class="q-gutter-sm">
        <q-checkbox disable v-model="growth" label="Wachstum" />
      </div>
      <q-separator inset/>

      <q-card-actions align="between">
        <q-btn outline color="primary">Einführung</q-btn>
        <q-btn unelevated :disabled="!checkbox" color="primary" icon-right="fas fa-exclamation-triangle" @click="gotoQuestionnaire">Starten</q-btn>
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<style lang="sass">

.q-card
  width: 50%

</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      risk_level: 'UNBEKANNTES',
      signal_color: 'white',
      risk_icon: '',
      growth: true
    }
  },

  mounted () {
    const risk = this.$q.sessionStorage.getItem('risk')

    switch (risk) {
      case 'low':
        this.risk_level = 'GERINGES'
        this.signal_color = 'green'
        this.risk_icon = 'fas fa-check'
        break
      case 'medium':
        this.risk_level = 'ERHÖHTES'
        this.signal_color = 'yellow'
        this.risk_icon = 'fas fa-exclamation-triangle'
        break
      case 'high':
        this.risk_level = 'HOHES'
        this.signal_color = 'red'
        this.risk_icon = 'fas fa-radiation'
    }
  },

  methods: {

    gotoQuestionnaire () {
      this.$router.push('q')
    }

  }

}
</script>
