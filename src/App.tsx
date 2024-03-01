import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { UserType } from "./types/type";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  // 新增使用者
  const handleAddUser = (name: string, email: string, age: number) => {
    setUsers((prevUsers) => {
      const newUsers: UserType = {
        id: crypto.randomUUID(),
        name,
        email,
        age,
      };
      return [...prevUsers, newUsers];
    });
  };

  //刪除使用者
  const handleDeleteUser =(id:string)=>{
    setUsers((prevUsers)=> prevUsers?.filter((user)=>user.id !== id))
  }

  return (
    <div>
      <AddUser handleAddUser={handleAddUser} />
      <hr />
      <UserList users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
