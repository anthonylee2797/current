/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import {motion} from "framer-motion"
import Input from './Input';
import Select from './Select';
import Animation from './Animation'

const Form = () => {
	const [name, setName] = useState({'value': '', valid: true})
	const [email, setEmail] = useState({'value': '', valid: true})
	const [accountType, setAccountType] = useState('Individual')
	const [message, setMessage] = useState({'value': '', valid: true})
	const [formStatus, setformStatus] = useState('Sign Up')
	const [submit, setSubmit] = useState(true)

	useEffect(() => {
		handleFormStatus()
	},[submit])

	function onSubmit(e) {
		e.preventDefault()
		validateInput()
		setSubmit(!submit)
	}

	function handleFormStatus(){
		if (name.valid === 'false' || email.valid === 'false' || message.valid === 'false') {
			setformStatus('Error')
		} 
		else if (name.valid === 'true' && email.valid === 'true' && message.valid === 'true'){
			setformStatus('Success')
		}
		else if (formStatus === 'Sign Up'){
			console.log('')
		}
	}

	function validateInput(){
		const emailValidator = /\S+@\S+\.\S+/

		if (name.value.length === 0){
			setName({...name, valid: 'false'})
		} else {
			setName({...name, valid: 'true'})
		} 

		if (!emailValidator.test(email.value)){
			setEmail({...email, valid: 'false'})
		} else {
			setEmail({...email, valid: 'true'})
		}

		if (message.value.length === 0){
			setMessage({...message, valid: 'false'})
		} else {
			setMessage({...message, valid: 'true'})
		} 
	}

	return (
			<div>
				<div className="title">
					<h1 className="title-text">JOIN CURRENT TODAY</h1>
				</div>

				<div className="line"></div>

				<form className="form" >
					<Input valid={name.valid} value={name.value} label="Your Name" placeholder="Who are you?" state={name} onChange={setName}/>
					<Input valid={email.valid} value={email.value} label="Your Email" placeholder="you@gmail.com" state={email} onChange={setEmail}/>

					<Select value={accountType} options={['Individual','Parent','Teen']} label="Account Type" onChange={setAccountType}/>
					<Input valid={message.valid} value={message.value} label="Message" placeholder="How did you hear about Current" state={message} onChange={setMessage}/>
					<button className="button" onClick={onSubmit} type="submit">Sign Up</button>
					<Animation formStatus={formStatus}/>
				</form>
			</div>
	)
}

export default Form