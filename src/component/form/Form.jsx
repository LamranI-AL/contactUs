import React, { useState } from 'react'
// import 'bootstrap//dist/css'
import { FormControl,Input,FormLabel ,FormHelperText ,FormErrorMessage ,Heading,Button} from '@chakra-ui/react'
const Form = () => {
    const [formValue,setFormValue]=useState({})
    const [inputEmail, setInputEmail] = useState('')
    
    const handelClick = (e)=>{
        e.preventDefault()
        const value= e.currentTarget.value
        const id= e.currentTarget.id
       
        setFormValue({...formValue,...{[id] : value} })
        setInputEmail(e.target.value)
        // setFormValue((prevStat)=>{return {...prevStat,...{[id] : value}} })
        // console.log(formValue)
    }
//   const handleInputChange = (e) => setInput(e.target.value)
  const isErrorEmail = inputEmail === ''
  const isErrorName = formValue === ''
  return (
    <>
        <Heading>Form</Heading>
        {JSON.stringify(formValue)}
        
        {/* <form  >
            <input type="text" onChange={handelClick} id='name' placeholder='ur name'/><br/>
            <input type="text" onChange={handelClick} id='age' placeholder='ur age' />
            <input type="text" onChange={handelClick} id='phoneNumber' placeholder='ur phone number' />
            <input type="email" onChange={handelClick} id='email' placeholder='aaaaaa@gmail.com'/><br/>
            <input type="submit" onClick={handelClick} value="enoyer" />
        </form> */}
        <FormControl isInvalid={isErrorEmail||isErrorName}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={inputEmail} id='email' onChange={handelClick} />
            {!isErrorEmail ? (
                <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
            <FormLabel>name</FormLabel>
            <Input type='name'id='name' placeholder='name' onChange={handelClick} />
            {!isErrorName ? (
                <FormHelperText>
                Enter the name you'd like to receive the newsletter on.
                </FormHelperText>
            ) : (
                <FormErrorMessage>name is required.</FormErrorMessage>
            )}
            <FormLabel></FormLabel>
            <Button className='btn btn-danger'>Valide</Button>
        </FormControl>
    </>
  )
}
export default Form
