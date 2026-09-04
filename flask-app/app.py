from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Hello from Flask Docker!</h1><h2>My Second Dockerized Application</h2><p>Application: Python + Flask</p>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
