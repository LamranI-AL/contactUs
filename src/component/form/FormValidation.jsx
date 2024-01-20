import React, { useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
  Checkbox,
  Button,
  Heading,
  Textarea,
  AlertTitle,
  AlertDescription,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

const FormValidation = () => {
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  // useEffect(() => {
  //   getData();
  // }, [errors]);

  const [isValidFormFinal, setIsFormValideFinal] = useState(false);
  // const [isValidForm, setIsFormValide] = useState();
  const [errors, setErrors] = useState({});
  const [isDesplyEroors, setIsDesplyEroors] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const messageRef = useRef();
  const acceptRef = useRef();
  useEffect(() => {
    getData();
  }, [errors]);

  const getData = () => {
    setErrors([]);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const age = ageRef.current.value;
    const isAcceptCondition = acceptRef.current.checked;
    if (name.trim() === "") {
      setErrors((prevStat) => {
        // return [...prevStat, { feild: "name", message: "name feild" }];
        return { ...prevStat, ...{ name: "name feild" } };
      });
    }
    if (age.trim() === "") {
      setErrors((prevStat) => {
        // return [...prevStat, { feild: "age", message: "age feild" }];
        return { ...prevStat, ...{ age: "age feild" } };
      });
    }
    if (email.trim() === "") {
      setErrors((prevStat) => {
        // return [...prevStat, { feild: "email", message: "email feild" }];
        return { ...prevStat, ...{ email: "email feild" } };
      });
    } else if (!email.match(/^\S+@\S+.\S$/)) {
      setErrors((prevStat) => {
        // return [...prevStat, { feild: "email", message: "email not formated" }];
        return { ...prevStat, ...{ email: "email not formated" } };
      });
    }
    if (message.trim() === "") {
      setErrors((prevStat) => {
        // return [...prevStat, { feild: "message", message: "message feild" }];
        return { ...prevStat, ...{ message: "message feild" } };
      });
    }
    if (!isAcceptCondition) {
      setErrors((prevStat) => {
        // return [...prevStat, { feild: "accept", message: "accept not checked" }];
        return { ...prevStat, ...{ Condition: "accept not checked" } };
      });
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsDesplyEroors(true);
    getData();
    if (Object.keys(errors).length === 0) {
      setIsFormValideFinal(true);
    }
    if (isValidFormFinal === true) {
      resetForm();
    }
  };

  const resetForm = () => {
    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    acceptRef.current.checked = false;
  };

  const getError = (feildName) => {
    return errors[feildName];
  };
  const hasError = (feildName) => {
    return getError(feildName) !== undefined;
  };
  const displayError = (feildName) => {
    const feild = document.querySelector(`#${feildName}`);
    // console.log(feild);
    if (hasError(feildName)) {
      return (
        <>
          {/* {(feild.style.border = "2px solide red")} */}
          <FormHelperText color={"red"}>{getError(feildName)}</FormHelperText>
        </>
      );
    } else {
      return (
        <FormHelperText color={"green"}>
          We'll never share your {feildName}
        </FormHelperText>
      );
    }
  };

  // return Object.entries(errors).filter(feildName === errors.name);
  // return Object.entries(errors).map((error, key) => {
  //   console.log(error);
  //   const [feild, message] = error;
  //   const eroor = error[0];
  //   console.log(feild);
  //   // console.log(eroor);
  //   if (eroor !== undefined) {
  //     return <FormErrorMessage>{message}</FormErrorMessage>;
  //   } else {
  //     return <p>okyy</p>;
  //   }

  // {
  //   feildName === feild ? (
  //     <FormErrorMessage>{message}</FormErrorMessage>
  //   ) : (
  //     ""
  //   );
  // }
  // return (
  //   <List>
  //     <ListItem key={key}>
  //       {" "}
  //       {feild} : {message}
  //     </ListItem>
  //   </List>
  // );
  // });
  // };
  // Object;
  // const [feild, message] = errors;
  // if (feildName === feild) {
  //   return <FormErrorMessage>{message}</FormErrorMessage>;
  // } else {
  //   return <FormHelperText>is okyyy!!!</FormHelperText>;
  // }

  // switch (feildName) {
  //   case "name":
  //     return <p>name incorrect</p>;
  //   case "age":
  //     return <p>age incorrect</p>;
  //   case "email":
  //     return <p>email incorrect</p>;
  //   case "message":
  //     return <p>message incorrect</p>;
  //   default:
  //     break;

  return (
    <>
      {Object.keys(errors).length > 0 && isDesplyEroors ? (
        <List>
          {Object.keys(errors).length > 0
            ? Object.entries(errors).map((eror, index) => (
                <Alert status="error">
                  <AlertIcon />
                  <ListItem key={index}>{eror}</ListItem>
                </Alert>
              ))
            : ""}
        </List>
      ) : (
        ""
      )}
      {isValidFormFinal && Object.keys(errors).length === 0 ? (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Message submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your Message. Our team will get back to you
            soon.
          </AlertDescription>
        </Alert>
      ) : (
        ""
      )}
      <Heading>Contact Us</Heading>
      <FormControl m={10} pl={15} width={800}>
        <FormLabel>Name</FormLabel>
        <Input type="name" id="name" ref={nameRef} />
        {displayError("name")}
        {/* <FormHelperText>We'll never share your name.</FormHelperText> */}
        <FormLabel>Email address</FormLabel>
        <Input type="email" id="email" ref={emailRef} />
        {displayError("email")}
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        <FormLabel>Age</FormLabel>
        <Input type="text" id="age" ref={ageRef} />
        {displayError("age")}
        {/* <FormHelperText>We'll never share your Age.</FormHelperText> */}
        <FormLabel>Message</FormLabel>
        <Textarea type="text" id="message" ref={messageRef} />
        {displayError("message")}
        {/* <FormHelperText>We'll never share your message.</FormHelperText> */}
        <div>
          <Checkbox id="Condition" ref={acceptRef}>
            {" "}
            Accept all condition{" "}
          </Checkbox>
          {displayError("Condition")}
        </div>
        <Button
          m={10}
          p={9}
          disabled={!isValidFormFinal}
          colorScheme="teal"
          onClick={handelSubmit}
          type="submit"
        >
          envoyer
        </Button>
      </FormControl>
    </>
  );
};

export default FormValidation;
