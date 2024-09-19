import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";
// Haeytham Almalak  2024
const supabase = createClient("https://dxuzaqwcfuxhyqhsqyje.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dXphcXdjZnV4aHlxaHNxeWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NjYxMjcsImV4cCI6MjA0MjM0MjEyN30.VimBEpc7DvW2dmuiSFD0eOceUZ-mGI-Ys8DA6Ml4Hzo");

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