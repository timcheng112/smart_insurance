import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('C:/Users/benedict halim/smart_insurance/backend/smart-insurance-e89d0-firebase-adminsdk-km7b0-89e0fad9fd.json')
firebase_admin.initialize_app(cred)

db=firestore.client()

#doc_ref = db.collection(u'Users').document(u'benhalim@email.com')
docs = db.collection(u'Users').stream()

for doc in docs:
    print(f'{doc.id} => {doc.to_dict()}')
#if doc.exists:
    #print(f'Document data: {doc.to_dict()}')
#else:
    #print(u'No such document!')
