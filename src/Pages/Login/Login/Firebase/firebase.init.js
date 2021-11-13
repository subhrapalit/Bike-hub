import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase";


const intializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default intializeAuthentication;