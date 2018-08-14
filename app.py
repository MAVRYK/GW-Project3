from flask import (Flask, jsonify, render_template, 
                   send_file, url_for, send_from_directory)
import json
import os


#make an app instance
app = Flask(__name__)

'''Define the Routes'''

#favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static/img/'),
                          'favicon.ico',mimetype='image/vnd.microsoft.icon')


#index
@app.route('/')
def index():
    return render_template('index.html')

#word cloud
@app.route('/view/<word_cloud>')
def cloud(word_cloud):
    return send_file(f"static/img/{word_cloud}")

#chord diagram
@app.route('/chord')
def chord():

    with open('static/data/chord-data.json') as filename:
        chordData = json.load(filename)

    return (jsonify(chordData))   

#model bias predictor
@app.route('/model')
def model():

    #with open('static/data/model-data.json') as filename:
    #    modelData = json.load(filename)

    #return (jsonify(modelData)) 
    return send_file('static/data/model-data.json', mimetype = 'application/json')

#run the app
if __name__ == '__main__':
    app.run(debug=True)