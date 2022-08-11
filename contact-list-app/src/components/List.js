const List = ({ name, phoneNumber }) => {
  console.log("list geldi");
  return (
    <li>
      <span> {`Name: ${name}`}</span>
      <span> {`| Phone Number: ${phoneNumber}`}</span>
    </li>
  );
};

export default List;
