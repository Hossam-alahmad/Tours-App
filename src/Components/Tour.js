import React, { useState } from "react";
import "../Css/Tour.css";

const Tour = ({ name, info, image, price }) => {
    const [readMore, setReadMore] = useState(false);
    const altName = image.slice(image.lastIndexOf("/") + 1);
    return (
        <div className="mb-5 col-12 col-sm-6 col-md-4">
            <div className="tour h-100">
                <div className="tour-image">
                    <img src={image} alt={altName} />
                </div>
                <div className="tour-content">
                    <h4 className="tour-name">{name}</h4>
                    <p className="tour-info">
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <button onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Read less" : "Read More"}
                        </button>
                    </p>
                    <span className="tour-price d-block m-auto mb-2 p-2 rounded text-white w-50">
                        Price: ${price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Tour;
