import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";

const ResultPage = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    
    const storedSurveys = localStorage.getItem("surveys");
    const parsedSurveys = storedSurveys ? JSON.parse(storedSurveys) : [];
    setAnswers(parsedSurveys);
  }, []);

  const handleDelete = (index) => {
   
    const updatedAnswers = [...answers];

    updatedAnswers.splice(index, 1);
   
    setAnswers(updatedAnswers);
   
    localStorage.setItem("surveys", JSON.stringify(updatedAnswers));
  };

  return (
  <Container maxWidth="sm" sx={{ marginTop: "1rem", textAlign: "center" }}>
  <Typography variant="h4" gutterBottom>
    Here are the results from your survey:
  </Typography>
  {answers.map((survey, index) => (
    <Paper
      key={index}
      elevation={3}
      sx={{ padding: "24px", marginTop: "1rem", textAlign: "left" }}
    >
      <Typography variant="h5" gutterBottom>
        Answer {index + 1}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>Date:</strong> {survey.date}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Question 1:</strong> {survey.answers.q1}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Question 2:</strong> {survey.answers.q2}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Question 3:</strong> {survey.answers.q3}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Question 4:</strong> {survey.answers.q4}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(index)}
        sx={{ marginTop: "1rem" }}
      >
        Delete Answer
      </Button>
    </Paper>
  ))}
</Container>


  );
};

export default ResultPage;
