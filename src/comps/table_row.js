import {useEffect, useState} from 'react';
import data from '../jsdata/data.json';

const TableRow = () => {
    const [tableData, setTableData] = useState([])
    useEffect(()=>{
        setTableData(data[0]["hits"])
    }, [])
    return(
        <>
            {
                tableData.map(data_item => (
                    <tr>
                        <td>{data_item["item_id"]}</td>
                        <td>{data_item["item_name"]}</td>
                        <td>{data_item["description"]}</td>
                        <td>{data_item["item_group"]}</td>
                        <td>{data_item["product_or_service"]}</td>
                        <td>{data_item["unit_of_measurement"]}</td>
                        <td>{data_item["item_category"]}</td>
                        <td>{data_item["buy_or_sell"]}</td>
                        <td>{data_item["hsn_code"]}</td>
                        <td>{data_item["tax"]}</td>
                        <td>{data_item["keep_stock"] ? "Yes": "No"}</td>
                        <td>{data_item["serial_number"] ? "Yes": "No"}</td>
                        <td>{data_item["batch_number"] ? "Yes": "No"}</td>
                        <td>{data_item["servicable"] ? "Yes": "No"}</td>
                        <td>{data_item["item_combo"] ? "Yes": "No"}</td>
                        <td>{data_item["item_barcode"] ? "Yes": "No"}</td>
                        <td>{data_item["item_qc"] ? "Yes": "No"}</td>
                        <td>{data_item["item_active"] ? "Yes": "No"}</td>
                    </tr>
                ))
            }
        </>
    )

}


export default TableRow;