from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200

@app.route("/api/message", methods=["POST"])
def message():
    data = request.get_json()
    msg = data.get("msg", "")
    return jsonify({"response": f"You said: {msg}"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

