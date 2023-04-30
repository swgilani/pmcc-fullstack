import BootstrapTable from 'react-bootstrap-table-next';
//import paginationFactory from 'react-bootstrap-table2-paginator';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

export default function PsetsTable({psetsList}) {

    const columns = [
        {
            dataField:'name',
            text:'Name',
            filter: textFilter(), 
        },
        {
            dataField:'doi', 
            text:'DOI', 
            formatter: (cellContent, row) => (
            <div>
            {row.doi === 'Not found' ? <div>{row.doi}</div> : <a href={row.doi}> {row.doi} </a>}
            </div>
            ),
        }
    ]
    const paginationOptions = {
        custom: true,
        totalSize: psetsList.length
      };

    return <div>
    <PaginationProvider
  pagination={ paginationFactory(paginationOptions) }
>
  {
    ({paginationProps,paginationTableProps }) => (
      <div>
      <BootstrapTable 
            keyField='name' 
            columns={columns} 
            data={psetsList} 
            filter={filterFactory()}
            { ...paginationTableProps }/>

        <PaginationTotalStandalone
          { ...paginationProps }/>
          
        <PaginationListStandalone
          { ...paginationProps }/>
      </div>
    )
  }
</PaginationProvider>
    </div>

}



