export default {
  language: 'Language',
  title: 'Application for Screening Fetal Alcohol Syndrome Spectrum Disorder',

  disclaimer1: 'This application is designed to screen for FAS(D) and make it easier for treating individuals to identify FASD and initiate a diagnosis.\n' +
    'It does not replace a diagnosis. The results should be evaluated by the attending physician or psychologist.',
  disclaimer2: 'By using the application, you confirm that patients or their proxies have consented to participate in screening and to have medical data analyzed anonymously in an algorithmic manner.\n',
  disclaimer3: 'Every test procedure has a small probability of error, i.e. false-positive (healthy patient is detected as affected) and false-negative (present case is not detected) assessments may occur.\n',
  disclaimer4: 'For more information about using the app and about Fetal Alcohol Spectrum Disorders, click the left button below this text.',
  disclaimer5: 'Please also note the following documents: ',

  privacy: 'privacy statement',
  privacy_link: 'FASDetect_privacy_en.pdf',
  imprint: 'imprint',
  imprint_link: 'FASDetect_imprint_en.pdf',
  terms: 'terms of use',
  terms_link: 'FASDetect_terms_en.pdf',

  pedz: 'For the conversion of measurements into z-scores, please use the calculator by Daniel Gräfe, with the data from Kromeyer-Hauschild et al: ',
  pedz_web: 'web app',
  pedz_web_link: 'https://www.pedz.de/de/rechner.html',
  pedz_apple: 'Apple app',
  pedz_apple_link: 'https://apps.apple.com/de/app/kinderarzt/id498776330#',
  pedz_android: 'Android app',
  pedz_android_link: 'https://play.google.com/store/apps/details?id=com.grapp.kinderarztrechner',

  accept: 'I understand the above information and accept',
  more_info_btn: 'More Infos',
  more_info_h2: 'What is FAS(D)?',
  start_btn: 'Start',

  more_info_headline: 'Further information',
  more_info_text: 'Fetal Alcohol Spectrum Disorder (FASD) summarizes variously expressed clinical pictures (alcohol embryopathy, pFAS; FAS), all of which are consequences of prenatal alcohol consumption by the pregnant woman on the growing child. The condition has a lifelong impact on affected patients. With an estimated prevalence of 2-5% of the Western world, FASD is a common disorder. Yet, it is severely underdiagnosed. Affected patients usually present with a broad picture of behavioral abnormalities in addition to facial dysmorphia, impaired central nervous system function, and growth disturbances. These behavioral abnormalities can manifest themselves as impulsivity, hyperactivity and attention deficit disorder, typical symptoms of attention deficit hyperactivity disorder (ADHD). About half of all children with FASD also have ADHD. Established diagnostic systems worldwide focus on dysmorphia, growth restriction, impaired central nervous system function, and maternal prenatal alcohol use data. Studies show that up to 80% of children are undiagnosed, or misdiagnosed, using established diagnostic systems, most often with ADHD. Unfortunately, this often leads to patients being diagnosed with ADHD instead of the underlying FASD, and important help and treatment options are delayed or not available at all. Our goal with FASDetect is to reduce the rate of misdiagnosed children who show ADHD symptoms but actually have an underlying FASD. Using machine learning and patient data from Charité Berlin, we developed the screening app FASDetect as part of a study. To get a screening result for the affected patient you only need to answer six questions. Please answer the following questions conscientiously.\n',
  close_btn: 'Close',

  // Questionnaire

  questionnaire: 'Questionnaire',
  next_btn: 'Next',
  yes: 'Yes',
  no: 'No',

  gku: 'z-score of head circumference at birth',
  gku_label: 'z-score',
  gl: 'z-score of birth length',
  gl_label: 'z-score',
  iq: 'Intelligence below average?',
  dist: 'Socially intrusive behaviour?',
  sleep: 'Sleep disturbance?',
  memory: 'Impairment in memory?',

  gku_help: 'Der Kopfumfang wird in der U1 gemessen und ist im U-Heft vermerkt. Der Z-Score ist eine statistische Variable, die eine bessere Einschätzung des Kopfumfangs mit den Werten der Vergleichsgruppe (gleiches Geschlecht, gleiches Gestationsalter) bietet. Einen Rechner um den Kopfumfang in den Z-Score umzuwandeln können Sie hier finden.',
  gl_help: 'Die Geburtslänge wird in der U1 gemessen und ist im U-Heft vermerkt. Der Z-Score ist eine statistische Variable, die eine bessere Einschätzung der Geburtslänge mit den Werten der Vergleichsgruppe (gleiches Geschlecht, gleiches Gestationsalter) bietet.',
  iq_help: 'Ist die Intelligenz des Patienten klinisch unterdurchschnittlich? Sollte ein IQ-Test (z.B. HAWKIV/V) vorliegen, kann dieser zur Beantwortung der Frage herangezogen werden. Ein durchschnittlicher IQ liegt zwischen 85 und 115. Ein IQ unter 85 Punkten wird als unterdurchschnittlich bezeichnet. ',
  dist_help: 'Zeigt der Patient distanzloses Verhalten? Distanzloses Verhalten äußert sich häufig durch fehlende emotionale und körperliche Distanz zu fremden Personen.',
  memory_help: 'Leidet der Patient unter einer Störung der Merkfähigkeit?',
  sleep_help: 'sleep help text',

  // Result

  result_h: 'RESULT',
  low_risk: 'LOW RISK',
  medium_risk: 'INCREASED RISK',
  high_risk: 'HIGH RISK',
  unknown_risk: 'UNKNOWN RISK',
  res1: 'There is a ',
  res2: ' of FASD',
  end_btn: 'finish',
  res_detail_h: 'Result - Detail View'

}
