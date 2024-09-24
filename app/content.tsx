import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://dubiwwukkgdjfgwtzqjd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Yml3d3Vra2dkamZnd3R6cWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTczNzQsImV4cCI6MjA0Mjc5MzM3NH0.dRLIdcvA86BT0MOFtdcsQNGUV7kwj6p7DD04mcF1KJE");

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