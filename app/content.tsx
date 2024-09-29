import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://mkdttzomimbmrccjsgtq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZHR0em9taW1ibXJjY2pzZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTQ2MDUsImV4cCI6MjA0MjE3MDYwNX0.LfP6SUhg-9N_FvrPbrRxTYU7wYB0U5rUn9VcJ6CVd_8");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;