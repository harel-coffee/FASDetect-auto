<template>
  <q-page class="flex flex-center">

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section class="text-center">
          <div class="text-h3 text-bold">{{$t('result_h')}}</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-xl q-pl-lg text-center">

        <div class="text-bold text-h4 text-center">{{$t('res1')}}<u>{{ $t(risk_level) }}</u>{{$t('res2')}}<p/></div>

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
        <q-btn unelevated rounded color="primary" to="/">{{ $t('end_btn') }}</q-btn>
      </q-card-actions>

      <q-dialog v-model="info">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">{{$t('res_detail_h')}}</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <p></p>
            {{$t('sensitivity')}} 90%<br/>
            {{$t('specificity')}} 75%<br/>
            {{$t('ppv')}} 84%
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

<style lang="sass" scoped>

.q-card
  width: 80%
  //height: 80vh
  border-radius: 32px

.q-dialog
  width: 80%
  border-radius: 32px

</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      risk_level: this.$t('unknown_risk'),
      risk_icon: '',
      risk_traffic_light_image: '',
      info: false
    }
  },

  mounted () {
    const risk = this.$q.sessionStorage.getItem('prediction').predict_proba

    if (risk < 0.5) {
      this.risk_level = 'low_risk'
      this.risk_traffic_light_image = 'green.svg'
    } else if (risk >= 0.5 && risk < 0.75) {
      this.risk_level = 'medium_risk'
      this.risk_traffic_light_image = 'yellow.svg'
    } else if (risk >= 0.75) {
      this.risk_level = 'high_risk'
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
