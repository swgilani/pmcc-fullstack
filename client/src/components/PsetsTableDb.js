import React, { useState, useEffect } from "react";
import PsetsTable from "./PsetsTable";
const CONFIG = require("../config");

export default function PsetsTableDb() {
  const [psetsList, setPsetsList] = useState([]);

  useEffect(() => {
    fetch(CONFIG.api.pSetsDatabaseUrl)
      .then((response) => response.json())
      .then((psetsData) =>
        psetsData.map((item) => ({
          name: item.name,
          doi: item.repositories[0].doi
            ? "https://doi.org/".concat(item.repositories[0].doi)
            : "Not found",
        }))
      )
      .then((result) => setPsetsList(result))
      .catch((exception) => console.log(exception));
  }, []);

  return (
    <div>
      <h1> Database Psets </h1>
      <PsetsTable psetsList={psetsList} />
    </div>
  );
}
