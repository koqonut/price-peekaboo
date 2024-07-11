import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';
import { COL_HEADING_CITY, COL_HEADING_LASTUPDATEDDATE, COL_HEADING_STORE, COL_HEADING_PRICE, COL_HEADING_NAME, PAGE_SIZE } from '../utils/Constants';

const ProductTableComponent = ({ products, globalSearchText, inStockOnly }) => {
    //useMemo for Data: Memoize the filtered data based on products, globalSearchText, and inStockOnly to optimize performance.

    const data = useMemo(() => {
        return products.filter(product => {
            if (globalSearchText && product.name.toLowerCase().indexOf(globalSearchText.toLowerCase()) === -1) {
                return false;
            }
            if (!product.stocked) {
                return false;
            }
            return true;
        });
    }, [products, globalSearchText]);



    const columns = useMemo(
        () => [
            {
                Header: COL_HEADING_NAME.displayText,
                accessor: COL_HEADING_NAME.accessor,
                Filter: DefaultColumnFilter,
            },
            {
                Header: COL_HEADING_PRICE.displayText,
                accessor: COL_HEADING_PRICE.accessor,
                disableFilters: true,
            },
            {
                Header: COL_HEADING_STORE.displayText,
                accessor: COL_HEADING_STORE.accessor,
                Filter: DefaultColumnFilter,
            },
            {
                Header: COL_HEADING_CITY.displayText,
                accessor: COL_HEADING_CITY.accessor,
                Filter: DefaultColumnFilter,
            },
            {
                Header: COL_HEADING_LASTUPDATEDDATE.displayText,
                accessor: COL_HEADING_LASTUPDATEDDATE.accessor,
                disableFilters: true,
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // Instead of using 'rows', we'll use 'page'
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        state: { pageIndex },
    } = useTable(
        {
            //Initialize the useTable hook with columns and data.
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: PAGE_SIZE }, // Set initial page size and pageIndex
        },
        useFilters, // Use the useFilters plugin hook
        usePagination // Use the usePagination plugin hook
    );

    if (data.length === 0) {
        return null; // Return null if there are no matching products
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th
                                                {...column.getHeaderProps()}
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                                            >
                                                {column.render('Header')}
                                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                                {page.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="pagination flex justify-between mt-4">
                            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
                                Previous
                            </button>
                            <span>
                                Page{' '}
                                <strong>
                                    {pageIndex + 1} of {pageOptions.length}
                                </strong>
                            </span>
                            <button onClick={() => nextPage()} disabled={!canNextPage} className="px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
/**
DefaultColumnFilter: Define a default column filter component that provides an input field for filtering column data.
filterValue: The current filter value.
preFilteredRows: The rows before filtering.
setFilter: The function to update the filter value.
 */
function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter }, }) {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default ProductTableComponent;
