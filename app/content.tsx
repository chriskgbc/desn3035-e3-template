import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://yvqebcjyajkputearrlx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cWViY2p5YWprcHV0ZWFycmx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NjksImV4cCI6MjA0MjE2ODg2OX0.RHgfuzQaWFkFVtzAVpfHHQH9HmY-IAfx1OP8ZKPTZTE");

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