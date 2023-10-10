import { useState } from "react"
import data from '../jsdata/data.json';

const AddItem = () => {
    let initialState = {
        "item_id" : "",
        "item_name" : "",
        "description" : "",
        "item_group" : "",
        "product_or_service" : "",
        "unit_of_measurement" : "",
        "item_category" : "",
        "buy_or_sell" : "",
        "hsn_code" : "",
        "tax" : "",
        "keep_stock" : false,
        "serial_number" : false,
        "batch_number" : false,
        "servicable" : true,
        "item_combo" : false,
        "item_barcode" : false,
        "item_qc" : false,
        "item_active" : true
    };
    const [formData, setFormData] = useState(initialState)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedData = data
        updatedData = updatedData[0]['hits'].push(formData)
    }
    return(
        <>
            <form className="row g-3">
                <div class="col-md-6">
                    <label for="item_id" class="form-label">Item ID</label>
                    <input type="text" class="form-control" id="item_id" name="item_id" onChange={handleChange}/>
                </div>
                <div class="col-md-6">
                    <label for="item_name" class="form-label">Item Name</label>
                    <input type="text" class="form-control" id="item_name" name="item_name" onChange={handleChange}/>
                </div>
                <div class="col-md-6">
                    <label class="form-check-label" for="description">Description</label>
                    <textarea class="form-control" id="description" name="description" onChange={handleChange}></textarea>
                </div>
                <div class="col-md-6">
                    <label class="form-check-label" for="item_group">Item Group</label>
                    <select class="form-select" name='item_group' onChange={handleChange}>
                        <option selected>--Select--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-check-label" for="product_or_service">Product/Service</label>
                    <select class="form-select" name='product_or_service' onChange={handleChange}>
                        <option selected>--Select--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-check-label" for="unit_of_measurement">Unit of Measurement</label>
                    <select class="form-select" name='unit_of_measurement' onChange={handleChange}>
                        <option selected>--Select--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-check-label" for="item_category">Item Category</label>
                    <select class="form-select" name="item_category"  onChange={handleChange}>
                        <option selected>--Select--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-check-label" for="buy_or_sell">Buy/Sell</label>
                    <select class="form-select"  name="buy_or_sell" onChange={handleChange}>
                        <option selected>--Select--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-check-label" for="hsn_code">HSN Code</label>
                    <select class="form-select"  name="hsn_code" onChange={handleChange}>
                        <option selected>--Select--</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-check-label" for="tax">Tax</label>
                    <input type="text" class="form-control" id="tax" name="tax"  onChange={handleChange} />
                </div>
                <div className="col-md-4"></div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="keep_stock">Keep Stock</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="keep_stock" name="keep_stock"   onChange={handleChange}/>
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="serial_number">Serial Number</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="serial_number" name="serial_number"  onChange={handleChange}/>
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="batch_number">Batch Number</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="batch_number"  name="batch_number" onChange={handleChange}/>
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="servicable">servicable</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="servicable" name="servicable" onChange={handleChange} />
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="item_combo">Item Combo</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="item_combo" name="item_combo" onChange={handleChange} />
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="item_barcode">Item Barcode</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="item_barcode" name="item_barcode" onChange={handleChange} />
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="item_qc">Item QC</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="item_qc" name="item_qc" onChange={handleChange} />
                </div>
                <div class="col-md-4 form-check form-switch">
                    <label class="form-check-label" for="item_active">Item Active</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="item_active" name="item_active" checked  onChange={handleChange} />
                </div>
            </form>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-info"  type='button' onClick={(e)=>{handleSubmit(e)}}>Save</button>
            </div>
        </>
    )
}

export default AddItem