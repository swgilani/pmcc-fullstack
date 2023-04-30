import React, { useState, useEffect } from "react";
import PsetsTable from "./PsetsTable";
const CONFIG = require("../config");

export default function PsetsTableApi() {
  const [psetsList, setPsetsList] = useState([]);

  useEffect(() => {
    fetch(CONFIG.api.pSetsApiUrl)
      .then((response) => response.json())
      .then((psetsData) =>
        psetsData.map((item) => ({
          name: item.name,
          doi: item.doi ? "https://doi.org/".concat(item.doi) : "Not found",
        }))
      )
      .then((result) => setPsetsList(result))
      .catch((exception) => console.log(exception));
  }, []);

  return (
    <div>
      <h1>API Psets</h1>
      <PsetsTable psetsList={psetsList} />
    </div>
  );
}
