from flask import Flask , render_template ,jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/matches')
def show_matches():
    url = "https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=133602"
    response = requests.get(url)
    data = response.json()
    events = data.get('events')
    if not events:
        return jsonify([])
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug = True)
