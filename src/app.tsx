import React, {useState, ReactElement} from 'react'
import form from './app.module.scss'

function App(): ReactElement {
  const [username, setUsername] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isUpdatesChecked, setIsUpdatesChecked] = useState<boolean>(false)
  const [isComChecked, setIsComChecked] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username,
      role,
      email,
      password,
      isUpdatesChecked,
      isComChecked,
    })
  }
  return (
    <div className={form.container}>
      <form role="form" name="multi-step-form" onSubmit={handleSubmit}>
        {/* ---- STEP-1 USER ----*/}
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* ---- STEP-2 PRIVACY ----*/}
        <div className={form.checkbox}>
          <input
            type="checkbox"
            name="updates"
            value="updates"
            checked={isUpdatesChecked}
            onChange={() => setIsUpdatesChecked(!isUpdatesChecked)}
          />
          <label htmlFor="updates">:Receive updates</label>
        </div>

        <div className={form.checkbox}>
          <input
            type="checkbox"
            name="communication"
            value="communication"
            checked={isComChecked}
            onChange={() => setIsComChecked(!isComChecked)}
          />
          <label htmlFor="communication">:Receive communication</label>
        </div>
        {/* ---- STEP-3 DONE ----*/}
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
