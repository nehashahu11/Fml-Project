import pandas as pd 
from sklearn.utils import shuffle
df1 = pd.read_excel("sample_27k.xlsx")
df2 = pd.read_excel("1_2_rating_reviews.xlsx")

combined_df = pd.concat([df1, df2], ignore_index=True)
output_file = "train_30k.xlsx"
combined_df.to_excel(output_file, index=False)

df = pd.read_excel(output_file)
df = df.iloc[:30001]
df = shuffle(df, random_state=42)
df.to_excel(output_file, index=False)
