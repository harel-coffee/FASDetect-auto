<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
          <div class="text-h6">FASDetect</div>
          <div class="text-subtitle2">Application for Screening Fetal Alcohol Syndrome Spectrum Disorder</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>

        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 200px"
          >
          <!--          style="height: 200px; max-width: 300px;"-->

          <div v-for="n in 100" :key="n" class="q-pa-xs">
            Diese Applikation dient dem Screening von FASD. Sie ersetzt keine Diagnose. <br>
          </div>

        </q-scroll-area>

      </q-card-section>

      <div class="q-gutter-sm">
        <q-checkbox v-model="checkbox" label="Ich habe obige Informationen verstanden und akzeptiere..." />
      </div>
      <q-separator inset/>

      <q-card-actions align="between">
        <q-btn outline color="primary" @click="info = true">Weitere Informationen</q-btn>
<!--        <q-btn unelevated :disabled="!checkbox" color="primary" icon-right="fas fa-chevron-right" @click="gotoQuestionnaire">Starten</q-btn>-->
        <q-btn unelevated :disabled="!checkbox" color="primary" @click="gotoQuestionnaire">
          <div>
            Starten
          </div>
          <q-icon right size="0.85em" name="fas fa-chevron-right"/>
        </q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card>
          <q-card-section>
            <div class="text-h6">Weiterführende Informationen</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <p v-for="n in 15" :key="n">Dies ist ein Test asdfasd;fkasdfj;asdkjfjas;ldjfjasd;lfkj;lsajdfljaskldjf;jasdjf;askdjfkl;asjdfjaskdfj;askjdf;jaskl;dfjasj;dfkja;dsjf</p>
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

<style lang="sass">

.q-card
  width: 66%
  border-radius: 12px

</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      checkbox: false,
      info: false,
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
    }
  },

  methods: {

    gotoQuestionnaire () {
      this.$router.push('q')
    }

  }

}
</script>
