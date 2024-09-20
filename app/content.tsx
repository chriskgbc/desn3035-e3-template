import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://gkusegtxcyotxxmlleyi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrdXNlZ3R4Y3lvdHh4bWxsZXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NzAsImV4cCI6MjA0MjE2ODg3MH0.tmjfkQAjbpA6y-bdjsrlpt1PrX-KOX0PUGImJ3I0XAo");

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