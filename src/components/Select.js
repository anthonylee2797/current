/* eslint-disable no-undef */
import React from 'react'

const Select = ({ name, label, value, onChange, options }) => {
	return (
        <label className={`select select--${name}`}>
            <span className="select__label">{label}</span>
            <select className="select__field" value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => <option key={`${index}${option}`} className="select__option" value={option}>{option}</option>)}
            </select>
        </label>
	)
}

export default Select