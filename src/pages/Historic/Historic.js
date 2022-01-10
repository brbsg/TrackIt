import React from "react";

import { Container, Footer, Header, TodayButton } from "./HistoricStyles";

import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/TrackIt.png";
import { useUser } from "../../context/User";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function Historic() {
  const navigate = useNavigate();

  const { user, progress, setProgress, update } = useUser();

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

      <div>Histórico</div>
      <div>Em breve você poderá ver o histórico dos seus hábitos aqui!</div>

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
