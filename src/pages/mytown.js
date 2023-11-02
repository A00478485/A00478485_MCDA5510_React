import { useEffect, useState } from 'react';
import Headr from './header.js';
import hfx from './hfx.jpg';

function App () {
    return (<>
    <Headr />
    <div className='Main'>
        <div className='.flex-item-left'>
            <div className='town-picture'>
            <img src={hfx} alt="Profile" className="town-picture-img" />
            </div>
        </div>
    </div>
    </>);
}

export default App;