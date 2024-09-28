import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useMovie } from "../utils/MovieContext";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const { Title } = Typography;

const SoldOut = styled(Title)`
  color: #c74250 !important;
  margin: 0.5em 0 !important;
  text-align: left;
  font-weight: 800 !important;
  font-size: 18px !important;
`;

const TypoHeader = styled(Title)`
  color: white !important;
  margin: 0.5em 0 !important;
  text-align: left;
  font-weight: 800 !important;
  font-size: 18px !important;
`;

const Container = styled.div`
  margin-top: 54px;
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
  z-index: 10000;
`;

const ShowtimeButton = styled(Button)`
  background-color: #c74250; /* Default background color */
  color: white !important;
  padding: 20px !important;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background-color 0.3s ease;
  margin: 8px 8px 8px 0px;
  &:hover {
    background-color: #e05868 !important;
  }
`;

const movies = [
  {
    id: 1,
    title: "The Wild Robot",
    poster: img1,
  },
  {
    id: 2,
    title: "Devara",
    poster: img2,
  },

  {
    id: 3,
    title: "Meiyazhagan",
    poster: img3,
  },
  {
    id: 4,
    title: "Kishkindha Kaandam",
    poster: img4,
  },
  {
    id: 5,
    title: "Transformers One",
    poster: img5,
  },
  {
    id: 6,
    title: "Ashek",
    poster: img6,
  },

  {
    id: 7,
    title: "Never Let Go",
    poster: img7,
  },
  {
    id: 8,
    title: "Weekend in Taipei",
    poster: img8,
  },
];
const MovieShowtimes = () => {
  const [bookings, setBookings] = useState([]); // State to hold bookings
  const [error, setError] = useState(null); // State to hold any errors
  const { name } = useParams();
  const { selectedMovie } = useMovie();
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooking();
    if (selectedMovie == null) navigate("/");
  }, []);

  // Function to fetch bookings
  const getAllBooking = async () => {
    let { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("movie_name", name);

    if (error) {
      console.error("Error fetching bookings:", error);
      setError(error); // Set error state if there's an issue
    } else {
      console.log("🚀 ~ getAllBooking ~ bookings:", data);
      setBookings(data); // Store the bookings data in state
    }
  };

  const addBooking = async (date, time, name) => {
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ movie_name: name, date: date, time: time }])
      .select();
  };

  const filteredBookings = movies.filter((item) => item.title === name);

  return (
    <Container
      style={{
        backgroundImage: `url(${filteredBookings[0].poster})`,
        backgroundSize: "cover",
      }}
    >
      <StyledMovieList>
        {selectedMovie &&
          Object.entries(selectedMovie).map(([date, times]) => {
            const filteredBookings = bookings.filter(
              (booking) => booking.date === date
            );
            if (filteredBookings.length < 2) {
              return (
                <div key={date}>
                  <TypoHeader level={5}>{date}</TypoHeader>

                  <div style={{ display: "flex" }}>
                    {times.map((time, index) => (
                      <ShowtimeButton
                        key={index}
                        onClick={() => {
                          navigate(
                            `/ticket?date=${date}&time=${time}&movie-name=${name}`
                          );
                          console.log(
                            `date ${date}, time ${time} movie-name ${name}`
                          );
                          addBooking(date, time, name);
                        }}
                      >
                        {time}
                      </ShowtimeButton>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <>
                  <TypoHeader level={5}>{date}</TypoHeader>{" "}
                  <SoldOut level={5}>SOLD OUT</SoldOut>
                </>
              );
            }
          })}
      </StyledMovieList>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity for darkness
          zIndex: 0, // Ensure overlay is on top
        }}
      />
    </Container>
  );
};

export default MovieShowtimes;
