import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://mkdttzomimbmrccjsgtq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZHR0em9taW1ibXJjY2pzZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTQ2MDUsImV4cCI6MjA0MjE3MDYwNX0.LfP6SUhg-9N_FvrPbrRxTYU7wYB0U5rUn9VcJ6CVd_8");

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

        <div className="container py-5">

            <div className="row justify-content-center">
                <div className="col-lg-6">

                    <h1 className="text-center m-0 mb-3">Country List</h1>

                    <ul className="list-group">
                        {countries.map((country) => (
                            <li key={country.name} className="list-group-item">
                                {country.emoji}
                                &nbsp;
                                {country.name}</li>
                        ))}
                        
                    </ul>

                    <p className="text-center mt-2 text-muted">TODO: Connect to database</p>

                </div>
            </div>

        </div>

    );
}

export default App;