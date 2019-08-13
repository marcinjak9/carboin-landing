import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')


  const submitForm = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
    setEmail("")
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    submitForm({ email })
  } 

  return (
    <div className="subscribe">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Your awesome email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button >
          Notify me!
        </button>
      </form>
    </div>
  )
}

export default Subscribe
