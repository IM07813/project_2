from flask import Flask, render_template, request
from PIL import Image
import numpy as np
import joblib

app = Flask(__name__)
model = joblib.load("xray_classification_model.joblib")

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        image_file = request.files["image"]
        if image_file:
            image = Image.open(image_file)
            img_array = np.array(image.resize((224, 224))).reshape(1, 224, 224, 3)
            prediction = model.predict(img_array)
            result = "Pneumonia" if prediction[0] == 1 else "Normal"
            return render_template("result.html", result=result)

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)