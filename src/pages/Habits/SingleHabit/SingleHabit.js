import React, { useState } from "react";
import { WeekDay } from "../RegisterHabit/RegisterHabitStyles";

import { Container } from "./SingleHabitStyles";

import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { useUser } from "../../../context/User";

export default function SingleHabit({ id, name, days }) {
  const { user, update, setUpdate } = useUser();

  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleTrash() {
    // eslint-disable-next-line no-restricted-globals
    let question = confirm("Deseja mesmo excluir o hábito?");

    if (question === false) {
      return;
    }

    axios
      .delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((response) => console.log(response))
      .catch();
  }

  return (
    <Container>
      <div>
        {name}

        <BsTrash style={{ margin: 0 }} onClick={handleTrash} />
      </div>
      <div>
        {weekDays.map((element, index) => (
          <WeekDay
            key={index}
            id={index}
            className={days.includes(index) && "selected"}
          >
            {element}
          </WeekDay>
        ))}
      </div>
    </Container>
  );
}
