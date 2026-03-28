import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  TextField,
  Button,
  Slide,
  CircularProgress,
} from "@mui/material";
import { Chat, Close } from "@mui/icons-material";

interface Message {
  content?: {
    score: number;
    verdict: string;
    explanation: string;
    suggestion: string;
  };
  text?: string;
  isUser?: boolean;
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [url, setUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    if (!url.trim() && !question.trim()) return;

    const userMessage: Message = {
      text: `🔗 ${url}\n❓ ${question}`,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setUrl("");
    setQuestion("");
    setLoading(true);

    setTimeout(() => {
      const score = Math.floor(Math.random() * 101);

      let verdict = "";
      let explanation = "";

      if (score >= 75) {
        verdict = "Credibil";
        explanation =
          "Acest articol pare a fi de încredere și conținutul său este coerent și bine documentat.";
      } else if (score > 40) {
        verdict = "Suspect";
        explanation =
          "Acest articol prezintă unele informații veridice, dar trebuie verificat înainte de a fi considerat sigur.";
      } else {
        verdict = "Fals";
        explanation =
          "Acest articol conține informații dubioase sau neadevărate, nu ar trebui luat în considerare fără verificări suplimentare.";
      }

      const botMessage: Message = {
        content: {
          score,
          verdict,
          explanation,
          suggestion: url || "N/A",
        },
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
            width: 48,
            height: 48,
          }}
        >
          <Chat />
        </IconButton>
      )}

      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 280,
            height: 400,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
              AI Credibility Checker
            </Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "white", p: 0.5 }}>
              <Close />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              p: 1,
              bgcolor: "#f9f9f9",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            {messages.map((m, idx) => (
              <Box
                key={idx}
                sx={{
                  alignSelf: m.isUser ? "flex-end" : "flex-start",
                  bgcolor: m.isUser ? "primary.main" : "white",
                  color: m.isUser ? "white" : "black",
                  p: 1,
                  borderRadius: 2,
                  maxWidth: "80%",
                  fontSize: "0.75rem",
                }}
              >
                {m.isUser ? (
                  <Typography
                    style={{ whiteSpace: "pre-line", fontSize: "0.75rem" }}
                    variant="body2"
                  >
                    {m.text}
                  </Typography>
                ) : (
                  m.content && (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
                      <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                        📊 Scor de Credibilitate: {m.content.score}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                        🏷️ Verdict: {m.content.verdict}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                        💡 Explicație: {m.content.explanation}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                        🔎 Sugestie: {m.content.suggestion}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            ))}

            {loading && (
              <Box display="flex" alignItems="center" gap={1}>
                <CircularProgress size={16} />
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.75rem" }}>
                  ⏳ Analiză în curs...
                </Typography>
              </Box>
            )}

            <div ref={messagesEndRef} />
          </Box>

          {/* Inputs */}
          <Box sx={{ p: 1, display: "flex", gap: 0.5, alignItems: "flex-end" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, flex: 1 }}>
              <TextField
                size="small"
                placeholder="Link articol (https://...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                InputProps={{ sx: { fontSize: "0.75rem" } }}
              />
              <TextField
                size="small"
                placeholder="Întrebarea ta..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                InputProps={{ sx: { fontSize: "0.75rem" } }}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSend}
              sx={{ textTransform: "none", minWidth: 70, height: 32, fontSize: "0.75rem" }}
              disabled={!url.trim() && !question.trim()}
            >
              Trimite
            </Button>
          </Box>
        </Paper>
      </Slide>
    </>
  );
};

export default ChatWidget;