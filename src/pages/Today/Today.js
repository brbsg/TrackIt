import React, { useEffect, useState } from "react";

import { Container, Footer, Header, Title, TodayButton } from "./TodayStyles";

import logoImg from "../../assets/TrackIt.png";
import { useUser } from "../../context/User";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";

import dayjs from "dayjs";
import { weekdays } from "dayjs/locale/pt-br";
import TodayHabit from "./TodayHabit/TodayHabit";
import { useNavigate } from "react-router-dom";

export default function Today({ getProgress }) {
  const navigate = useNavigate();

  const { user, progress, setProgress, update } = useUser();

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((res) => {
        setHabits(res.data);
      })
      .catch();
  }, [user, update, habits]);

  useEffect(() => {
    let count = 0;

    for (let element of habits) {
      if (element.done == true) count++;
    }

    setProgress((count / habits.length) * 100);
  }, [habits, update, getProgress]);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="" />
        <img
          style={{ width: 51, height: 51, borderRadius: "100%" }}
          src={user.image}
          alt=""
        />
      </Header>

      <Title>
        {weekdays[dayjs().day()]}, {dayjs().format("DD/MM")}
        {progress > 0 ? (
          <p style={{ color: "#8FC549" }}>
            {Math.ceil(progress)}% dos hábitos concluídos
          </p>
        ) : (
          <p>Nenhum hábito concluído ainda</p>
        )}
      </Title>

      {habits.map((element, index) => {
        return (
          <TodayHabit
            key={element.id}
            id={element.id}
            name={element.name}
            done={element.done}
            currentSequence={element.currentSequence}
            highestSequence={element.highestSequence}
          />
        );
      })}

      <Footer>
        <button onClick={() => navigate("/habitos")}>Hábitos</button>
        <TodayButton onClick={() => navigate("/hoje")}>
          <div>Hoje</div>
          <CircularProgressbar
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              trailColor: "#52b6ff",
              pathColor: "white",
            })}
            value={progress}
            background={true}
            backgroundPadding={5}
          />
        </TodayButton>
        <button onClick={() => navigate("/historico")}>Histórico</button>
      </Footer>
    </Container>
  );
}
