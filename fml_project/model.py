# -*- coding: utf-8 -*-
"""model.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1qlyNRt-ekR7wXqvoqqVBJMdcihQkB7oe
"""

import torch
import torch.nn as nn
from transformers import RobertaModel, RobertaTokenizer

import numpy as np
import joblib
import os
os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'
import shutil


class LinearRegressionClosedForm:

    def __init__(self):
        self.weights = None

    def fit(self, X, y):

        weights=[]
        i=np.eye(len(X))
        weights = np.dot(X.T, X)
        i=np.eye(len(weights))
        weights=weights+30*i
        weights = np.dot(np.linalg.inv(weights), X.T)
        self.weights = np.dot(weights, y)
        return self.weights

    def predict(self, X):
        if self.weights is None:
            raise ValueError("Model has not been fitted yet.")
        predictions = np.dot(X, self.weights)
        return predictions

class RobertaExtractor:

    def __init__(self, model_name='roberta-base',batch_size=8, device=None):
        self.tokenizer = RobertaTokenizer.from_pretrained(model_name)
        self.model = RobertaModel.from_pretrained(model_name)
        self.batch_size = batch_size

    def extract_features(self, texts):
        embeddings = []

        for i in range(0, len(texts), self.batch_size):
            batch_texts = texts[i:i + self.batch_size]
            inputs = self.tokenizer(batch_texts, padding=True, truncation=True, return_tensors='pt')

            with torch.no_grad():
                outputs = self.model(**inputs)
            pooled_embeddings = outputs.last_hidden_state.mean(dim=1)
            embeddings.append(pooled_embeddings.cpu().numpy())
            print(f"\n{i+1} batch over")
        return np.concatenate(embeddings, axis=0)

import pandas as pd
from sklearn.model_selection import train_test_split



if __name__ == "__main__":
    import pandas as pd

    # os.rename("first_5k_rows.csv","first_5k_rows.xls")
    df = pd.read_excel("train_30k.xlsx", engine='openpyxl')
    print(df.columns)

    train, test = train_test_split(df, test_size=0.2, random_state=42)

    feature_extractor = RobertaExtractor()
    X_train = train["review"].astype(str).tolist()
    y_train = train["rating"].values.reshape(-1,1)
    X_test = test["review"].astype(str).tolist()
    y_test = test["rating"].values.reshape(-1,1)
    X_train = feature_extractor.extract_features(X_train)
    X_test =  feature_extractor.extract_features(X_test)


    regressor = LinearRegressionClosedForm()
    regressor.fit(X_train, y_train)

    predictions = regressor.predict(X_test)


    print("Predictions:", predictions)

    feature_extractor.model.save_pretrained("./roberta_extractor_model")
    feature_extractor.tokenizer.save_pretrained("./roberta_extractor_model")

    joblib.dump(regressor, 'linear_regression_model.pkl')

    y_test = test["rating"].values.reshape(-1,1)
    y_test = test["rating"].fillna(0).values.reshape(-1,1)
    y_test_flat = [int(value[0]) if not np.isnan(value[0]) else 0 for value in y_test]
    y_hat_flat = [value[0] for value in predictions]
    rounded_y_hat = [round(value-0.1*(np.sin((4)*value))) for value in y_hat_flat]
    # rounded_y_hat = [round(value) for value in y_hat_flat]
    from sklearn.metrics import mean_squared_error, accuracy_score
    print(rounded_y_hat)
    mse = mean_squared_error(y_test_flat, rounded_y_hat)
    print(mse)
    accuracy = accuracy_score(y_test_flat, rounded_y_hat)
    print(accuracy)

    diff = 0
    error = 0
    for i in range(len(y_test_flat)):
        diff = y_test_flat[i] - rounded_y_hat[i]
        error += diff
    print(error)
