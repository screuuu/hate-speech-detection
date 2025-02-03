from flask import Flask, render_template, request, jsonify
import joblib

# Connecting to flask
app = Flask(__name__)
app.config['SECRET KEY'] = "##$*_)($%-*/"

# Loading the model
model = joblib.load(filename='models/SGDmodel_final.pkl')

#routes
@app.route('/') #Home Page
@app.route('/index')
def home():
    return render_template('index.html')

@app.route('/model_check_api', methods=['POST'])
def model_test():
     data = request.get_json()
     print(data)
     result = model.predict([data['query']])
     result = "OFFENSIVE" if result[0] == 1 else "NON-OFFENSIVE"
     print(f"Model output: {result}")
     return jsonify(result)

@app.route('/testpage')
def test():
    return render_template('model-test.html')

# main driver function
if __name__ == '__main__':
    app.run(port=8080)