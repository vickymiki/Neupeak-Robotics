from flask import Flask, render_template, url_for

import psutil, os

app = Flask(__name__)

@app.route('/')

def index():
    return render_template('index.html')

@app.route("/status", methods=["POST"])
def get_status():
    p = psutil.Process(os.getpid())
    uptime = p.create_time()
    response = {"uptime": uptime}
    return response, 200

@app.route("/info", methods=["POST"])
def get_info():
    response = {"metadata": "Mock robot server."}
    return response, 200

@app.route("/halt", methods=["POST"])
def halt_server():
    # Simulate shutdown sequence
    print("Shutting down mock server...")
    return {"status": "Server shutdown"}, 200

if __name__ == "__main__":
    app.run(host='0.0.0.0')
