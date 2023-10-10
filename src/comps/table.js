import TableRow from "./table_row"

const Table = () => {
    return(
        <>
        <table className="table table-hover">
            <thead className="bg-info-subtle py-8">
                <td>Item ID</td>
                <td>Item Name</td>
                <td>Description</td>
                <td>Item Group</td>
                <td>Product/Service</td>
                <td>Unit of Measurement</td>
                <td>Item Category</td>
                <td>Buy/Sell</td>
                <td>Hsn Code</td>
                <td>Tax</td>
                <td>Keep Stock</td>
                <td>Serial Number</td>
                <td>Batch Number</td>
                <td>Servicable</td>
                <td>Item Combo</td>
                <td>Item Barcode</td>
                <td>Item QC</td>
                <td>Item Active</td>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
        </>
    )
}


export default Table