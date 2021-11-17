import {React,useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";

import { komitenti } from "./data/komitenti";
import RowInfo from "./RowInfo";

export default function App() {

  const [dataState, setDataState] = useState({ skip: 0, take: 10 })
  const [result, setResult] = useState(process(komitenti, dataState));
  const [row, setRow] = useState(null);
  const [isRowClicked, setIsRowClicked] = useState(false)

  const onDataStateChange = (event) => {
    setDataState(event.dataState);
    setResult(process(komitenti, event.dataState));
  }

  const handleRowClick = (e) => {
    setRow(e.dataItem)
    setIsRowClicked(true)
  }

  return (
    <div>
    <Grid
      data={result}
      filterable={true}
      onDataStateChange={onDataStateChange}
      pageable={true}
      total={komitenti.length}
      {...dataState}
      onRowClick={(e) => {handleRowClick(e)}}
    >
      <GridColumn field="sifra" title="Sifra" />
      <GridColumn field="naziv_firme" title="Naziv firme" />
      <GridColumn field="ppt" title="PTT" />
      <GridColumn field="pak" title="PAK" />
      <GridColumn field="mesto" title="Mesto" />
      <GridColumn field="ulica" title="Ulica" />
      <GridColumn field="drzava" title="Drzava" />
      <GridColumn field="opstina" title="Opstina" />
    </Grid>

    {isRowClicked ? (
      <RowInfo row={row}/> 
      
      ) : ( 
        'Click on row to show it\'s info'
      )}
    </div>
  );
}
