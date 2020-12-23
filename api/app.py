from flask import Flask, request, jsonify, json
from flask_cors import CORS

import pickle
# import sklearn
# import ligthgbm
# import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return 'Available endpoints: \nmodels : GET list of available trained models\npredict : predict instance'


# @app.route('/summary')
#def summary():
#    data = make_summary()
#    response = app.response_class(
#        response=json.dumps(data),
#        status=200,
#        mimetype='application/json'
#    )
#    return response

@app.route('/models')
def return_available_models():
  return 'Currently, there are no model alternatives available'

@app.route('/model-details')
def return_model_details():
  return 'Details for specific models   (sensitivity, specificity, description, ...)'

@app.route('/predict', methods = ['GET', 'POST'])
def predict_instance():

#   print('REQUEST HEADERS\m', request.headers)
#   print('REQUEST DATA\m', request.data)
#   print('REQUEST FORM\m', request.form)
#   print('REQUEST JSON\m', request.json)

  req_data = request.get_json()
  features = np.array(req_data['features']).reshape(1, -1)

# unpickle specified models and their corresponding feature scalers

  model = pickle.load( open( "gbm_test.p", "rb" ))


  if model['scaler']:
    scaler = model['scaler']
    features = scaler.transform(features)

  clf = model['model']
  desc = model['description']

  return jsonify(
      description = desc,
      predict = clf.predict(features).tolist()[0],
      predict_proba = clf.predict_proba(features).tolist()[0][1],
  )
