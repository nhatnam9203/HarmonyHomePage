import React, { Component } from 'react'
import ReactTable from "react-table";
import Title from "@/components/Title";
import CustomTableHeader from "../../CustomTableHeader";
import product_default from "@/assets/images/product_default.png";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import icon_trash from "@/assets/images/retailer/trash.png";
import Dropzone from "react-dropzone";
import InputPrice from "./InputPrice";
import InputQuantity from "./InputQuantity";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { isEmpty } from "lodash";
import MediaQuery from 'react-responsive'

import "../style.scss";

export default class Producttable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            searchValue: "",
        }
    }

    changePage = (activePage) => {
        this.setState({ activePage })
    }

    onChangeSearch = (e) => {
        const searchValue = e.target.value;
        this.setState({ searchValue });
    }

    render() {
        const {
            quantities = [],
            uploadImagesOption = () => { },
            handleChangeInput = () => { },
            deleteQuantities = () => { },
            openPopupAuto = () => { },
            openPopupManual = () => { },
        } = this.props;

        const { activePage, searchValue } = this.state;

        let count = Math.ceil(quantities.length);

        let quantitiesList = quantities.slice((activePage - 1) * 10, (activePage - 1) * 10 + 10);

        if (!isEmpty(searchValue)) {
            quantitiesList = quantitiesList.filter((e) => {
                if (e) {
                    return (
                        e.label
                            .trim()
                            .toLowerCase()
                            .indexOf(searchValue.toLowerCase()) !== -1
                    );
                }
                return null;
            });
            this.changePage(1)
            count = Math.ceil(quantitiesList.length);
        }

        return (
            <>
                <Title
                    style={{
                        borderBottomWidth: 0,
                        marginTop: "2.5rem",
                        marginBottom: "0.5rem",
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    Product Versions

                    <div className="group_btn_generate">
                        <div>
                        <MediaQuery minWidth={600}>
                            <Search
                                value={searchValue}
                                onChange={this.onChangeSearch}
                                onSubmit={() => { }}
                            />
                        </MediaQuery>
                        </div>
                        <span onClick={openPopupManual}>Manual Generate</span>
                        <span onClick={openPopupAuto}>Auto Generate</span>
                    </div>
                </Title>
                <ReactTable
                    className="table-inventoryDetail product-table"
                    manual
                    sortable={false}
                    data={quantitiesList || []}
                    minRows={1}
                    noDataText="NO DATA!"
                    NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
                    columns={columns(uploadImagesOption, handleChangeInput, deleteQuantities)}
                    PaginationComponent={() => <div />}
                />
                {
                    count > 0 && <Pagination
                        activePage={activePage}
                        handlePageChange={this.changePage}
                        totalItem={Math.ceil(count)}
                    />
                }
            </>
        )
    }
}


const columns = (uploadImagesOption, handleChangeInput, deleteQuantities) => [
    {
        Header: <CustomTableHeader value="Versions" />,
        id: "label",
        accessor: (row) => <div className="table-tr row-label">{row.label}</div>,
        style: { 'whiteSpace': 'unset' },
        width: 260,
    },
    {
        Header: <CustomTableHeader value="&nbsp;" />,
        id: "no-comment",
        accessor: (row) => (
            <div />
        ),
        width: 40
    },
    {
        Header: <CustomTableHeader value="Description" />,
        id: "description",
        accessor: (row) => (
            <input
                className="input_price"
                value={row.description}
                onChange={(e) => handleChangeInput(e.target.value, "description", row)}
                placeholder="Description"
            />
        )
    },
    {
        Header: <CustomTableHeader value="Cost price" />,
        id: "costPrice",
        accessor: (row) => (
            <InputPrice
                value={row.costPrice}
                handleChange={(value) => handleChangeInput(value, "costPrice", row)}
            />
        )
    },
    {
        Header: <CustomTableHeader value="Price" />,
        id: "price",
        accessor: (row) => (
            <InputPrice
                value={row.price}
                handleChange={(value) => handleChangeInput(value, "price", row)}
            />
        )
    },
    {
        Header: <CustomTableHeader value="Qty" />,
        id: "quantity",
        accessor: (row) => (
            <InputQuantity
                value={row.quantity}
                handleChange={(value) => handleChangeInput(value, "quantity", row)}
            />
        ),
    },
    {
        Header: <CustomTableHeader value="Temp qty" />,
        id: "tempQuantity",
        accessor: (row) => (
            <InputQuantity
                value={row.tempQuantity}
                handleChange={(value) => handleChangeInput(value, "tempQuantity", row)}
            />
        ),
    },
    {
        Header: <CustomTableHeader value="Image" />,
        id: "imageUrl",
        accessor: (row) => (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    style={{ width: 43, height: 43, marginTop: 5, cursor: 'auto' }}
                    src={row.imageUrl ? row.imageUrl : product_default} alt="imgjj"
                />
                <Dropzone
                    accept={"image/jpeg, image/png , image/gif"}
                    multiple={false}
                    maxFiles={1}
                    maxSize={10485760}
                    noDrag={true}
                    onDrop={(acceptedFiles) => {
                        uploadImagesOption(acceptedFiles, row.label);
                    }}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div
                            className="images_inventory_dropzone_edit"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <img style={{ cursor: 'pointer' }} src={icon_upload} atl="uploadImage" />
                        </div>
                    )}
                </Dropzone>
                <img
                    style={{ width: 43, height: 43, marginTop: 5, cursor: 'pointer' }}
                    src={icon_trash} alt="imgjj"
                    onClick={() => deleteQuantities(row)}
                />
            </div>
        )
    },
];