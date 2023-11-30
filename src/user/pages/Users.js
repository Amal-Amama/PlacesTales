import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "abdo zayed",
      image:
        "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/369243633_3602861563291213_6842701610872310817_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HP1WNEXWs1EAX-f0zVb&_nc_ht=scontent.ftun9-1.fna&oh=00_AfArWpIpHWL1Alueuvu6h4eKi8HFYRCxkV7e9zaZwwduOA&oe=6540DB05",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
