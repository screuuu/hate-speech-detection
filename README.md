
# Hate Speech Detection - Flask Web App  

This project is a **hate speech detection web application** built using Flask. It allows users to input text and determines whether the text is **offensive** or **non-offensive** using a trained machine learning model.

## 🚀 Features
- Detects **offensive** or **non-offensive** text.
- Simple **Flask-based web interface**.
- Runs locally on **http://127.0.0.1:8080**.

---

## 🛠 Prerequisites  

Make sure you have **Python installed** on your system. You can check by running:  
```bash
python --version
```
## 🔧 Setup & Installation

### **1️⃣ Create a Virtual Environment**
A virtual environment helps isolate dependencies. Follow the steps below for your operating system.

#### Windows
```bash
pip install virtualenv
```
```bash
python -m venv env
```
```bash
env\Scripts\activate
```


#### Mac/Linux
```bash
pip install virtualenv
```
```bash
python3 -m venv env
```
```bash
source env/bin/activate
```
----------

### **2️⃣ Install Dependencies**
Once the virtual environment is activated, you can install all the required dependencies using the following command:
```bash
pip install -r requirements.txt
```
----------

### **3️⃣ Run the Flask Application**

To start the web app, use the following command:
python model_ui.py
or, if you're using Python 3:
```bash
python3 model_ui.py
```

----------

### **4️⃣ Test the Web Application**

Once the server is running, open your browser and visit:

🔗 **[http://127.0.0.1:8080](http://127.0.0.1:8080)**

You can enter a **prompt** (text input), and the model will classify it as either:  
❌ **"OFFENSIVE"**  
✅ **"NON-OFFENSIVE"**

----------

### 📊 Preprocessing and Model Training
### **Preprocessing Script**
The preprocessing and model training steps are included in the Jupyter Notebook file: cyberbullying_v2.ipynb.
This notebook contains all the preprocessing steps applied to the dataset, including:
- Text cleaning
- Tokenization
- Train-test split

The notebook also includes the evaluation of multiple machine learning models for hate speech detection.

## 📜 License
This project is licensed under the Apache License. See the LICENSE file for more details.
