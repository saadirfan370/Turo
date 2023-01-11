
import { Link,useNavigate } from "react-router-dom";
import {  getAuth,
    createUserWithEmailAndPassword,
    facebook_provider,
    google_provider,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
} from "../config/firebase";



function Home (){
    const navigate = useNavigate();
    const loginwithFacebook =()=>{
        const auth = getAuth();
        signInWithPopup(auth, facebook_provider)
        .then((result) => {
            // The signed-in user info.
            const user = result;
            console.log("user==>",user)
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log("error",errorMessage)

            // ...
        });
    }
    const loginwithGoogle = () => {
        const auth = getAuth();
signInWithPopup(auth, google_provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user==>",user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error==>", errorMessage);
    // ...
  });
    }
    return(
        <div>
            <h1>Home</h1>
            <button  onClick={loginwithFacebook}>Login with Facebook</button>
            <button onClick={loginwithGoogle}> Login with Google</button>
            {/* <button
            onClick={()=>
            navigate("/about",{
                state:{
                    name:"saad",
                    email:"saadirfan@gmail.com",
                    phone:3191970037,
                },
            })
            }
            >
                Go to about
            </button> */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;