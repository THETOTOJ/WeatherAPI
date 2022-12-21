import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Weather = () => {

    const [results, setResults] = useState([] as any[]);
    const [weather, setWeather] = useState([] as any[]);
    const [city, setCity] = useState('paris');
    const [weathercity, setWeatherCity] = useState('paris');

    const [lon, setLon] = useState('48.8588897');
    const [lat, setLat] = useState('2.3200410217200766');

    const api = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=9e44dd99f405804d52f940812145dabe`
    const api2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9e44dd99f405804d52f940812145dabe`


    const getWeather = async () => {
        const response = await fetch(api2);
        const data = await response.json();
        setWeather(data.main.temp)
        console.log(data.main.temp)
    }
    const getResults = async () => {
        const response = await fetch(api);
        const data = await response.json();
        setResults(data)
    }

    const Search = () => {
        getResults()
    };
    useEffect(() => {
        getResults()
        getWeather()

    }, [])

    return (
        <>
            <div className="main">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <div className="hero">
                        <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                            <h1 style={{ textTransform: 'capitalize' }} className=" font-bold text-3xl text-sky-400">{weathercity}</h1>
                            <h1 className=" font-bold text-3xl text-sky-400">{weather}°C</h1>
                        </div>
                        <div className="box pt-6">
                            <div className="box-wrapper">
                                <form action="#" onSubmit={Search}
                                >
                                    <input
                                        type="search"
                                        id=""
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="Chercher Ville"
                                        className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-3xl text-sky-400 font-bold mt-4 underline">Results</h1>
            <div>
                <div className="grid grid-cols-4 m-4">
                    {
                        results.map((result) => {
                            return (
                                <div className="mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{result.country} | {result.state}</p>
                                    <button onClick={() => {
                                        setWeatherCity(result.name);
                                        setLat(result.lat);
                                        setLon(result.lon); 
                                        getWeather();
                                        console.log("dada")
                                    }} 
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Weather
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default Weather;