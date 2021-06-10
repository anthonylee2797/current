import React from 'react'

const Input = ({ label, placeholder, value, onChange, valid, state }) => {
	return (
        <label className="input">
            <span className="input__label">{label}</span>
            <input className="input__field" value={value} placeholder={placeholder} onChange={(e) => onChange({...state, value:e.target.value})} />
						{valid === 'false' ? <p className="input__error">This field is incorrect</p> : null}
        </label>
	)
}

export default Input