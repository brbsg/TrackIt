import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, WeekDay, Footer } from "./RegisterHabitStyles";
import { useUser } from "../../../context/User";

export default function RegisterHabit({ show, setShowRegister }) {
  const { user, update, setUpdate } = useUser();

  const [name, setName] = useState("");
  const [habit, setHabit] = useState({
    name: "",
    days: [],
  });

  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleSaveButton() {
    let selectedElements = document.getElementsByClassName("selected");
    let days = [];

    for (let e of selectedElements) {
      days.push(Number(e.id));
    }

    setHabit({ name, days });
    setShowRegister(false);
    setUpdate(!update);
  }

  useEffect(() => {
    if (habit.name !== "" && habit.days.length !== 0) {
      axios
        .post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          habit,
          { headers: { Authorization: `Bearer ${user.token}` } }
        )
        .then((response) => {})
        .catch();
    }
  }, [habit, user]);

  return (
    <Container style={{ display: show ? "inherit" : "none" }}>
      <input
        placeholder="nome do hábito"
        onChange={(e) => setName(e.target.value)}
      />
      <div style={{ width: "100%", margin: 0 }}>
        {weekDays.map((element, index) => (
          <WeekDay
            key={index}
            id={index}
            onClick={(e) => e.target.classList.toggle("selected")}
          >
            {element}
          </WeekDay>
        ))}
      </div>

      <Footer>
        <button onClick={() => setShowRegister(false)}>Cancelar</button>
        <button onClick={handleSaveButton}>Salvar</button>
      </Footer>
    </Container>
  );
}
