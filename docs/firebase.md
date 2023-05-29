# Firebase

## Start

- Make sure you have a project on [Firebase](https://console.firebase.google.com/)
- Add a web app to your project
- Copy the firebaseConfig when you create the app in Firebase
- Paste the config in your project, like [here](/src/Firebase/config.ts)
- Add firebase to your project: `npm install firebase`
- Add react-firebase-hooks: `npm install react-firebase-hooks`
- Add uuid: `npm install uuid @types/uuid`
- Initialize the app, firestore and auth, like [here](/src/Firebase/initialize.ts)

## Auth

- Enable authentication for your project in firebase
- Add signin method: Email/password
- Create a UI with input for email and password
- Implement the `createUserWithEmailAndPassword` function when clicked on a create account button
- Implement the `signInWithEmailAndPassword` function when login is clicked
- [Example](/src/Pages/Login/Login.tsx)
- [Docs](https://firebase.google.com/docs/auth/web/start)
- [Get current user](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user)

## Query data

- Create a collectionId for the table you want to query
- Create a query on how you wanna fetch the data, see the [docs](https://firebase.google.com/docs/firestore/query-data/queries) on how you can customize your query
- Add the query to the `useCollectionData` hook to fetch the data

- [Example](/src/Pages/Items/Items.tsx)

## Save item to DB

- You can use [this](/src/Firebase/saveItem.ts) function to save a new item in a table
- Pass the table name of where you wanna save the item and the object of the item itself
- The function will create a unique id for the item and save it in the DB