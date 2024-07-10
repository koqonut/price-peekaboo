import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';
import { COL_HEADING_CITY, COL_HEADING_LASTUPDATEDDATE, COL_HEADING_STORE, COL_HEADING_PRICE, COL_HEADING_NAME } from '../Constants';

const ProductTableComponent = ({ products, filterText, inStockOnly }) => {
    const data = useMemo(() => {
        return products.filter(product => {
            if (filterText && product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return false;
            }
            if (inStockOnly && !product.stocked) {
                return false;
            }
            return true;
        });
    }, [products, filterText, inStockOnly]);



    const columns = useMemo(
        () => [
            {
                Header: COL_HEADING_NAME,
                accessor: 'name',
                Filter: DefaultColumnFilter,
            },
            {
                Header: COL_HEADING_PRICE,
                accessor: 'price',
                disableFilters: true,
            },
            {
                Header: COL_HEADING_STORE,
                accessor: 'store',
                Filter: DefaultColumnFilter,
            },
            {
                Header: COL_HEADING_CITY,
                accessor: 'city',
                Filter: DefaultColumnFilter,
            },
            {
                Header: COL_HEADING_LASTUPDATEDDATE,
                accessor: 'lastUpdatedDate',
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
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 }, // Set initial page size to 5
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
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
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
