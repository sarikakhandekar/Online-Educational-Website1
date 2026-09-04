import React, { useState } from "react";
import "./Bootcamp.css";

const bootcampData = [
  {
    title: "Full Stack Bootcamp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kSSgd9JhbQNXDv9kpXbHp6hzl3OiQ9zdJg&s",
    price: "₹9,999",
    rating: "4.6 ⭐",
    duration: "6 Months",
  },
  {
    title: "Digital Marketing Bootcamp",
    image:
      "https://academy.skillgenic.in/wp-content/uploads/2020/07/1340caf6112d8998a65f47bbc026.png",
    price: "₹7,999",
    rating: "4.8 ⭐",
    duration: "3 Months",
  },
  {
    title: "Data Science Bootcamp",
    image:
      "https://nearlearn.com/public/images/data-science-python-course-in-bangalore.jpg",
    price: "₹5,999",
    rating: "4.5 ⭐",
    duration: "2 Months",
  },
  {
    title: "UI/UX Bootcamp",
    image:
      "https://www.webskittersacademy.in/wp-content/uploads/2024/10/Academy-Blog-Banner-23-10-2024.jpg",
    price: "₹8,999",
    rating: "4.7 ⭐",
    duration: "4 Months",
  },
];

const Bootcamp = () => {
  const [search, setSearch] = useState("");

  const filteredBootcamps = bootcampData.filter((bootcamp) =>
    bootcamp.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bootcamp-page">
      <div className="bootcamp-search">
        <input
          type="text"
          placeholder="Search bootcamps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bootcamp-search-input"
        />
        <button className="bootcamp-search-btn">Search</button>
      </div>

      <div className="bootcamp-grid">
        {filteredBootcamps.map((bootcamp, index) => (
          <div className="bootcamp-card" key={index}>
            <div className="bootcamp-img-box">
              <img src={bootcamp.image} alt={bootcamp.title} />
            </div>

            <div className="bootcamp-content">
              <h3>{bootcamp.title}</h3>

              <div className="bootcamp-meta">
                <span>{bootcamp.rating}</span>
                <span>{bootcamp.duration}</span>
              </div>

              <div className="bootcamp-bottom">
                <span className="bootcamp-price">{bootcamp.price}</span>
                <button className="bootcamp-enroll-btn">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamp;
