import { useState } from "react";

const Form = ({ array, setArray }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    phoneNumber: "",
  });
  let count = 10;
  function handleChangeName(event) {
    console.log(event.target.name);
    let name = event.target.name;
    let value = event.target.value;
    setNewUser({
      ...newUser,
      name: value,
    });
  }

  function handleChangePhoneNumber(event) {
    console.log(event.target.name);

    let value = event.target.value;

    setNewUser({
      ...newUser,
      phoneNumber: value,
    });
  }

  function handleClick() {
    let newItem = {
      id: count,
      name: newUser.name,
      phoneNumber: newUser.phoneNumber,
    };
    setArray([...array, newItem]);
    count++;
    setNewUser({
      name: "",
      phoneNumber: "",
    });
  }

  return (
    <div>
      <div>
        <input
          placeholder="Name"
          value={newUser.name}
          name="name"
          onChange={handleChangeName}
        />
      </div>
      <div>
        <input
          placeholder="PhoneNumber"
          name="phoneNumber"
          value={newUser.phoneNumber}
          onChange={handleChangePhoneNumber}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Form;
