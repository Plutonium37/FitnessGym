import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './login.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebaseconfig.jsx'
import { setDoc, doc } from 'firebase/firestore'

const Foorm = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSignUp = async () => {
    if (!name) {
      alert("Name please")
    }
    else if (!email) {
      alert("Mail please")
    }
    else if (!password) {
      alert("Password is required")
    } else 
    {
      try {
        // Authentication
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user.email);
        console.log(name);
        // Firestore
        if (user) {
          await setDoc(doc(db, "Members", user.uid), {
            name: name,
            email: user.email
          });
        }
        window.location.href = "/services"
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  return (
    <div className="foorm">
      <Form className='d-flex flex-column align-items-center pt-5' onSubmit={handleSignUp}>
        <Form.Group className="mb-3 w-75">
          <Form.Label className='d-flex justify-content-center text-lg'>
            <h2>LogIn</h2>
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