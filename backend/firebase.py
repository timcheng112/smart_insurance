import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("INSERT FIREBASE CREDENTIALS")
firebase_admin.initialize_app(cred)

db=firestore.client()


Customer1={
    "id": 1, 
    "name": "John Doe", 
    "organisation": "SMRT", 
    "phone": "+65 91234567", 
    "age": 28, 
    "email": "johndoe@email.com"
    
}

Customer2={ 
    "id": 2, 
    "name": "Ben Halim", 
    "organisation": "NUS", 
    "phone": "+65 92341234",  
    "age": 24, "email": 
    "benhalim@email.com"}

Customer3={
    "id": 3, 
    "name": "Tim Cheng", 
    "organisation": "NUS", 
    "phone": "+65 87531203", 
    "age": 24, 
    "email": "timcheng@email.com"}

Customer4={
    "id": 4, 
    "name": "Vince Lim", 
    "organisation": "NUS", 
    "phone": "+65 92351273", 
    "age": 25, 
    "email": "vincelim@email.com" }

Customer5={
    "id": 5, 
    "name": "Spongebob", 
    "organisation": "CN", 
    "phone": "+65 81235539", 
    "age": 61, 
    "email": "spongebob@email.com" }

data=[Customer1,Customer2,Customer3,Customer4,Customer5]

for record in data:
    doc_ref=db.collection(u'Users').document(record['email'])
    doc_ref.set(record)
