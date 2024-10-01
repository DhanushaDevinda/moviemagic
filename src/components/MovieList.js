// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import { Col, Row } from "antd";
import styled from "@emotion/styled";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Container = styled.div`
  margin-top: 64px;
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

const movies = [
  {
    id: 1,
    title: "The Gray Man",
    year: 2022,
    poster: img1,
    language: "English",
    showtimes: {
      "10-October-2024": ["7.00 PM"],
    },
  },
  {
    id: 2,
    title: "Extraction 2",
    year: 2023,
    poster: img2,
    language: "English",
    showtimes: {
      "15-October-2024": ["7.00 PM"],
    },
  },
  {
    id: 3,
    title: "Heart of Stone",
    year: 2023,
    poster: img3,
    language: "English",
    showtimes: {
      "12-October-2024": ["7.00 PM"],
    },
  },
  {
    id: 4,
    title: "Top Gun:Maverick",
    year: 2022,
    poster: img4,
    language: "English",
    showtimes: {
      "14-October-2024": ["7.00 PM"],
    },
  },
  {
    id: 5,
    title: "Fast & Furious(Hobbs & Shaw)",
    year: 2019,
    poster: img5,
    language: "English",
    showtimes: {
      "11-October-2024": ["7.00 PM"],
    },
  },
];

function MovieList() {
  return (
    <Container>
      <StyledMovieList>
        <Row gutter={6} justify="center">
          {movies.map((movie, index) => (
            <Col key={index} xs={12} sm={12} md={12} lg={6} xl={6}>
              <MovieCard
                title={movie.title}
                poster={movie.poster}
                language={movie.language}
                showtimes={movie.showtimes}
                year={movie.year}
              />
            </Col>
          ))}
        </Row>
      </StyledMovieList>
    </Container>
  );
}

export default MovieList;
