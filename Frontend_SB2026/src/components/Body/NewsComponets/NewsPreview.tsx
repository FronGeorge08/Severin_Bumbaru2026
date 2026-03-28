import { Card, CardMedia, CardContent, Typography, Box, Button} from "@mui/material";

import { themedStyle, themedValue } from "../../../App";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

type Props = {
  article: Article;
};

const NewsPreview = ({ article }: Props) => {
    const cardStyle = themedStyle(
        {
            dark: {
                backgroundColor: "#2b3467",
                color: "#f1f1f1",
            },
            light: {
                backgroundColor: "#edf9ff",
                color: "#1b1b1b",
            },
            mix: {
                maxWidth: "500px",
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
            }
        }
    )

const buttonStyle = themedStyle(
    {
        dark: {
            backgroundColor: "#1e3dd6",
            color: "#f1f1f1",
        },
        light: {
            backgroundColor: "#0da4ef",
            color: "#242424",
        },
    }
)

    return (
        <Card
            sx={cardStyle}
        >
        {article.urlToImage && (
            <CardMedia
                component="img"
                height="33%"
                image={article.urlToImage}
                alt={"image not found"}
            />
        )}

            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {article.title}
                </Typography>

                <Typography variant="body2" color={themedValue("#515050", "#7e87bb")} sx={{ mb: 2 }}>
                    {article.description}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        sx={buttonStyle}
                        variant="contained"
                        size="small"
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read more
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NewsPreview;