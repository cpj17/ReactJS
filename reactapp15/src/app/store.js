import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
//import storage from "redux-persist/lib/storage";  //this for local storage
import storage from "redux-persist/lib/storage/session";  //this for session storage
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import counterReducer2 from "../features/counter/counterSlice2";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import CryptoJS from "crypto-js";


//store before encrypt code (starts)
const secretKey = 'yourSecretKey'; // Replace with your secret key

// Custom serializer to encrypt data
const encryptSerializer = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encryptedData;
};

// Custom deserializer to decrypt data
const decryptDeserializer = (serializedData) => {
  const bytes = CryptoJS.AES.decrypt(serializedData, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    serialize: encryptSerializer,
    deserialize: decryptDeserializer,
}

//store before encrypt code (ends)

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage
// }

const reducer = combineReducers({
    counter: counterSlice,
    counter2: counterReducer2
})

const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//   })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })