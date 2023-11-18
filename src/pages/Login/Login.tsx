import React from 'react'
import {
  FormStyled,
  HeadingStyled,
  RootStyled,
} from './Login.styled'

const Login: React.FC = () => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <RootStyled>
      <HeadingStyled>Login</HeadingStyled>
      <FormStyled onSubmit={(event) => {
        event.preventDefault()

        // eslint-disable-next-line no-alert
        alert(`Login: ${login}\nPassword: ${password}`)
      }}
      >
        <label>
          <div>Login</div>
          <input
            type="text"
            value={login}
            onChange={event => setLogin(event.target.value)}
          />
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </FormStyled>
    </RootStyled>
  )
}

export default Login
