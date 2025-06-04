import { Box, Button, Typography } from "@mui/material";
import styles from "./Button.module.css";
export default function FButton() {
    return (
        <Box>
            <Button className={styles.btn_fb}>Give Feedback</Button>
        </Box>
    )
}