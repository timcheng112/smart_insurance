import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('C:/Users/benedict halim/smart_insurance/backend/smart-insurance-e89d0-firebase-adminsdk-km7b0-89e0fad9fd.json')
firebase_admin.initialize_app(cred)

db=firestore.client()

Customer1={
    "Name":"John Doe",
    "Age":24,
    "Email": "JohnDoe@gmail.com"
}

data=[Customer1]

for record in data:
    doc_ref=db.collection(u'Users').document(record['Name'])
    doc_ref.set(record)