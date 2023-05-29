import React, { FC, useEffect, useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";

type DataType = {
  some_questions: string[];
}

const ResultPage: FC =() => {

  const [question, setQuestion] = useState<DataType>();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    
    const storedSurveys = localStorage.getItem("surveys");
    const parsedSurveys = storedSurveys ? JSON.parse(storedSurveys) : [];
    setAnswers(parsedSurveys);
  }, []);

  useEffect(() => {
    if (!question) {
      fetch("/data.json")
        .then((result) => result.json())
        .then((resultQuestion) => setQuestion(resultQuestion));
    }
  }, [question]);

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
        <strong>{question?.some_questions[0]}:</strong> {survey.answers.q1}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>{question?.some_questions[1]}:</strong> {survey.answers.q2}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>{question?.some_questions[2]}:</strong> {survey.answers.q3}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>{question?.some_questions[3]}:</strong> {survey.answers.q4}
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
