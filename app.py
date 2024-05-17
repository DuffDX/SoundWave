from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "SoundWave Backend"

@app.route('/process_image', methods=['POST'])
def process_image():
    # Placeholder for image processing logic
    return jsonify({"message": "Image processed"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3050)