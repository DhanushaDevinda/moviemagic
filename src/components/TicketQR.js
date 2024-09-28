import React, { useEffect } from "react";
import { Input, QRCode, Space, Typography } from "antd";
import styled from "@emotion/styled";
import { useParams, useSearchParams } from "react-router-dom";

import ticketBG from "../assets/ticketBG.svg";

const { Title } = Typography;

const Container = styled.div`
  margin-top: 64px;
  min-height: 70vh;
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const StyledMovieList = styled.div`
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
`;

const TypoHeader = styled(Title)`
  color: #262729 !important;
  font-weight: 800 !important;
  font-size: 18px !important;
  margin: 0px 0px 16px !important;
`;

const TypoSubTile = styled(Title)`
  color: #262729 !important;
  margin: 0px 0px 4px !important;
  font-weight: 400 !important;
  font-size: 14px !important;
`;

const TicketQR = () => {
  const { booking } = useParams();
  const [text, setText] = React.useState("");
  const [searchParams] = useSearchParams();

  // Access query parameters
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const movieName = searchParams.get("movie-name");

  useEffect(() => {
    // Set the text to booking only if it exists
    if (booking) {
      setText(booking);
    }

    // Log the parameters for debugging
    console.log("🚀 ~ useEffect ~ date:", date);
    console.log("🚀 ~ useEffect ~ time:", time);
    console.log("🚀 ~ useEffect ~ movieName:", movieName);
  }, [booking, date, time, movieName]); // Add dependencies to avoid infinite loops

  return (
    <Container>
      <StyledMovieList>
        <div
          style={{
            backgroundImage: `url(${ticketBG})`, // Use the imported image
            backgroundSize: "cover", // Adjusts to cover the entire div
            backgroundPosition: "center", // Centers the image
            height: "auto", // Adjust height as necessary
            width: "300px", // Set width
            borderRadius: "8px", // Optional: Add border radius for aesthetics
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for depth
          }}
        >
          <div style={{ padding: "42px 10px 30px" }}>
            <TypoSubTile>Movie name:</TypoSubTile>
            <TypoHeader>{movieName}</TypoHeader>

            <TypoSubTile>Date:</TypoSubTile>
            <TypoHeader>{date}</TypoHeader>

            <TypoSubTile>Time:</TypoSubTile>
            <TypoHeader>{time}</TypoHeader>
          </div>
          <div style={{ padding: "16px" }}>
            <Space direction="vertical" align="center">
              {date && time && movieName && (
                <QRCode
                  value={`date=${date}&time=${time}&movie-name=${movieName}`}
                  color="#262729"
                  size={130}
                  bordered={false}
                />
              )}
            </Space>
          </div>
        </div>
      </StyledMovieList>
    </Container>
  );
};

export default TicketQR;
