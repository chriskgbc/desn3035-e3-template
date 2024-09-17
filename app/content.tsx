import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://fupgocqrqnqluxjichio.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1cGdvY3FycW5xbHV4amljaGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4OTUsImV4cCI6MjA0MjE2ODg5NX0.Dv4_-5grFbHM3MiJl6IcRxJXgmQ5RmLVOmuZspd3fzY");

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