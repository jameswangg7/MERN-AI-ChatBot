import { Avatar, Box, Button, Typography } from "@mui/material"

import { useAuth } from "../context/AuthContext"
import { red } from "@mui/material/colors"
function Chat() {
  // const [count, setCount] = useState(0)
  const auth = useAuth()
  return (
    <Box sx={{ display: "flex", flex: 1, width: "100%", height: "100%", mt: 3, gap: 3 }}>
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" } }}>
        <Box sx={{
          display: "flex", width: "100%", height: "60vh", bgcolor: "rgb(17,29,39)", borderRadius: 5, flexDirection: "column", mx: 3
        }}></Box>
        <Avatar sx={{
          mx: "auto", my: 2, bgcolor: "white", color: "black", fontWeight: 700
        }}>
          {auth?.user?.name[0] }{auth?.user?.name.split(" ")[1][0]}
        </Avatar>
        <Typography sx={{mx:"auto", fontFamily: "work sans", my: 4, p: 3}}>
You are talking to a chatBOT
        </Typography>
        <Button sx={{width: "200px", my: "auto", color:"white", fortweight:"700", borderRadius:3, mx:"auto", bgcolor:red[300], ":hover": {bgcolor:red.A400}}}>
          Clear Conversation  </Button>
      </Box>
      <Box  ></Box>
    </Box>
  )
}

export default Chat
