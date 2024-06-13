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
  };

  const clickonsubscribe = (event) => {
    event.preventDefault();
    setEmail("");
    alert('Your email is successfully added to our mailing list!');
    
  };
  const cfaemail = "https://mail.google.com/mail/?view=cm&fs=1&to=cfa@iiti.ac.in&su=Requestto%20Collaborate%20with%20CFA%20Club%2CIIT%20Indore&body=Hi!%20I%20want%20to%20collaborate%20with%20CFA.%0D%0A%0D%0A(This%20mail%20was%20auto-generated)";
  return (
    <>
      <div className="subcontainer">
        <div className="leftcontainer">
          <div className="leftcontainer1">
            <h1 id="heading1">SUBSCRIBE TO OUR MAILING LIST</h1>
            <div className="lowercontainer flex">
              <input
                type="email"
                className="sub-input"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btnsubscribe" type="submit" onClick={clickonsubscribe}>
                SUBSCRIBE
              </button>
            </div>
            <span>
            To set your mailing preferences, click here. If you are using a work email, you might need to whitelist cfa@iiti.ac.in to receive our emails.
            </span>
          </div>
        </div>
        <div className="rightcontainer">
          <div id="rightcontainer1">
            <div className="font-medium text-start text-white p-3">
              Are you looking forward to a collaboration? Send an email.
            </div>
            <span id="mailtext">
              <a href={cfaemail}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span> | Send an Email</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
