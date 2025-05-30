import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const UpdatePostBtn = ({ requestUpdatePost }) => {
    const theme = useTheme();

    return (
        <Button
            onClick={requestUpdatePost}
            sx={{
                position: "fixed",
                bottom: "85px",
                left: "10px",
                right: "10px",
                height: "50px",
                maxWidth: "480px",
                backgroundColor: theme.brand3,
                borderRadius: "10px",
                color: "white",
                zIndex: 1000,
                margin: "0 auto",
                alignItems: "center",
                fontSize: "20px",
                "&:hover": {
                    backgroundColor: "#d88e4f",
                    boxShadow: "none",
                },
            }}
        >
            수정하기
        </Button>
    );
};

export default UpdatePostBtn;
