import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://lldiaoztisdqsbsurcdl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZGlhb3p0aXNkcXNic3VyY2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMzgxNjMsImV4cCI6MjA0NTgxNDE2M30.kMgDhv_KHs7HBEB548wrmp_ASFoENGjJ79duuoTa-wo");

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
                {country.name}
                </li>
            ))}
          </ul>

          <p className="text-center mt-2 text-muted">TODO: Connect to database</p>

        </div>
      </div>

    </div>

  );
}

export default App;