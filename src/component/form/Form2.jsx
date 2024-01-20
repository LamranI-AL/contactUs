import React from 'react'

const Form2 = () => {
   // class Client {
    //     constructor(name,age,email,phoneNumber){
    //         this.name= name;
    //         this.age= age;
    //         this.email= email;
    //         this.phoneNumber =phoneNumber
    //     }
    // }
    // const[name,setName]=useState("")
    // const[age,setAge]=useState()
    // const[email,setEmail]=useState("")
    // const[phoneNumber,setPhone]=useState("")
    // // const[client,setClient]=useState([{name:String,age:Number,email:String,phoneNumber:String}])
    // const [clienList,setClientList]=useState([{}])
    
    const handelClick = (e)=>{
        e.preventDefault()
        // const id = e.currentTarget()
        console.log(e.currentTarget) 
        // Client.name = document.querySelector("#name").value
        // setName(name)
        // Client.age = document.querySelector("#age").value
        // setAge(age)
        // Client.email = document.querySelector("#email").value
        // setEmail(email)
        // Client.phoneNumber = document.querySelector("#phoneNumber").value
        // setPhone(phoneNumber)
        // setClientList(prevStat => {})
        // console.log(id)
    }
    const displyclient = ()=>{
    //     return clienList.map((clien,key )=>{
    //         return(<ul>
    //             <li key={key}>le nom de client: {clien.name}</li>
    //             <li>l'age de client : {clien.age}</li>
    //             <li>l'email de clet :{clien.email}</li>
    //             <li>l'num de client :{clien.phoneNumber}</li>
    //         </ul>)
    // })
}


  return (
    <>
    <h2>Form</h2>
    <form  >
        
        <input type="text" onChange={handelClick} id='name' placeholder='ur name'/><br/>
        
        <input type="text" onChange={handelClick} id='age' placeholder='ur age' />
        
        <input type="text" onChange={handelClick} id='phoneNumber' placeholder='ur phone number' />
        
        <input type="email" onChange={handelClick} id='email' placeholder='aaaaaa@gmail.com'/><br/>

        <input type="submit" onClick={handelClick} value="enoyer" />
    </form>
    <h2>les client </h2>
    <div>{displyclient()}</div>
    </>
  )
}

export default Form2
