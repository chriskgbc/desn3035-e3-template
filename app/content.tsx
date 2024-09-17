import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://dfehopizlugjxkciyfwm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZWhvcGl6bHVnanhrY2l5ZndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI5MzMsImV4cCI6MjA0MjE2ODkzM30.K9xJoa79TpHdetJ8ZKAtBdSRsqnB-l_6BPehTf31NIc");

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