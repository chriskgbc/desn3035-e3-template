import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://nlctgtmwkvmkzaqxcvph.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sY3RndG13a3Zta3phcXhjdnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4MDQsImV4cCI6MjA0MjE2ODgwNH0.qplPrP94W9Pzvleq7ziwV0GzMW6THc-hW64RHpMGg5Y");

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
