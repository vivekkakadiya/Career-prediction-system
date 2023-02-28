import pandas as pd
import numpy as np
from sklearn import decomposition
import matplotlib.pyplot as plt
import sys
import json
print("hello")
#load data
file=sys.argv[1]
dict1=json.loads(file)
a1=[]
for i in dict1:
    a1.append(dict1[i])
x=np.array(a1)
#read data
dataset = pd.read_csv("roo_data.csv")

#---------------Applying OneHot & Lable  Encoding-----------#
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
labelencoder = LabelEncoder()

data = dataset.iloc[:,:-1].values
label = dataset.iloc[:,-1].values

#---------------conversion of all categorial column values to vector/numerical--------#
data_t=np.zeros(shape=(20000, 31))
for i in range(14,31):
    data_t[:,i] = labelencoder.fit_transform(data[:,i])

#transform test data
tst_data=np.zeros(31)
tst_data1=np.zeros(14)
for i in range(14,31):
    labelencoder.fit(data[:,i])
    tst_data[i] = labelencoder.transform([(x[i])])
    
print(tst_data)
#--------------normalizing the non-categorial column values---------#
# from sklearn.preprocessing import Normalizer
data1=data[:,:14]
# normalized_data
data2=data_t[:,14:]
df1 = np.append(data1,data2,axis=1)

#--------------------------Adding Headers & convert np to pandas-----------------------#
X1 = pd.DataFrame(df1,columns=['Acedamic percentage in Operating Systems', 'percentage in Algorithms',
       'Percentage in Programming Concepts',
       'Percentage in Software Engineering', 'Percentage in Computer Networks',
       'Percentage in Electronics Subjects',
       'Percentage in Computer Architecture', 'Percentage in Mathematics',
       'Percentage in Communication skills', 'Hours working per day',
       'Logical quotient rating', 'hackathons', 'coding skills rating',
       'public speaking points', 'can work long time before system?',
       'self-learning capability?', 'certifications',
       'talenttests taken?',
       'reading and writing skills', 'memory capability score',
       'Interested subjects', 'interested career area ', 'Job/Higher Studies?',
       'Type of company want to settle in?',
       'Taken inputs from seniors or elders', 'interested in games',
       'Interested Type of Books', 
       'Gentle or Tuff behaviour?',
       'Management or Technical',
       'worked in teams ever?', 'Introvert'])

#------------------Encoding Final Output column Values------------#
label = labelencoder.fit_transform(label)
# print(len(label))
y=pd.DataFrame(label,columns=["Suggested Job Role"])


l2=labelencoder.inverse_transform(label)


dict={}
for i in label:
    dict[i]=l2[i]
    
# res = list({ele for val in dict.values() for ele in val})
# res

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X1, np.ravel(y), test_size=0.4, random_state=1)
  
# training the model on training set
from sklearn.naive_bayes import GaussianNB
gnb = GaussianNB()
gnb=gnb.fit(X_train, y_train)
from sklearn.metrics import accuracy_score  
# making predictions on the testing set
y_pred = gnb.predict(X_test)

    
for i in range(0,14):
    tst_data1[i]=x[i]
    print(x[i])
tst_data2=tst_data[14:]
df2 = np.append(np.array([tst_data1]),np.array([tst_data2]),axis=1)
a=gnb.predict(np.array(df2))
print(a)

print(dict[a[0]])


