import { Avatar, Box, Typography } from "@mui/material";

const ChatItem=({
    content, 
    role,
    }:{
    content: string;
    role: "user" || "assistant"
    })=>{
    return role==="assistant"? <Box sx={{display: 'flex',p: 2, bgcolor: "004d5612", my: 2, gap: 2}}>
        <Avatar sx={{ml:"0"}}>
        <img src="openai.png" alt="openai" width={"30px"} />
        </Avatar>
        <Box><Typography fontSize={"20px"}>{content }</Typography></Box>
    </Box>:<></>
}
export default ChatItem