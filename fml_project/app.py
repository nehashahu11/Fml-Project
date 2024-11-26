# from flask import Flask ,request,jsonify
# from flask_cors import CORS 
# from transformers import RobertaTokenizer, RobertaModel
# import torch
# import joblib
# import numpy as np
# from model import LinearRegressionClosedForm

# # app=Flask(__name__)
# # CORS(app)
# tokenizer = RobertaTokenizer.from_pretrained("roberta_extractor_model")

# roberta_model = RobertaModel.from_pretrained("roberta_extractor_model")

# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# roberta_model.to(device)
# roberta_model.eval()

# def get_sentence_embedding(sentence):
#     input_token = tokenizer(sentence, return_tensors="pt", truncation=True, padding=True)
#     input_token = {key: value.to(device) for key,value in input_token.items()}

#     with torch.no_grad():
#         outputs = roberta_model(**input_token)

#     pooled_embedding = outputs.last_hidden_state.mean(dim=1).squeeze().cpu().numpy()
#     return pooled_embedding





# # @app.route('/api/receive-data',methods=['GET','POST'])
# def rate_the_review(all_reviews):
#     # all_reviews=request.json.get('all_reviews')

#     # print(all_reviews)

#     linear_regression_model = joblib.load('linear_regression_model.pkl')
#     rating_sum=0
#     mean_rating=0
#     count_1=0
#     count_2=0
#     count_3=0
#     count_4=0
#     count_5=0
#     for sentence in all_reviews:
        
#         embedding = get_sentence_embedding(sentence).reshape(1,-1)

#         regressor_output = linear_regression_model.predict(embedding)
#         regressor_output = round(regressor_output[0][0]-0.1*(np.sin((4)*regressor_output[0][0])))
#         if(regressor_output<=0):
#             regressor_output=1
#         elif (regressor_output>=5):
#             regressor_output=5
#         if (regressor_output==1):
#             count_1+=1
#         elif (regressor_output==2):
#             count_2+=1
#         elif (regressor_output==3):
#             count_3+=1
#         elif (regressor_output==4):
#             count_4+=1
#         elif (regressor_output==5):
#             count_5+=1
#         rating_sum += regressor_output
#         # print(f"sentence: {sentence} Regressor Output:  {regressor_output}")
#     mean_rating = rating_sum/len(all_reviews)
#     data={
#             "labels":["Very bad", "Bad", "Average", "Good", "Excellent"],
#             "values":[count_1, count_2, count_3, count_4, count_5],
#             "mean": mean_rating

#     }
#     print(data)

#     return data


# # if __name__=='__main__':
# #     app.run(host='0.0.0.0',port=5001)


# import threading
# import time
# import chromedriver_autoinstaller
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.support.ui import Select
# from bs4 import BeautifulSoup
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import requests

# # Function to initialize the Chrome WebDriver
# def initialize_driver():
#     chromedriver_autoinstaller.install()
#     return webdriver.Chrome()

# # Function to log in to Amazon
# def amazon_login(driver, email, password):
#     driver.get("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26signIn%3D1%26useRedirectOnSuccess%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0")
#     time.sleep(2)  # Wait for the page to load

#     driver.find_element(By.ID, "ap_email").send_keys(email)
#     driver.find_element(By.ID, "continue").click()
#     time.sleep(2)

#     driver.find_element(By.ID, "ap_password").send_keys(password)
#     driver.find_element(By.ID, "signInSubmit").click()
#     time.sleep(3)

# # Function to scrape reviews based on a specific star rating
# def scrape_reviews_for_user(user_email, user_password, rating, reviews, product_url):
#     start_time = time.time()  # Record start time
#     print(f"Thread {threading.current_thread().name} started at {time.ctime(start_time)}")
#     driver = initialize_driver()  # Separate ChromeDriver instance for each user

#     # Log in with a unique user account
#     amazon_login(driver, user_email, user_password)

#     driver.get(product_url)
#     time.sleep(1)  # Wait for the page to load

#     # Click on the "See More Reviews" link (or similar)
#     try:
#         see_more_reviews_link = WebDriverWait(driver, 10).until(
#             EC.presence_of_element_located((By.PARTIAL_LINK_TEXT, "See more reviews"))
#         )
#         see_more_reviews_link.click()
#         time.sleep(1)
#     except Exception as e:
#         print(f"Could not find the 'See More Reviews' link for user {user_email}: {e}")
#         driver.quit()
#         return []

#     # Wait for the reviews filter dropdown to appear
#     try:
#         select_element = WebDriverWait(driver, 2).until(
#             EC.presence_of_element_located((By.ID, "star-count-dropdown"))
#         )
#         select = Select(select_element)
#     except Exception as e:
#         print(f"Could not find the rating filter dropdown for user {user_email}: {e}")
#         driver.quit()
#         return []

#     # Select the star rating for this user
#     if rating == 5:
#         select.select_by_value("five_star")
#     elif rating == 4:
#         select.select_by_value("four_star")
#     elif rating == 3:
#         select.select_by_value("three_star")
#     elif rating == 2:
#         select.select_by_value("two_star")
#     elif rating == 1:
#         select.select_by_value("one_star")

#     time.sleep(3)  # Wait for the page to reload with the selected reviews

