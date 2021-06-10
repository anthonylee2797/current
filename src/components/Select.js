import React from 'react'

const Select = ({ label, value, onChange, options }) => {
	return (
        <div className="select">
            <label>
                <span className="select__label">{label}</span>
                <select className="select__field" value={value} onChange={(e) => onChange(e.target.value)}>
                    {options.map(option => <option className="select__option" value={option}>{option}</option>)}
                </select>
            </label>
        </div>
	)
}

export default Select