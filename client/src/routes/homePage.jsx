import React, { useContext, useEffect, useState } from 'react'
import './homePage.scss'
import SearchBar from '../components/searchBar/SearchBar'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios';

export default function HomePage() {

    const { currentUser } = useContext(AuthContext)

    console.log(currentUser)

    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0);

    useEffect(() => {
        const startingYear = 2014; // Replace with the actual starting year
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startingYear);
    }, []);

    // Fetch the total number of properties listed
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get('http://localhost:8800/api/posts');
                setPropertyCount(res.data.length);
            } catch (err) {
                console.error("Error fetching properties: ", err);
            }
        };

        fetchProperties();
    }, []);


    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quibusdam. Repellendus, consectetur a! Eveniet fugiat perspiciatis quis est quae! Facere possimus porro saepe obcaecati accusantium beatae vitae laboriosam voluptates. Repudiandae?
                    </p>
                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>{yearsOfExperience}+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>{propertyCount}+</h1>
                            <h2>Property Listed</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/images/bg.png" alt="" />
            </div>

        </div>
    )
}
