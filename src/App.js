import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./container/dashboard";
import Signup from "./container/signup";
import Login from "./container/login";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';



function App() {
  const [signup, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  return (
    <Card sx={{Width: 350,height:500 }}>
     <div className="App"> 


      <Dashboard />
     
     </div> 
    </Card>
  );
}

export default App;
