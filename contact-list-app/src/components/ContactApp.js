import { useEffect, useState } from "react";
import List from "./List";

const ContactApp = ({ array }) => {
  const [search, setSearch] = useState("");
  let filtered = array.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
      />

      <br />
      <br />

      <ul>
        {filtered.map((user) => {
          console.log("geldi");
          return (
            <List
              id={user.id}
              name={user.name}
              phoneNumber={user.phoneNumber}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactApp;
