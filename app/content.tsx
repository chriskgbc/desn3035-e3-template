import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://gbknpjrvtmxhrayzrkwf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdia25wanJ2dG14aHJheXpya3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NzAsImV4cCI6MjA0MjE2ODg3MH0._qt2M0yLtYs19ZeMDIVFtn_4kiSvJuQ8sSoc-t3RTrI");

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