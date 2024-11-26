### Review based Rating system ###

## Model training and evaluation ##

    'model.py' contains the model code. The model has been trained on 50000 reviews across different categories of product. To train the model, you need to navigate to the directory and run "python model.py" on the command prompt to train the model. 

    The model is a RoBERTa model followed by a linear regressor model with ridge regularization and a transformation on "y" without any transformation on "x". 

    The model has shown an excellent performance with the Mean Squared Error being 0.91. 



    The 'test.py' file is used to test the model based on the trained model. The learned model is saved in 'linear_regression_model.pkl' and this model is called for testing. 

    The model has been trained on the 'train_50k.xlsx' data that is random sampled from various datasets. 


    The 'roberta_extractor_model' folder contains the pre trained RoBERTa-base model which is called along with pkl file for testing. 


    The 'app.py' contains the test file integrated with backend of the website. Use 'python app.py' to run the model. 

    ### Note: Check on line 104 for transformation on y ###



    To run the front end, navigate to my-app folder and run "npm run dev"

    Install npm as a pre-requisite


