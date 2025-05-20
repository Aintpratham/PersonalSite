from flask import Flask, render_template, jsonify
import os
import json

app = Flask(__name__)

@app.route("/")
def home():
    return open("index.html").read()

@app.route("/about")
def about():
    return open("about.html").read()

@app.route("/projects")
def projects():
    return open("projects.html").read()

@app.route("/blog")
def blog():
    posts = []
    for filename in os.listdir("posts"):
        if filename.endswith(".json"):
            with open(os.path.join("posts", filename)) as f:
                posts.append(json.load(f))
    return render_template("blog.html", posts=posts)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
