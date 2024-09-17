import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://xbxxphfipvrogvlumqbb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhieHhwaGZpcHZyb2d2bHVtcWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTMwMzEsImV4cCI6MjA0MjE2OTAzMX0.ugST9jM5qHDrvKd6DleFUSUqtbMEGTF7e-mZPR3abKc");

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