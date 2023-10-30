import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/logo";
function Header() {
    // const [count, setCount] = useState(0)
   
     return (
      <AppBar sx={{bgcolor:'transparent', position:'static', boxShadow:'none'}}>
        <Toolbar sx={{display:'flex'}}>
          <Logo></Logo>
        </Toolbar>
      </AppBar>
     )
   }
   
   export default Header
   