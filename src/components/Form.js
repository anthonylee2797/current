/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import qs from 'qs'

import Input from './Input';
import Select from './Select';


const Form = () => {
	const [name, setName] = useState({ value: '', valid: true })
	const [email, setEmail] = useState({ value: '', valid: true })
	const [accountType, setAccountType] = useState('Individual')
	const [message, setMessage] = useState({ value: '', valid: true })
	const [dirty, setDirty] = useState(false)
	const [submit, setSubmit] = useState(true)

	const hasError = [name, email, message].some((input) => input.valid === false)
	const buttonText = getButtonText()

	function getButtonText () {
		if (!dirty) return 'Sign up'
		if (hasError) return 'Error'

		return 'Success!'
	}

	useEffect(() => {
		const {
			name: queryName,
			email: queryEmail,
			queryAccountType: queryAccountType,
			message: queryMessage
		} = qs.parse(window.location.search, { ignoreQueryPrefix: true })
		
		queryName && setName({ ...name, value: queryName })
		queryEmail && setEmail({ ...email, value: queryEmail })
		queryAccountType && setAccountType({ ...accountType, value: queryAccountType })
		queryMessage && setMessage({ ...message, value: queryMessage })
	}, [])

	function onSubmit(e) {
		e.preventDefault()
		setDirty(true)
		validateInput()
		setSubmit(!submit)
	}

	function validateInput() {
		const emailValidator = /\S+@\S+\.\S+/

		if (name.value.length === 0) {
			setName({ ...name, valid: false })
		} else {
			setName({ ...name, valid: true })
		}

		if (!emailValidator.test(email.value)) {
			setEmail({ ...email, valid: false })
		} else {
			setEmail({ ...email, valid: true })
		}

		if (message.value.length === 0) {
			setMessage({ ...message, valid: false })
		} else {
			setMessage({ ...message, valid: true })
		}
	}

	return (
		<React.Fragment>
			<div className="title">
				<h1 className="title-text">JOIN CURRENT TODAY</h1>
			</div>

			<div className="line"></div>

			<form  >
				<div className="form">
				<Input
					name="name"
					error="Please fill in your name"
					valid={name.valid}
					value={name.value}
					label="Your Name"
					placeholder="Who are you?"
					state={name}
					onChange={setName}
				/>

				<Input
					name="email"
					error="Please input valid email"
					valid={email.valid}
					value={email.value}
					label="Your Email"
					placeholder="you@gmail.com"
					state={email}
					onChange={setEmail}
				/>

				<Select
					name="account"
					value={accountType}
					options={['Individual', 'Parent', 'Teen']}
					label="Account Type"
					onChange={setAccountType}
				/>
				<Input
					name="message"
					error="Please fill out message"
					valid={message.valid}
					value={message.value}
					label="Message"
					placeholder="How did you hear about Current"
					state={message}
					onChange={setMessage}
				/>
				</div>
				<button
					className={classnames('button', { 'button--success': dirty && !hasError, 'button--error': dirty && hasError })}
					onClick={onSubmit}
					type="submit">
						<span>{buttonText}</span>
				</button>
			</form>
		</React.Fragment>
	)
}

export default Form