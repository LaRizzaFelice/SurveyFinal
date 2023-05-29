import React, { FC, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
} from "@mui/material";


type DataType = {
  some_questions: string[];
}


export const SurveyPage: FC =() => {

  const [question, setQuestion] = useState<DataType>();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!question) {
      fetch("/data.json")
        .then((result) => result.json())
        .then((resultQuestion) => setQuestion(resultQuestion));
    }
  }, [question]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
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

  const storedSurveys = localStorage.getItem("surveys");
  const parsedSurveys = storedSurveys ? JSON.parse(storedSurveys) : [];

  return (
    <Box padding={5}>
      <Container>
        {submitted ? (
          <div>
            <h2>Thank you for submitting the survey!</h2>
          </div>
        ) : (
          <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: "24px" }}>
              <Typography variant="h4" gutterBottom>
                Introductioncourse Survey
              </Typography>
              
              <form onSubmit={handleSubmit}>
              
                <Typography variant="h6" gutterBottom>
                  How satisfied are you with the overall quality of this course?
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
                  Would you recommend this training course to others in your organization or field?
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
    How satisfied are you with the content covered in the training course on a scale 1-10?
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
                  How helpful were the training activities and discussions in reinforcing your understanding?
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
