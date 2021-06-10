/* eslint-disable quotes */
import React  from 'react'
import Fade from './Fade'

const Animation = ({ formStatus }) => {	
	if (formStatus === 'Success'){
		return (
			<Fade myKey='Success' delay={300} from={"left"}>
   <h1 className="animation-success">Success</h1>
</Fade>
		
		)
	} else if (formStatus === 'Error'){
		return (
			<Fade myKey='error' delay={300} from={"left"}>
			<h1 className="animation-error">Error</h1>
	 </Fade>
		
		)
	}
	return null
}

export default Animation

	