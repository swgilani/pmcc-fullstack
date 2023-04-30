import React, {useState, useEffect} from 'react';
import PsetsTable from './PsetsTable';


export default function DbPsetsTableImpl() {

    const [psetsList, setPsetsList] = useState([]);


    useEffect(() =>  {
        fetch('http://localhost:3005/api/pset-database')
        .then(response => response.json())
        .then(psetsData => psetsData.map(item => ({
            name: item.name,
            doi: item.repositories[0].doi ? 'https://doi.org/'.concat(item.repositories[0].doi) : "Not found"
        })))
        .then(result => setPsetsList(result))
        .catch(exception => console.log(exception));

    },[]);

    return <div>
        <h1>Database Psets</h1>
        <PsetsTable psetsList={psetsList} />
    </div>

}
