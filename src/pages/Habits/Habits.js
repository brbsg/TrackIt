import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AddIcon,
  Container,
  Footer,
  Header,
  Title,
  TodayButton,
} from "./HabitsStyles";
import RegisterHabit from "./RegisterHabit/RegisterHabit";

import logoImg from "../../assets/TrackIt.png";
import { useUser } from "../../context/User";

import { FaPlus } from "react-icons/fa";
import SingleHabit from "./SingleHabit/SingleHabit";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function Habits() {
  const navigate = useNavigate();
  const { user, progress } = useUser();

  const [habits, setHabits] = useState([]);

  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((res) => {
        setHabits(res.data);
      })
      .catch();
  }, [user, habits]);

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
        Meus Hábitos
        <AddIcon onClick={() => setShowRegister(!showRegister)}>
          <FaPlus color="white" size={12} />
        </AddIcon>
      </Title>

      <RegisterHabit show={showRegister} setShowRegister={setShowRegister} />

      {habits.length === 0 && (
        <div>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </div>
      )}

      {habits.map((element) => (
        <SingleHabit
          key={element.id}
          id={element.id}
          name={element.name}
          days={element.days}
        />
      ))}

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
