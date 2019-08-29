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
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="control">
          <div className="field">
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="Your awesome email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="button is-primary is-inverted" type="submit">
              Notify me!
            </button>
          </div>
        </div>
      </form>
      <p>Let us send you reminder to save the world 🌲</p>
    </div>
  )
}

export default Subscribe
