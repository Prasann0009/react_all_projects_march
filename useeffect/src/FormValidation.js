import { useState } from "react";


const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
function FormValidation() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const onChangeEmail = (e) => {
    const value = e.target.value;
    emailRegexp.test(value) ? setEmailError('') : setEmailError("Inavlid Email")
    setEmail(value);
  }

  return (
    <div className="App">
      <input
        placeholder="Email"
        onChange={onChangeEmail}
      // className={email && (isEmailValid ? 'valid' : 'invalid')}
      />
      <span>{emailError}</span>
    </div>
  );
}

export default FormValidation;
