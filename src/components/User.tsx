import React from "react";
import { UserType } from "../types/type";

type UserProps = {
  user: UserType;
  handleDeleteUser: (id: string) => void;
};

const User = ({ user, handleDeleteUser }: UserProps) => {
  return (
    <div className="card">
      <p>id:{user.id}</p>
      <p>name:{user.name}</p>
      <p>email:{user.email}</p>
      <p>age:{user.age}</p>
      <div className="deleteBtn">
        <button
            onClick={() => {
            handleDeleteUser(user.id);
            }}
        >
            刪除使用者
        </button>
      </div>
    </div>
  );
};

export default User;
