import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  return (
    <div className="subscribe">
      <input type="text" placeholder="Your awesome email" value={email} onChange={e => setEmail(e.target.value)} />
      <button >
        Notify me!
      </button>
    </div>
  )
}

export default Subscribe
