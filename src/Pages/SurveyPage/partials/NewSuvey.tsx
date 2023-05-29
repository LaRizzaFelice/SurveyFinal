import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";

type Question = {
  question: string;
};

export const CreateSurveyPage: FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestion(event.target.value);
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { question: newQuestion },
      ]);
      setNewQuestion("");
    }
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  const handleSaveSurvey = () => {
    const data = { some_questions: questions.map((q) => q.question) };
    fetch("/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/surveypage");
      })
      .catch((error) => {
        console.error("Error updating data.json:", error);
      });
  };

  const handleCancel = () => {
    navigate("/surveypage");
  };

  return (
    <Box padding={5}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: "24px" }}>
          <Typography variant="h4" gutterBottom>
            Create New Survey
          </Typography>

          <Typography variant="h6" gutterBottom>
            Enter the questions for the survey:
          </Typography>

          {questions.map((question, index) => (
            <Box key={index} display="flex" alignItems="center" marginBottom={2}>
              <Typography variant="body1">{question.question}</Typography>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleRemoveQuestion(index)}
                sx={{ marginLeft: "auto" }}
              >
                Remove
              </Button>
            </Box>
          ))}

          <Box display="flex" alignItems="center" marginBottom={2}>
            <TextField
              label="Question"
              value={newQuestion}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button
              variant="outlined"
              onClick={handleAddQuestion}
              disabled={newQuestion.trim() === ""}
            >
              Add Question
            </Button>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={handleSaveSurvey}
              disabled={questions.length === 0}
              sx={{ marginRight: 2 }}
            >
              Save
            </Button>
            <Button variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CreateSurveyPage;
