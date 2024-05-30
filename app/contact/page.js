"use client";
import React, { useState } from 'react';
import styles from '../../styles/contact.module.css';



export default function Home() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(first, last, email, phone, desc);
    const data = {
      first,
      last,
      email,
      phone,
      desc
    }

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }) .then((response) => response.json()).then((data) => {
      alert("Thank you for contacting us. We will get back to you soon!");
      handleReset();
    }).catch((error) => {
      console.error('Error:', error);
    })
  }

  const handleChange = (event) => {
    if (event.target.name == 'phone'){
      setPhone(event.target.value)
    } else if (event.target.name == 'email'){
      setEmail(event.target.value)
    } else if (event.target.name == 'first'){
      setFirst(event.target.value)
    } else if (event.target.name == 'last'){
      setLast(event.target.value)
    } else if (event.target.name == 'desc'){
      setDesc(event.target.value)
    }
  }

  const handleReset = () => {
    setFirst('')
    setLast('')
    setEmail('')
    setPhone('')
    setDesc('')
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} onReset={handleReset} >
        <h1 className={styles.conth1}>Contact Us</h1>
        <div className="email block">
          <input className={styles.containerinput}
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder='Email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="block phone">
          <input className={styles.containerinput}
            id="frm-phone"
            type="number"
            name="phone"
            autoComplete="number"
            placeholder='Phone Number'
            value={phone}
            onChange={handleChange}
            pattern='[0-9]{10}'
            required
          />
        </div>
        <div className={styles.namediv}>
          <div>
            <input className={styles.containerinput1}
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              placeholder='First Name'
              value={first}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input className={styles.containerinput}
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              placeholder='Last Name'
              value={last}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="message block">
          <textarea id="frm-message" rows="6" className={styles.containerinput} placeholder='Elaborate your concern here...' value={desc} onChange={handleChange} name="desc"></textarea>
        </div>
        <div className="button block">
          <button type="submit">Submit</button>
          <button type="reset" className='float-right'>Reset</button>
        </div>
      </form>
    </main>
  );
}