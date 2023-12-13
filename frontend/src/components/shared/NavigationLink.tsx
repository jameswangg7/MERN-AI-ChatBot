import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

const NavigationLink=({to,bg,text,textColor,onClick}:Props)=>{
    return (<>
    <Link to={to} 
    className="nav-link" 
    onClick={onClick} 
    style={{background:bg, color: textColor}} >{text}
    </Link>
    </>)
}

export default NavigationLink;