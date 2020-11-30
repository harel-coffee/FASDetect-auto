<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section class="text-center">
          <div class="text-h3 text-bold">FASDetect</div>
          <div class="text-h5 text-blue-grey-9">Application for Screening Fetal Alcohol Syndrome Spectrum Disorder</div>
      </q-card-section>

      <q-separator inset />

<!--      <q-card-section class="q-pa-xl">-->
      <q-card-section class="q-pt-xl">

        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 20em; max-width: 50em"
          class="q-pl-xl q-pr-xl disclaimer-scroll"
          >
          <!--          style="height: 200px; max-width: 300px;"-->

<!--          <div v-for="n in 100" :key="n" class="q-pa-xs">-->
<!--            Diese Applikation dient dem Screening von FASD. Sie ersetzt keine Diagnose. <br>-->
<!--          </div>-->

          Diese Applikation dient dem Screening von FAS(D) und soll es den behandelnden Personen erleichtern, FASD zu erkennen und eine Diagnose in die Wege zu leiten.
          Sie ersetzt keine Diagnose. Die Ergebnisse sollen vom behandelnden Arzt oder Psychologen ausgewertet werden.
          <p/>
          Wenn Sie die Applikation verwenden, bestätigen Sie, dass die Patienten oder deren Bevollmächtigte eingewilligt haben, am Screening teilzunehmen und medizinische Daten anonymisiert algorithmisch auswerten zu lassen.
          <p/>
          Jedes Testverfahren hat eine kleine Fehlerwahrscheinlichkeit, d.h. es kann zu falsch-positiven (gesunder Patient wird als betroffen erkannt) und falsch-negativen (vorliegender Fall wird nicht erkannt) Einschätzungen kommen.
          <p/>
          <p v-for="n in 15" :key="n">
          Weitere Informationen zur Nutzung der App und über Fetale Alkoholspektrumstörungen finden Sie bei Klick auf die linke Schaltfläche unter diesem Text.
          </p>
        </q-scroll-area>

      </q-card-section>

      <div class="q-gutter-sm text-center">
        <q-checkbox v-model="checkbox" label="Ich habe obige Informationen verstanden und akzeptiere..." />
      </div>
      <q-separator inset/>

      <q-card-actions align="between" class="q-pa-md q-pl-xl q-pr-xl">
        <q-btn outline color="primary" size="md" @click="info = true">Weitere Infos</q-btn>
<!--        <q-btn unelevated :disabled="!checkbox" color="primary" icon-right="fas fa-chevron-right" @click="gotoQuestionnaire">Starten</q-btn>-->
        <q-btn unelevated :disabled="!checkbox" color="primary" size="md" @click="gotoQuestionnaire">
          <div>
            Starten
          </div>
          <q-icon right size="0.85em" name="fas fa-chevron-right"/>
        </q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Weiterführende Informationen</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll text-center">

            <h5><b>What is FAS(D)?</b></h5>
            <div  class="q-pl-xl q-pr-xl">
            <q-video src="https://www.youtube.com/embed/gVqYIgX1RIE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" :ratio="4/1"/>
            </div>
              <p/>
            FAS is a permanent birth defect syndrome caused by maternal consumption of alcohol during pregnancy. The definition of the FAS has changed little since the 1970’s when the condition was first described and refined. The condition has been broadly characterized by prenatal and/or postnatal growth deficiency, a unique cluster of minor facial anomalies, and central nervous system (CNS) abnormalities. FAS is the leading known cause of mental retardation/developmental disabilities in the Western World and is entirely preventable. The prevalence of FAS is estimated to be 1 to 3 per 1,000 live births in the general population, but has been documented to be as high as 10 to 15 per 1,000 in some high-risk populations. The physical, cognitive, and behavioral deficits observed among individuals with prenatal alcohol exposure are not dichotomous, that is either normal or clearly abnormal. Rather, the outcomes, and the prenatal alcohol exposure, all range along separate continua from normal to clearly abnormal and distinctive. This full range of outcomes observed among individuals with prenatal alcohol exposure has come to be called Fetal Alcohol Spectrum Disorders (FASD). The term FASD is not intended for use as a clinical diagnosis. A patient would not receive adiagnosis of FASD, for the term is too broadly defined to be of clinical value. FAS, on the other hand, is a clinical diagnosis and is one of several alcohol-related diagnoses that fall under the umbrella of FASD.
            <p/>
<!--            <iframe width="560" height="315" src="https://www.youtube.com/embed/gVqYIgX1RIE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

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
  width: 80%
  border-radius: 32px

.q-dialog
  width: 80%
  border-radius: 32px

.disclaimer-scroll
  margin: auto

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
