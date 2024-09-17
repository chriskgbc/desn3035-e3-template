import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://ypllbkznlrfjrlcvuoxt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbGxia3pubHJmanJsY3Z1b3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NzgsImV4cCI6MjA0MjE2ODg3OH0.I9R62CPyw9_PUi7sE2jt-Pmcf84qco9ZIlWrJ6d8u5k");

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