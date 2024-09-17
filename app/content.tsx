import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://xzeiujmolutmqtjffquj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZWl1am1vbHV0bXF0amZmcXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4OTAsImV4cCI6MjA0MjE2ODg5MH0.lw_xXROc682uxMaj6-PkiAUek14bWsTGmrS7MTP2EeQ");

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