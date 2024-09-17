import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";


const supabase = createClient("https://lrwajhzsazveayfunudq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyd2FqaHpzYXp2ZWF5ZnVudWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4ODQsImV4cCI6MjA0MjE2ODg4NH0.wE3tB82rI9qCjtI_QSkTvVkJy8AbrWITXpdQI-XoDhA");

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
