import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";


const supabase = createClient("https://bfkaglvwfddssmtzctuq.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJma2FnbHZ3ZmRkc3NtdHpjdHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4OTksImV4cCI6MjA0MjE2ODg5OX0.saQIRL2ZaRiCVd2qfz3-uT6MOycnXHAzA76oB09Cl2o");

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