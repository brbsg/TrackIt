import React, { useState } from "react";

import { CheckBox, Container } from "./TodayHabitStyles";

import { BsCheck } from "react-icons/bs";
import axios from "axios";
import { useUser } from "../../../context/User";

export default function TodayHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
}) {
  const { user, update, setUpdate } = useUser();

  const [doneState, setDoneState] = useState(done);

  function handleCheckBox() {
    setUpdate(!update);

    if (doneState) {
      setDoneState(!doneState);

      axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        {},
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
    } else {
      setDoneState(!doneState);

      axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
    }
  }
  return (
    <Container>
      <div>
        <p>{name} </p>
        <p>Sequência atual:{currentSequence} </p>
        <p>Seu record:{highestSequence} </p>
      </div>

      <CheckBox
        onClick={handleCheckBox}
        style={{ backgroundColor: doneState ? " #8FC549" : " #ebebeb" }}
      >
        <BsCheck size={70} color="white" />
      </CheckBox>
    </Container>
  );
}
