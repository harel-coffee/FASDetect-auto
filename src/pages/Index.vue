<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
          <div class="text-h6">FASDetect</div>
          <div class="text-subtitle2">Application for Screening Fetal Alcohol Syndrome Spectrum Disorder</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>

        Diese Applikation dient dem Screening von FASD. Sie ersetzt keine Diagnose. <br>
        Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, <br>
        tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. Hi omnes lingua, institutis, <br>
        legibus inter se differunt. Gallos ab Aquitanis Garunna flumen, a Belgis Matrona et Sequana6 dividit. <br>
        Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate provinciae longissime absunt, <br>
        minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent, important, <br>
        proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt. <br>
        Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, <br>
        cum aut suis finibus eos prohibent aut ipsi in eorum finibus bellum gerunt. Eorum una pars, <br>
        quam Gallos obtinere dictum est, initium capit a flumine Rhodano, continetur Garumna flumine,<br>
        Oceano, finibus Belgarum, attingit etiam ab Sequanis11 et Helvetiis flumen Rhenum, <br>
        vergit ad septentriones. Belgae ab extremis Galliae finibus oriuntur, <br>
        pertinent ad inferiorem partem fluminis Rheni, spectant in septentrionem et orientem solem.<br>
        Aquitania a Garunna flumine ad Pyrenaeos montes et eam partem Oceani quae est ad Hispaniam pertinet; <br>
        spectat inter occasum solis et septentriones.

      </q-card-section>

      <div class="q-gutter-sm">
        <q-checkbox v-model="checkbox" label="Ich habe obige Informationen verstanden und akzeptiere..." />
      </div>
      <q-separator inset/>

      <q-card-actions align="between">
        <q-btn outline color="primary" @click="info = true">Weitere Informationen</q-btn>
        <q-btn unelevated :disabled="!checkbox" color="primary" icon-right="fas fa-chevron-right" @click="gotoQuestionnaire">Starten</q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card>
          <q-card-section>
            <div class="text-h6">Weiterführende Informationen</div>
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

<style lang="sass">

.q-card
  width: 50%

</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      checkbox: false,
      info: false
    }
  },

  methods: {

    gotoQuestionnaire () {
      this.$router.push('q')
    }

  }

}
</script>
