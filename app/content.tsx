import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ezidupuxwuqsuksdgmws.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6aWR1cHV4d3Vxc3Vrc2RnbXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NjgsImV4cCI6MjA0MjE2ODg2OH0.CTW9IWAhxf3V5vSDICpKSVB8yAMSLO7kgmpPXzOR9IA");

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