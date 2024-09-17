import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://lkyvekbuxzhezczkador.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxreXZla2J1eHpoZXpjemthZG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NTQsImV4cCI6MjA0MjE2ODg1NH0.8xEr07T6-3UOn5B78PzFaah_4IPtNl3hEXAceRU5wmI");

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