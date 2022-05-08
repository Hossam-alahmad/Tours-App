import React from "react";
import Header from "./Header";
import Tour from "./Tour";

const Tours = ({ tours }) => {
    return (
        <>
            <Header />
            <div className="tours m-2 m-md-0 row justify-content-center">
                {tours.map(tour => (
                    <Tour key={tour.id} {...tour} />
                ))}
            </div>
        </>
    );
};

export default Tours;
