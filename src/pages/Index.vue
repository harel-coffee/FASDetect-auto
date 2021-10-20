<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section class="text-center">
          <div class="text-h3 text-bold">FASDetect</div>
          <div class="text-h5 text-blue-grey-9">{{$t('title')}}</div>
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
          {{$t('disclaimer1')}}
          <p/>
          {{$t('disclaimer2')}}
          <p/>
          {{$t('disclaimer3')}}
          <p/>
          <p v-for="n in 15" :key="n">
          {{$t('disclaimer4')}}
          </p>
        </q-scroll-area>

      </q-card-section>

      <div class="q-gutter-sm text-center">
        <q-checkbox v-model="checkbox" :label="$t('accept')" color="accent"/>
      </div>
      <q-separator inset/>

      <q-card-actions align="between" class="q-pa-md q-pl-xl q-pr-xl">
        <q-btn outline rounded color="primary" size="md" @click="info = true">{{$t('more_info_btn')}}</q-btn>
<!--        <q-btn unelevated :disabled="!checkbox" color="primary" icon-right="fas fa-chevron-right" @click="gotoQuestionnaire">Starten</q-btn>-->
        <q-btn unelevated rounded :disabled="!checkbox" color="red" size="md" @click="gotoQuestionnaire">
          <div>
            {{ $t('start_btn') }}
          </div>
          <q-icon right size="0.85em" name="fas fa-chevron-right"/>
        </q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card style="width: 1600px; max-width: 78vw; border-radius: 32px">
          <q-card-section>
            <div class="text-h6 text-center">{{$t('more_info_headline')}}</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll text-center">

            <h5><b>{{$t('more_info_h2')}}</b></h5>
            <div  class="q-pl-xl q-pr-xl">
<!--            <q-video src="https://www.youtube.com/embed/gVqYIgX1RIE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" :ratio="4/1"/>-->
            <q-video src="https://www.youtube.com/embed/pEFalLp782g?start=20&end=193" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" :ratio="4/1"/>

            </div>
              <p/>
            {{$t('more_info_text')}}
            <p/>
<!--            <iframe width="560" height="315" src="https://www.youtube.com/embed/gVqYIgX1RIE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
<!--            <q-btn flat label="Decline" color="primary" v-close-popup />-->
            <q-btn flat rounded :label="$t('close_btn')" color="primary" v-close-popup />
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
