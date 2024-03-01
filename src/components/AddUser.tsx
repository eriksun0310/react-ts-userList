import React, { FormEvent, useRef, useState, ReactNode } from "react";
import { z } from "zod";
import Input from "./Input";

// 自定義欄位規則
const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(12),
});

type AddUserProps = {
  handleAddUser: (name: string, email: string, age: number) => void;
};

const AddUser = ({ handleAddUser }: AddUserProps) => {
  const [error, setError] = useState<ReactNode>(null);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  // 送出 新增使用者
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 斷言name.current!不會是空值 const nameValue: string
    // 斷言name.current? 可能會是空值 const nameValue: string | undefined
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const ageValue = Number(age.current?.value);

    const validationResult = UserSchema.safeParse({
      name: nameValue,
      email: emailValue,
      age: ageValue,
    });
    if (validationResult.success) {
      // 清空input 欄位
      e.currentTarget.reset()
      setError(null);
      handleAddUser(nameValue, emailValue, ageValue);
    } else {
      const errorMsg = validationResult.error.issues?.map((issue) => (
        <div>
          {issue.path[0]}:{issue.message}
        </div>
      ));

      setError(errorMsg);
    }
  };
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="姓名" ref={name} />
        <input type="text" name="email" placeholder="信箱" ref={email} />
        <input type="number" name="age" placeholder="年齡" ref={age} />
        <Input id="test" label="test"  placeholder="test..." ref={name} />
        <button>新增使用者</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default AddUser;
