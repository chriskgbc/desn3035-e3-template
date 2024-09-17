import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://yhntifayaucxdacjoikk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobnRpZmF5YXVjeGRhY2pvaWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NzAsImV4cCI6MjA0MjE2ODg3MH0.nIxcaQuMT1RngEGmDuf9gzuGF-8c3JEifBVbhk6Oeig");

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