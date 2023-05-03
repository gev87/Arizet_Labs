import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function HomePage() {
    const location = useLocation();
    return <Typography sx={{color:"#F6A95F"}} variant="h1">Welome Back {location.state.username}</Typography>;
}
