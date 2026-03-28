import { useEffect, useState } from "react";
import NewsPreview from "./NewsPreview";
import { Box } from "@mui/material";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

type ApiResponse = {
  status: string;
  articles: Article[];
  message?: string;
};

type Props={
  category?: string
}

const NewsFetcher = ({ category = 'general'  } : Props) => {
    if (category === undefined) {
        category = "general"
    }

    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
        try {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY as string;

            const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
            );

            const data: ApiResponse = await res.json();

            if (data.status !== "ok") {
            throw new Error(data.message || "Unknown error");
            }

            setArticles(data.articles);
        } catch (e: unknown) {
            if (e instanceof Error) {
            setError(e.message);
            } else {
            setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
        };

        fetchNews();
    }, [category]);

    const cardStyle = {
        overflowY: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 3,
        padding: 2,
    }

    return (
        <Box
            sx={cardStyle}
        >
        {articles.map((article, index) => (
            <NewsPreview key={index} article={article} />
        ))}
        </Box>
    );
};

export default NewsFetcher;