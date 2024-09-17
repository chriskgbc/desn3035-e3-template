import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://axsdnnjnwgpvvqbueebz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4c2Rubmpud2dwdnZxYnVlZWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NDg5OTQsImV4cCI6MjA0MjEyNDk5NH0.CL37ISfyAlDoVF72_ZMmTYjxbO7YZKvJWKbEbMOFt1Q");

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
                            <li className="list-group-item" key={country.name}>{country.name} {country.emoji}</li>
                        ))}

                    </ul>

                    <p className="text-center mt-2 text-muted">Complete: Connect to database</p>

                </div>
            </div>

        </div>

    );
}

export default App;