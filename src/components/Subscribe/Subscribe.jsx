import React, { useState } from "react";
import "../../styles/subscribe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
// import { db } from '../../utils/firebase';

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const subscribe = async () => {
      try {
          const emailListRef = doc(db, 'emails', "emailList");

          await updateDoc(emailListRef, {
              emails: arrayUnion(email)
          });
      } catch (e) {
          console.error("Error adding document: ", e);
      }
  }

  return (
    <>
      <div>
        {/* <input type='text' onChange={(e) => { setEmail(e.target.value) }} />
            <button onClick={() => { subscribe() }}>Subscribe</button>
            <p>Are you looking for collaboration? Send an email </p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=Collaboration">Send an email</a> */}
      </div>

      <div className="subcontainer">
        <div className="leftcontainer">
          <div className="leftcontainer1">
            <h1 id="heading1">SUBSCRIBE TO OUR MAILING LIST</h1>
            <div className="lowercontainer flex">
              <input
                type="email"
                className="sub-input"
                placeholder="Enter your email here"

                onChange={(e) => { setEmail(e.target.value) }}
              />
              <button className="btnsubscribe" type="submit" onClick={() => { subscribe() }}>
                Subscribe
              </button>
            </div>
            <span>
              To see your mailing preferences,click here.If you are using a work
              email,you might need to whitelist cfa@iiti.ac.in to receive your
              emails.
            </span>
          </div>
        </div>
        <div className="rightcontainer">
          <div id="rightcontainer1">
            <div className="font-medium text-start text-white p-3">
              Are you looking forward to a collaboration? Send an email.
            </div>
           <span id="mailtext" > 
            <span >
              <a href="mailto:cfa@iiti.ac.in">
                <FontAwesomeIcon icon={faEnvelope} />
              <span> | Send an email</span>
            
             
            </a>
            </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
