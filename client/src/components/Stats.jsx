import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

const Stats = ({ authenticated }) => {
  const navigate = useNavigate();

  const [sales, setSales] = useState([]);

  const loadFoodSales = async () => {
    const response = await axios.get("http://localhost:5000/showStats");
    setSales(response.data);
  };

  useEffect(() => {
    loadFoodSales();
  }, [sales]);


  

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/home")}
        endIcon={<HomeIcon />}
        align="right"
        style={{ position: "absolute", top: "0", left: "0" }}
        className="hidden-print"
      ></Button>

      <div>
      
      </div>
    </div>
  );
};

export default Stats;
