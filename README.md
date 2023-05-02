# Currency Exchange Rate Prediction

A machine learning system for classifying customer comments and feedback ensuring complaints are handled by relevant departments 

## ⚙️ Features
- Feedback classification.
- Display feedback to representatives who handle the incoming cases.
- Filter feedback based on category.

> The system is based on categories in the banking77 dataset. Therefore, it is applicable mainly to the banking industry but can be customized accordingly.

## Built With 🛠

- [Fast API](https://fastapi.tiangolo.com/) - An open source modern, high-performance web framework for building APIs with Python based on standard type hints.
- [Google Colab](https://colab.research.google.com/) -  Colab is a free Jupyter notebook environment that allows one to write and execute python code through the browser, and is well suited to machine learning, and data analysis. The platform offers access to free GPU and was used for model training.
- [Mindsdb](https://mindsdb.com/)- An open source tool that brings machine learning into databases.

## Getting Started 

### Prerequisites
- [Python 3.9](https://www.python.org/downloads/)
- [Fast API](https://fastapi.tiangolo.com/)

### Setup

To get started, clone the repo and run: 

`pip3 install virtualenv` 

Navigate to the api folder and create a new virtualenv using the following command:

`virtualenv venv`

Activate  the virtual environment using the following command:

`source venv/bin/activate`

Install the specified dependencies using:

`pip install -r requirements.txt`

Create a .env file in the app directory and add the following:

user = "Username to login to Mindsdb account"

password = "Password to Mindsdb account"

host = "cloud.mindsdb.com"

port = 3306

database = ""

On your terminal run 

`uvicorn main:app`

Navigate to http://127.0.0.1:8000/docs to view the interactive docs.