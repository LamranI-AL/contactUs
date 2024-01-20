import { React, isValidElement, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
  Heading,
  Input,
  Textarea,
  Checkbox,
  AlertIcon,
  Alert,
  ListItem,
  List,
} from "@chakra-ui/react";
const Form3 = () => {
  // const [formValue,setFormValue]=useState({})
  const [error, setError] = useState([]);
  //   const [isValideForm, setvalideForm] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkbutton, setcheckbutton] = useState();
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const messageRef = useRef();
  const acceptRef = useRef();
  // let isValideForm = true
  const validatForm = () => {
    setError([]);
    let isValideForm = true;
    let isErrorEmail = true;
    let isAgeError = true;
    let isErrorName = true;
    let isMessageError = true;
    let isAcceptCondition = true;

    // e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const checkbutton = acceptRef.current.checked;
    console.log(checkbutton);
    if (name.trim() === "") {
      setError((prevStat) => {
        return [...prevStat, "name field"];
      });
      isErrorName = false;
    }
    if (age.trim() === "") {
      setError((prevStat) => {
        return [...prevStat, "age field"];
      });
      isAgeError = false;
    }
    if (email.trim() === "") {
      setError((prevStat) => {
        return [...prevStat, "email field"];
      });
      isErrorEmail = false;
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError((prevStat) => {
        return [...prevStat, "email not formated"];
      });
    }
    if (message.trim() === "") {
      setError((prevStat) => {
        return [...prevStat, "message field"];
      });
      //   isMessageError = false;
    }
    if (!checkbutton) {
      setError((prevStat) => {
        return [...prevStat, "accept condition not valide"];
      });
      //   isAcceptCondition = false;
    }
    return (
      isValideForm,
      isErrorEmail,
      isErrorName,
      isMessageError,
      isAgeError,
      isAcceptCondition
    );
  };
  //   const isErrorEmail = email.trim() === "";
  //   const isErrorName = name.trim() === "";
  //   const isMessageError = message.trim() === "";
  //   const isAgeError = age.trim() === "";
  //   const isAcceptCondition = !checkbutton === false;
  const handelClick = (e) => {
    e.preventDefault();
    validatForm();
  };
  const isErrorEmail = email === "";
  const isErrorName = name === "";
  const isMessageError = message === "";
  const isAgeError = age === "";
  const isAcceptCondition = !checkbutton === false;

  return (
    <>
      <Heading>Contactez nous</Heading>
      {error && (
        <List>
          {error.length > 0
            ? error.map((eror, index) => (
                <Alert status="error">
                  <AlertIcon />
                  <ListItem key={index}>{eror}</ListItem>
                </Alert>
              ))
            : ""}
        </List>
      )}
      <FormControl isInvalid={isErrorName}>
        <FormLabel>name</FormLabel>
        <Input type="name" id="name" placeholder="name" ref={nameRef} />
        {!isErrorName ? (
          <FormHelperText>
            Enter the name you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>name is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isAgeError}>
        <FormLabel>Age</FormLabel>
        <Input type="name" id="name" placeholder="age" ref={ageRef} />
        {!isAgeError ? (
          <FormHelperText>
            Enter the name you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage> name is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isErrorEmail}>
        <FormLabel>Email</FormLabel>
        <Input type="email" id="email" ref={emailRef} />
        {!isErrorEmail ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isMessageError}>
        <Textarea placeholder="Ecrire votre message" ref={messageRef} />
      </FormControl>
      <FormControl isInvalid={isAcceptCondition}>
        <Checkbox isInvalid ref={acceptRef}>
          Accept conditions
        </Checkbox>
      </FormControl>
      <FormLabel></FormLabel>
      <Button onClick={handelClick}>Valide</Button>
    </>
  );
};

export default Form3;
