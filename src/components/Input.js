import React from 'react'

const Input = ({ name, label, placeholder, value, onChange, valid, state, error }) => {
    return (
        <label className={`input input--${name}`}>
            <span className="input__label">{label}</span>
            <input className="input__field" value={value} placeholder={placeholder} onChange={(e) => onChange({ ...state, value: e.target.value })} />
            {valid === false ? <span className="input__error">{error}</span> : null}
        </label>
    )
}

export default Input