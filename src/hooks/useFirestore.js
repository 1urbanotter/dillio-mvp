// src/hooks/useFirestore.js
import { db } from "../FirebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

export const useFirestore = (collectionName) => {
  const collectionRef = collection(db, collectionName);

  const addDocument = async (data) => {
    return await addDoc(collectionRef, data);
  };

  const getDocuments = async () => {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const deleteDocument = async (id) => {
    const docRef = doc(db, collectionName, id);
    return await deleteDoc(docRef);
  };

  return { addDocument, getDocuments, deleteDocument };
};