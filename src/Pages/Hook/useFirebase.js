// import { useState } from "react";
// import initializeFirebase from "../Page/Login/Firebase/firebase.init";
// import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged , signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
// import { useEffect } from "react";



// initializeFirebase();


// const useFirebase = () => {

// const [user, setUser] = useState({});
// const [authError, setAuthError] = useState('');
// const [isLoding, setIsLoding] = useState(true);

// const auth = getAuth();
// const googleProvider = new GoogleAuthProvider();


// const bandNewUser = (email, password) => {
//   setIsLoding(true);
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   })
//   .finally( () => setIsLoding(false));



// };



// const logOutUser = () => {
//   setIsLoding(true);
//   signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   })
//   .finally( () => setIsLoding(false));


// };



// const logInUser = (email, password) => {
//   setIsLoding(true);
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   })
//   .finally( () => setIsLoding(false));
// }


// const loginWithGoogle = (hostory) => {
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       const user = result.user;

      
//       hostory.replace('/')

//     }).catch((error) => {
//       setAuthError(error.message);
//       console.log(error);
//     });

// }

// useEffect( () => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setUser(user)
//     } else {
//       setUser({})
//     }
//     setIsLoding(false)
//   });

//   return () => unsubscribe;
  
// }, [])





// return {
//   user,
//   isLoding,
//   authError,
//   bandNewUser,
//   logOutUser,
//   logInUser,
//   loginWithGoogle
// }

// }


// export default useFirebase;