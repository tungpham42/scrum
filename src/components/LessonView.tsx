import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Radio,
  Button,
  Space,
  message,
  Alert,
  Divider,
  Grid,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Lesson } from "../types";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

interface Props {
  lesson: Lesson;
  onComplete: () => void;
}

const LessonView: React.FC<Props> = ({ lesson, onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const screens = useBreakpoint();
  const isMobile = screens.md === false;

  useEffect(() => {
    setAnswers({});
    setIsSubmitted(false);
    setScore(0);
  }, [lesson.id]);

  const handleAnswerChange = (exerciseId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [exerciseId]: value }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    lesson.exercises.forEach((ex) => {
      if (answers[ex.id] === ex.correctAnswer) {
        currentScore += 1;
      }
    });

    setScore(currentScore);
    setIsSubmitted(true);

    if (currentScore === lesson.exercises.length) {
      message.success({
        content: "Perfect! You have mastered this lesson.",
        icon: <TrophyOutlined style={{ color: "#F59E0B" }} />,
        style: { fontSize: "16px", fontWeight: 600 },
      });
      onComplete();
    } else {
      message.warning({
        content: `You scored ${currentScore} out of ${lesson.exercises.length}. Review the material and try again.`,
        style: { fontSize: "15px", fontWeight: 500 },
      });
    }
  };

  const allAnswered = Object.keys(answers).length === lesson.exercises.length;
  const isPerfect = score === lesson.exercises.length;

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      {/* Lesson Header & Content */}
      <div style={{ marginBottom: isMobile ? "32px" : "48px" }}>
        <Title
          level={1}
          style={{
            fontSize: isMobile ? "28px" : "36px",
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-0.5px",
            marginBottom: "20px",
          }}
        >
          {lesson.title}
        </Title>
        <Paragraph
          style={{
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.8",
            color: "#4B5563",
            background: "#F9FAFB",
            padding: isMobile ? "16px" : "24px",
            borderRadius: "12px",
            borderLeft: "4px solid #4F46E5",
          }}
        >
          {lesson.content}
        </Paragraph>
      </div>

      <Divider style={{ borderColor: "#E5E7EB" }} />

      {/* Quiz Section */}
      <Title
        level={3}
        style={{
          fontWeight: 700,
          marginBottom: "24px",
          color: "#111827",
          fontSize: isMobile ? "20px" : "24px",
        }}
      >
        Knowledge Check
      </Title>

      {lesson.exercises.map((exercise, index) => {
        const correctAnswerText = exercise.options.find(
          (opt) => opt.id === exercise.correctAnswer,
        )?.text;

        return (
          <Card
            key={exercise.id}
            style={{
              marginBottom: "24px",
              borderColor: "#E5E7EB",
              boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
            }}
          >
            <Paragraph
              style={{
                fontSize: isMobile ? "15px" : "16px",
                fontWeight: 600,
                color: "#1F2937",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#4F46E5", marginRight: "8px" }}>
                {index + 1}.
              </span>
              {exercise.question}
            </Paragraph>

            <Radio.Group
              onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
              value={answers[exercise.id]}
              disabled={isSubmitted && isPerfect}
              style={{ width: "100%" }}
            >
              <Space
                direction="vertical"
                style={{ width: "100%", gap: isMobile ? "8px" : "12px" }}
              >
                {exercise.options.map((option) => (
                  <Radio
                    key={option.id}
                    value={option.id}
                    style={{
                      width: "100%",
                      padding: isMobile ? "10px 12px" : "12px 16px",
                      borderRadius: "8px",
                      background:
                        answers[exercise.id] === option.id
                          ? "#EEF2FF"
                          : "#ffffff",
                      border: `1px solid ${answers[exercise.id] === option.id ? "#818CF8" : "#E5E7EB"}`,
                      transition: "all 0.2s",
                      alignItems: "flex-start", // Ensures text aligns nicely with the radio button on wrapping
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? "14px" : "15px",
                        color: "#374151",
                        whiteSpace: "normal",
                        display: "inline-block",
                        verticalAlign: "top", // Adjust vertical alignment for multiline options on mobile
                        lineHeight: 1.5,
                      }}
                    >
                      {option.text}
                    </span>
                  </Radio>
                ))}
              </Space>
            </Radio.Group>

            {/* Post-Submission Feedback */}
            {isSubmitted && (
              <div
                style={{
                  marginTop: "24px",
                  animation: "fadeIn 0.3s ease-in-out",
                }}
              >
                {answers[exercise.id] === exercise.correctAnswer ? (
                  <Alert
                    message={<span style={{ fontWeight: 600 }}>Correct!</span>}
                    type="success"
                    showIcon
                    icon={<CheckCircleOutlined />}
                    style={{
                      borderRadius: "8px",
                      background: "#ECFDF5",
                      borderColor: "#A7F3D0",
                    }}
                  />
                ) : (
                  <Alert
                    message={
                      <span style={{ fontWeight: 600 }}>Not quite right</span>
                    }
                    description={`The correct answer is: ${correctAnswerText}`}
                    type="error"
                    showIcon
                    icon={<CloseCircleOutlined />}
                    style={{
                      borderRadius: "8px",
                      background: "#FEF2F2",
                      borderColor: "#FECACA",
                    }}
                  />
                )}
              </div>
            )}
          </Card>
        );
      })}

      <div
        style={{ marginTop: "40px", textAlign: isMobile ? "center" : "right" }}
      >
        <Button
          type="primary"
          size="large"
          onClick={handleSubmit}
          disabled={!allAnswered || (isSubmitted && isPerfect)}
          style={{
            width: isMobile ? "100%" : "auto", // Full width button on mobile
            height: "56px",
            padding: "0 40px",
            fontSize: "16px",
            fontWeight: 700,
            borderRadius: "28px",
            boxShadow: "0 4px 14px 0 rgba(79, 70, 229, 0.39)",
          }}
        >
          {isSubmitted && !isPerfect ? "Review & Try Again" : "Submit Answers"}
        </Button>
      </div>
    </div>
  );
};

export default LessonView;
