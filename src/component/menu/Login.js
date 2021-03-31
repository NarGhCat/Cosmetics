import '../../styles/login.css'
import React, { useEffect, useState } from 'react'
import pLogo from '../../Pics/pink-logo.png'
import { useHistory } from "react-router-dom";
import { db, auth } from '../../index'
const Login = (props) => {

  const history = useHistory()
  const [values, setValues] = useState({
    email: "",
    password: "",
    errorMessage: "",
    errorCode: ''
  });
  // const dispatch = useDispatch()
  let submitNewValues = { ...values }

  const handleChange = (e) => {
    if (e.target.type === 'email') {
      submitNewValues.email = e.target.value
    } else if (e.target.type === 'password') {
      submitNewValues.password = e.target.value
    }
    setValues(submitNewValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var user = userCredential.user;
        // 
        console.log(user.uid)
        db.collection("users").get(user.uid).then((querySnapshot) => {
          // querySnapshot.forEach((doc) => {
          // if (user.uid === doc.data().uid) {
          submitNewValues.errorMessage = ' '
          history.push('/')
          // }
          // });
        });
      })
      .catch((error) => {
        submitNewValues.errorCode = error.code;
        submitNewValues.errorMessage = error.message;
        setValues(submitNewValues)
        console.log(error.code, error.message)
      });
  }
  console.log(values)


  return (
    <>
      <div className='login-main'>
        <div className='login-container'>
          <div className='login-logo'>
            <div className='logo'>
              <span><img src={pLogo} alt={pLogo} /></span>
            </div>
          </div>
          <div className='login-form'>
            <div className='form'>
              <form onSubmit={handleSubmit}>
                <input type='email' value={values.email} onChange={handleChange} placeholder='E-mail' required />
                <input type='password' value={values.password} onChange={handleChange} placeholder='Password' required />
                <span className='error-massage'>{(values.errorMessage ? values.errorMessage : '')}</span>
                <input className='submit' type='submit' value='LOG IN' />
              </form>
            </div>
          </div>
          <div className='in-login-create-newAcc-btn'>
            <div className='create-newAcc-btn'>
              <a href='/signup'>Register A Account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login




// import Form from "./LoginInput";
// import Main from "../section/Main";
// import { auth } from "../../index";
// import Nav from "./Nav";
// import Footer from "../section/Footer";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

// // firebase
// //   .auth()
// //   .createUserWithEmailAndPassword(email, password)
// //   .then((userCredential) => {
// //     // Signed in
// //     var user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //     // ..
// //   });

// function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [signUpEmail, setSignUpEmail] = useState("");
//   const [signUpPassword, setSignUpPassword] = useState("");
//   const [signUpForm, setSignUpForm] = useState(false);

//   const history = useHistory()

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleSignUpEmail = (e) => {
//     setSignUpEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleSignUpPassword = (e) => {
//     setSignUpPassword(e.target.value);
//   };

//   useEffect(() => {
//     auth.onAuthStateChanged(function (user) {
//       setLoggedInUser(user);
//     });
//   });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log('login')
//         history.push('/')
//         setStatus("succeeded");

//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//       });
//   };

//   const onSignupBtnClick = (e) => {
//     e.preventDefault();
//     auth
//       .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;

//         setLoggedInUser(user);
//         setStatus("succeeded");

//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ..
//       });
//   };

//   const openSignup = () => {
//     setSignUpForm(true);
//   };

//   const logout = () => {
//     auth.signOut();
//   };

//   if (status === "succeeded") {
//     return (
//       <div>
//         {/* <Link to="/" id="logo"></Link> */}
//         <Nav email={email} signUpEmail={signUpEmail} logout={logout} />,
//         <Main />,
//         <Footer />

//       </div>
//     );
//   }
//   return (
//     <Form
//       email={email}
//       signUpEmail={signUpEmail}
//       password={password}
//       signUpPassword={signUpPassword}
//       status={status}
//       handleEmail={handleEmail}
//       handlePassword={handlePassword}
//       handleLogin={handleLogin}
//       onSignupBtnClick={onSignupBtnClick}
//       handleSignUpEmail={handleSignUpEmail}
//       handleSignUpPassword={handleSignUpPassword}
//       loggedInUser={loggedInUser}
//       openSignup={openSignup}
//       signUpForm={signUpForm}
//       logout={logout}
//     />
//   );
// }