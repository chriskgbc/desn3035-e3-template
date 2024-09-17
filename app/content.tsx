import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://obdyzwzzjhteqhvmmtza.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZHl6d3p6amh0ZXFodm1tdHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI5NDUsImV4cCI6MjA0MjE2ODk0NX0._QUU0skZ4GyYT4PQZ0SjTnHlfW6Baj8FT3h2l3LdhXY");

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