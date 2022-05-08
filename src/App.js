import React, { useState, useEffect } from "react";
import "./Css/App.css";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
import "./Css/bootstrap.rtl.min.css";
function App() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        await fetch("https://course-api.com/react-tours-project")
            .then(res => res.json())
            .then(json => {
                setTours(json);

                setLoading(false);
            })
            .catch(err => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        console.log(tours);
    }, [tours]);
    return (
        <div className="tours-app">
            {loading ? <Loading /> : <Tours tours={tours} />}
        </div>
    );
}

export default App;
