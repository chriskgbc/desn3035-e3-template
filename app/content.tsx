import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient(
  "https://spgzsavopsjzklyutcdd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZ3pzYXZvcHNqemtseXV0Y2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4OTIsImV4cCI6MjA0MjE2ODg5Mn0.czU8yYUVn6NTI1zhkdZA9bdtS1Aelb3NlrI7-wS6uBs"
);

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
