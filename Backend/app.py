from flask import Flask

app = Flask(__name__)

@app.route('/')
def Home():
    return "Hello :)"

if __name__ == "__main__":
    app.run(debug=True) #This ensures the app runs when executed