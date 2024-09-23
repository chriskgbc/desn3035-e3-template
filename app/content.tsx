import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://ldflrmmpbclglcbnwzhz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmxybW1wYmNsZ2xjYm53emh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMjYyODcsImV4cCI6MjA0MjcwMjI4N30.hR7Bm3j4qxHxAYebfh_LSFZMB7GNTcuXbJ-V1mlupYA");

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