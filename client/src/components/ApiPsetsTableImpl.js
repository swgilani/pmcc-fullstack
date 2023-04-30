import React, {useState, useEffect} from 'react';
import PsetsTable from './PsetsTable';


export default function DbPsetsTableImpl() {

    const [psetsList, setPsetsList] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost:3005/api/psets')
        .then(response => response.json())
        .then(psetsData => psetsData.map(item => ({
            name: item.name,
            doi: item.doi ? 'https://doi.org/'.concat(item.doi) : "Not found"
        })))
        .then(result => setPsetsList(result))
        .catch(exception => console.log(exception));

    },[]);

    return <div>
        <h1>API Psets</h1>
        <PsetsTable psetsList={psetsList} />
    </div>

}