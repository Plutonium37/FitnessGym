import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './login.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebaseconfig.jsx'
import { setDoc, doc } from 'firebase/firestore'

const Foorm = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();
  
    // Check if the user has filled out all fields
    if (!name) {
      alert("Please enter your name.");
    } else if (!email) {
      alert("Please enter your email.");
    } else if (!password) {
      alert("Please enter your password.");
    } else if (!/\S+@\S+\.\S+/.test(email)) { // email validation
      alert("Please enter a valid email address.");
    } else if (password.length < 6) { // password validation
      alert("Password must be at least 6 characters long.");
    } else {
      try {
        console.log("Creating user with email:", email);
        console.log("User name:", name);
  
        // Create user with email and password
        await createUserWithEmailAndPassword(auth, email, password);
        
        // set user data in Firestore
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: name,
          });
        }
  
        // Redirect to dashboard page
        setTimeout(function() {window.location.href = "/dashboard"},1000)
  
      } catch (e) {
        // Handle errors (e.g., email already in use, weak password, etc.)
        console.error(e.message);
        alert("An error occurred while signing up: " + e.message);
      }
    }
  };

  return (
    <div className="foorm">
      <Form className='d-flex flex-column align-items-center pt-5' onSubmit={handleSignUp}>
        <Form.Group className="mb-3 w-75">
          <Form.Label className='d-flex justify-content-center text-lg'>
            <h2>SignUp</h2>
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 w-75" >
          <Form.Label className='d-flex justify-content-start'>Name</Form.Label>
          <Form.Control className='' onChange={(e) => { setName(e.target.value) }} type="text" placeholder="name" />
        </Form.Group>
        <Form.Group className="mb-3 w-75" >
          <Form.Label className='d-flex justify-content-start'>Email address</Form.Label>
          <Form.Control className='' onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-75" >
          <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
          <Form.Control className='' onChange={(e) => { setPassword(e.target.value) }} type="password" />
        </Form.Group>
        <button class="btn btn-outline-warning text-black mt-2" type="submit">Submit</button>
      </Form>
    </div>
  );

}

export default Foorm;