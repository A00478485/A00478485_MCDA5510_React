import { useEffect, useState } from 'react';
import TemperatureToggle from './TemperatureToggle.js';
import Headr from './header.js';
import './mytown.css';
import hfx from './hfx.jpg';
import cold from './cold.png';
import mild from './mild.png';
import sunny from './sunny.png';


function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const MY_API_KEY = '03229a999c06443a98058acfed9f3256';

    const fetchData = async () => {
        try {
            // Make an API request
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=44.651070&lon=-63.582687&appid=${MY_API_KEY}`
            );

            // Check if the response status is OK (200)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            // Parse the response data as JSON
            const responseData = await response.json();

            // Update the 'data' state with the fetched data
            setData(responseData);

            // Set 'loading' to false since the data has been loaded
            setLoading(false);
        } catch (error) {
            // Handle any errors that occur during the fetch
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // Call the fetchData function
        fetchData();
    }, []);

    var temp;
    var temp_c;
    var temp_f;
    var img_lnk;
    if (loading) {
        temp = "Loading .....";
    }
    else if (error) {
        temp = "Error ....";
    }
    else {
        console.log(data.main);
        temp = "Data is loaded from API ..."
        temp_c = (data.main.temp - 273.15).toFixed(2);
        // temp_c = 15;
        temp_f = (((temp_c - 9) / 5) + 32).toFixed(2);

        if (temp_c < 10) {
            img_lnk = cold;
        }
        else if (temp_c < 20) {
            img_lnk = mild;
        }
        else {
            img_lnk = sunny;
        }

        console.log(temp_c, temp_f);
    }


    return (<>
        <Headr />
        <div className='Main'>
            <div className='flex-item-left'>
                <div className='town-picture'>
                    <img src={hfx} alt="Profile" className="town-picture-img" />
                </div>
            </div>
            <div className='flex-item-right'>
                I'm staying Halifax, Nova Scotia.
                <br /><br /><br />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {temp} <br/><br/>
                                <TemperatureToggle temperatureData={temp_c}/>
                                <br/>
                                Hint - Click on the value
                            </td>
                            <td>
                                <img src={img_lnk} alt="Weather Symbol" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};

export default App;