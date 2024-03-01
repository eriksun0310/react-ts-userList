
import { UserType } from "../types/type";
import User from './User';
import InfoBox from "./InfoBox";
type UserListProps = {
   users: UserType[]
   handleDeleteUser:(id:string)=>void
}

const UserList = ({users, handleDeleteUser}:UserListProps) => {

  if(users.length === 0){
    return <InfoBox mode="hint">...</InfoBox>
  }
  if(users.length >= 3){
    return <InfoBox mode="warning" severity="medium">...</InfoBox>
  }

  return (
    <div className="cards">
        {
            users.map((user)=>(
                <User 
                  key={user.id}
                  user={user} 
                  handleDeleteUser={handleDeleteUser}
                />
            ))
        }
    </div>
  )
}

export default UserList