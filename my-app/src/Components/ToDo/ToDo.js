import { Input, Button } from "antd";
import React, { useState } from "react";

import { Divider, List, Typography } from "antd";

const ToDo = ({ item, tasks, setTasks }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(item.title);
  console.log(item);
  const removeTask = (id) => {
    const filteredArr = tasks.filter((item) => item.id != id);
    setTasks(filteredArr);
  };
  const editTask = () => {
    setIsEdit(!isEdit);
  };
  const saveEditTask = (id) => {
    const newArrFilter = tasks.map((item) =>
      item.id === id ? { ...tasks, title: text } : item
    );
    setTasks(newArrFilter);

    setIsEdit(!isEdit);
  };

  const newValueInput = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      {isEdit ? (
        <>
          <Input
            onChange={newValueInput}
            placeholder="Введите новое задание"
            value={text}
          />
          <Button type="primary" onClick={() => saveEditTask(item.id)}>
            сохранить
          </Button>
        </>
      ) : (
        <p>
          {item.title}
          <Button type="primary" onClick={() => removeTask(item.id)}>
            удалить
          </Button>
          <Button type="primary" onClick={() => editTask(item.id)}>
            редактировать
          </Button>
        </p>
      )}
    </>
  );
};
export default ToDo;