#     # Scrape reviews for the selected star rating
#     while True:
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         review_elements = soup.find_all('div', {'data-hook': 'review'})

#         # Extract and save each review for this rating
#         for review in review_elements:
#             try:
#                 review_text = review.find('span', {'data-hook': 'review-body'}).get_text(strip=True)
#                 reviews.append(review_text)
#             except Exception as e:
#                 print(f"Error processing review for user {user_email}: {e}")
#                 continue  # Continue to the next review if there's an error

#         # Check for the "Next" button and click it if it exists
#         try:
#             next_button = driver.find_element(By.CSS_SELECTOR, 'li.a-last a')
#             driver.execute_script("arguments[0].click();", next_button)
#             time.sleep(1)  # Wait for the next page to load
#         except:
#             print(f"No more {rating}-star reviews for user {user_email}.")
#           # No more pages to scrape for this rating
#             break
#     driver.quit()
            

    

# # Main function to scrape reviews for multiple users
# def scrape_all_reviews(product_url):
#     reviews = []
#     print(product_url)

#     # List of user dictionaries containing email and password for each user
#     user_credentials = [
#         {"email": "varunkc282001@gmail.com", "password": "Hassan@123"},
#         {"email": "nvshahu2104@gmail.com", "password": "Nehashahubb@11"},
#         {'email': 'nvshahu210@gmail.com', 'password': 'Iloveyouneh'},
#         {'email': 'rajshekark620@gmail.com', 'password': 'rajshekar'},
#         # {'email': 'anishka98bhat03@gmail.com', 'password': 'Iloveyouneha'}
#     ]
    
#     threads = []

#     # Create threads for each user to scrape different star ratings
#     for user, rating in zip(user_credentials, range(1, 5)):  # 1st user gets 1-star, 2nd user gets 2-star, etc.
#         thread = threading.Thread(target=scrape_reviews_for_user, args=(user['email'], user['password'], rating, reviews, product_url))
#         threads.append(thread)
#         thread.start()

#     # Wait for all threads to complete
#     for thread in threads:
#         thread.join()

#     return reviews

# # Flask API to trigger the scraping process
# app = Flask(__name__)
# CORS(app)

# @app.route('/scrape-reviews', methods=['GET', 'POST'])
# def index():
#     url = request.json.get('url')
#     print(url)
#     all_reviews = scrape_all_reviews(url)
#     print(all_reviews)
#     print("____________________________")
#     print(len(all_reviews))

#     # target_url = "http://192.168.1.103:5001/api/receive-data"  # Replace with the target server's URL
#     # headers = {'Content-Type': 'application/json'}
#     # payload = {
#     #     'all_reviews': all_reviews
#     # }
#     response=rate_the_review(all_reviews)

#     try:
#         response=rate_the_review(all_reviews)
#         # if response.status_code == 200:
#         data=response
#         print(data)
#         return jsonify(data), 200
  
#     except requests.exceptions.RequestException as e:
#         return jsonify({"message": "An error occurred while sending data", "error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=9000)



from flask import Flask ,request,jsonify
from flask_cors import CORS 
from transformers import RobertaTokenizer, RobertaModel
import torch
import joblib
import numpy as np
from model import LinearRegressionClosedForm

app=Flask(__name__)
CORS(app)
tokenizer = RobertaTokenizer.from_pretrained("roberta_extractor_model")

roberta_model = RobertaModel.from_pretrained("roberta_extractor_model")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
roberta_model.to(device)
roberta_model.eval()

def get_sentence_embedding(sentence):
    input_token = tokenizer(sentence, return_tensors="pt", truncation=True, padding=True)
    input_token = {key: value.to(device) for key,value in input_token.items()}

    with torch.no_grad():
        outputs = roberta_model(**input_token)

    pooled_embedding = outputs.last_hidden_state.mean(dim=1).squeeze().cpu().numpy()
    return pooled_embedding





@app.route('/api/receive-data',methods=['GET','POST'])
def index():
    all_reviews=request.json.get('all_reviews')

    # print(all_reviews)

    linear_regression_model = joblib.load('linear_regression_model.pkl')
    rating_sum=0
    mean_rating=0
    count_1=0
    count_2=0
    count_3=0
    count_4=0
    count_5=0
    for sentence in all_reviews:
        
        embedding = get_sentence_embedding(sentence).reshape(1,-1)

        regressor_output = linear_regression_model.predict(embedding)
        regressor_output = round(regressor_output[0][0]-0.1*(np.sin((4)*regressor_output[0][0])))
        if(regressor_output<=0):
            regressor_output=1
        elif (regressor_output>=5):
            regressor_output=5
        if (regressor_output==1):
            count_1+=1
        elif (regressor_output==2):
            count_2+=1
        elif (regressor_output==3):
            count_3+=1
        elif (regressor_output==4):
            count_4+=1
        elif (regressor_output==5):
            count_5+=1
        rating_sum += regressor_output
        # print(f"sentence: {sentence} Regressor Output:  {regressor_output}")
    mean_rating = rating_sum/len(all_reviews)
    data={
            "labels":["Very bad", "Bad", "Average", "Good", "Excellent"],
            "values":[count_1, count_2, count_3, count_4, count_5],
            "mean": mean_rating

    }

    return jsonify(data),200


if __name__=='__main__':
    app.run(host='0.0.0.0',port=5001)
