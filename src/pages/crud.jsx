import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { db } from '../firebaseconfig';
import { doc, addDoc, setDoc, collection, getDocs, getDoc, updateDoc } from "firebase/firestore";
// import { v4 as uuidv4 } from 'uuid';

import BooksTable from '../components/Table';


const Crud = () => {
    const [dataBooks, setDataBooks] = useState([]);
    const [name, setName] = useState("");
    // const [plan, setPlan] = useState("");
    const [aadharNo, setNo] = useState("");
    const [editstatus, setEditStatus] = useState(false);


    useEffect(() => {
        fetchDataFirestore();
    }, []);

    const setDataFirestore = async () => {
        if (name === "" || aadharNo === "") {
            alert("All fields are required!")
        } else {
            await addDoc(collection(db, "Members"), {
                name: name,
                aadharNo: aadharNo,
                // plan: plan
            });
            setName(name);
            // setPlan(plan);
            setNo(aadharNo);
            fetchDataFirestore();
        }

    }

    const fetchDataFirestore = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Members"));
            
            const newDataArray = querySnapshot.docs.map((doc) => {
                return doc.data()
            });

            console.log("---" + JSON.stringify(newDataArray))
            setDataBooks(newDataArray)
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }

    }

    const updateFirestore = async () => {

        try {
            // Reference the collection
            const collectionRef = collection(db, "Members");
        
            // Fetch all documents in the collection
            const querySnapshot = await getDocs(collectionRef);
        
            // Loop through each document and update fields
            querySnapshot.forEach(async (docSnapshot) => {
              const docRef = docSnapshot.ref; // Reference to the current document
        
              // Fields to update
              const updatedData = {
                name: name,
                aadharNo: aadharNo // Example field
              };
        
              // Update the document
              await updateDoc(docRef, updatedData);
            });
        
            console.log("Collection successfully updated!");
          } catch (error) {
            console.error("Error updating collection: ", error);
          }
    }

    return (
        <Container>
            <h1>CRUD Application</h1>
            <hr />
            <BooksTable dataBooks={dataBooks} setEditStatus={setEditStatus} editstatus={editstatus} setName={setName} setNo={setNo} />
            <hr />
            {editstatus ? <h1>Update Data</h1> : <h1>Add Data</h1>}
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>AadharNo</Form.Label>
                    <Form.Control type="text" value={aadharNo} onChange={(e) => setNo(e.target.value)} placeholder="AadharNo" />
                </Form.Group>
                {editstatus ? <><Button variant='primary' onClick={() => updateFirestore()} >Update</Button>&nbsp; &nbsp;<Button variant='primary' onClick={() => {
                    setEditStatus(false);
                    setName("");
                    setNo("");
                    // setId("");

                }

                } >Reset</Button></> : <Button variant='primary' onClick={() => setDataFirestore()} >Submit</Button>}
            </Form>
        </Container>
    );
};

export default Crud;