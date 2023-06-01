import React, { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import {
  Box,
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";




type DataType = {
  some_questions: string[];
}

export type Answers = {
  q1?: string
  q2?: string
  q3?: string
  q4?: string
}


export const SurveyPage: FC =() => {

  const [question, setQuestion] = useState<DataType>();
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!question) {
      fetch("/data.json")
        .then((result) => result.json())
        .then((resultQuestion) => setQuestion(resultQuestion));
    }
  }, [question]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement>   = (event) => {
    event.preventDefault();
    
    const storedSurveys = localStorage.getItem("surveys");
    const parsedSurveys = storedSurveys ? JSON.parse(storedSurveys) : [];

    
    const newSurvey = {
      answers: { ...answers },
      date: new Date().toLocaleString(),
    };

    
    parsedSurveys.push(newSurvey);

    
    localStorage.setItem("surveys", JSON.stringify(parsedSurveys));

    setSubmitted(true);
  };


  const handleRedirect = () => {
    navigate("/");
  };


  return (
    <Box padding={5}>
      <Container>
        {submitted ? (
          <Box>
          <Box>
            <h2>Thank you for submitting the survey!</h2>
          </Box>
          <Button
                  variant="contained"
                  type="submit"
                  onClick={handleRedirect}
                  sx={{ marginTop: "16px" }}
                >
                  Go back to Homepage
                </Button>
                </Box>
        ) : (
          <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: "24px" }}>
              <Typography variant="h4" gutterBottom>
                Introductioncourse Survey
              </Typography>
              
              <form onSubmit={handleSubmit}>
              
                <Typography variant="h6" gutterBottom>
                  {question?.some_questions[0]}
                </Typography>
                <TextField
                  name="q1"
                  label="type here your answer"
                  value={answers.q1}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Typography variant="h6" gutterBottom>
                  {question?.some_questions[1]}
                </Typography>
                <TextField
                  name="q2"
                  label="type here your answer"
                  value={answers.q2}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <FormControl component="fieldset" required>
  <Typography variant="h6" gutterBottom>
    {question?.some_questions[2]}
  </Typography>
  <FormControlLabel
    control={
      <Radio
        name="q3"
        value="0-5"
        onChange={handleChange}
      />
    }
    label="0-5"
    required
  />
  <FormControlLabel
    control={
      <Radio
        name="q3"
        value="5-7"
        onChange={handleChange}
      />
    }
    label="5-7"
    required
  />
  <FormControlLabel
    control={
      <Radio
        name="q3"
        value="8-10"
        onChange={handleChange}
      />
    }
    label="8-10"
    required
  />
</FormControl>

                <Typography variant="h6" gutterBottom>
                  {question?.some_questions[3]}
                </Typography>
                <TextField
                  name="q4"
                  label="type here your answer"
                  value={answers.q4}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginTop: "16px" }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Container>
        )}
      </Container>
    </Box>
  );
};

export default SurveyPage;
