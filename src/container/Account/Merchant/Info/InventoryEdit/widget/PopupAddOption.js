import React from 'react'
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    getAttributeById
} from "@/actions/retailerActions";
import tick_active from "@/assets/images/retailer/tick_active.png";
import tick_inactive from "@/assets/images/retailer/tick_inactive.png";
import Loading from "@/components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../style.scss";

const PopupAddOption = ({
    isVisible = false,
    options,
    mergeOption = () => { },
    close = () => { },
    createProductVersion = () => { }
}) => {

    const dispatch = useDispatch();

    const { attributes, loadingAttribute } = useSelector(state => state.retailer);

    const [temptAttributes, setTemptAttributes] = React.useState([]);
    const [attributesSubmit, setAttributesSubmit] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (isVisible) {
            let tempt = [...attributes].filter(at => !isExistAttribute(options, at));
            tempt.forEach(el => {
                el.isActive = false;
            });
            setTemptAttributes(tempt);
        }
    }, [isVisible]);

    React.useEffect(() => {
        if (attributesSubmit.length > 0) {
            dispatch(getAttributeById(attributesSubmit[0].id, callBackSubmit));
        }
    }, [attributesSubmit]);

    const isExistAttribute = (arr, at) => {
        let flag = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].attributeId === at.id) {
                flag = true;
            }
        }
        return flag;
    }

    const closePopup = () => {
        close();
        setAttributesSubmit([]);
        setTemptAttributes([]);
    }

    const submit = () => {
        let tempt = [...temptAttributes].filter(obj => obj.isActive === true);
        if (tempt.length > 0) {
            setAttributesSubmit(tempt);
        }
    }

    const callBackSubmit = (data) => {
        let temptData = {
            ...data,
            attributeId: data.id,
            values: data.values.map(dt => ({ ...dt, checked: true, attributeValueId: dt.id, id: 0 }))
        }
        mergeOption(temptData);
        let tempt = [...attributesSubmit];
        tempt.shift();
        if (tempt.length === 0) {
            let optionsMerge = [...options, { ...temptData }]
            closePopup();
            createProductVersion(optionsMerge);
        }
        setAttributesSubmit(tempt);
    }

    const onSelectAttribute = (attribute) => {
        let tempt = [...temptAttributes];
        for (let i = 0; i < tempt.length; i++) {
            if (tempt[i].id === attribute.id) {
                tempt[i].isActive = !attribute.isActive;
            }
        }
        setTemptAttributes(tempt);
    }

    const fetchMoreData = () => {
        console.log('fetch more')
    }

    return (
        <>
            <Modal
                show={isVisible}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="popup_add_option"
                width={"30rem"}
            >
                <div style={{ position: 'relative' }} className="container_add_option">
                    <h4>Add attribute</h4>
                    <h6>Select customize options attribute</h6>
                    <div id="scrollableDiv" className="wrap">
                        <InfiniteScroll
                            dataLength={temptAttributes.length ? temptAttributes.length : 0}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={
                                isLoading ?
                                    <ScaleLoader
                                        size={150}
                                        height={35}
                                        color={"#0764b0"}
                                        loading={true}
                                    />
                                    : null
                            }
                            scrollableTarget="scrollableDiv"
                        >
                            <AttributeListSelect
                                attributes={temptAttributes}
                                onSelectAttribute={onSelectAttribute}
                            />
                        </InfiniteScroll>
                    </div>

                    <div className="row_button_default_image">
                        <Button
                            variant="primary"
                            style={{ marginRight: 10, width: 140, height: 50, borderRadius: 0, background: "#FFFFFF", color: "#333", border: "1px solid #dddddd", }}
                            onClick={closePopup}
                        >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            style={{ background: "#1366AE", color: "white", width: 140, height: 50, borderRadius: 0, }}
                            onClick={submit}
                        >
                            Add selected
                        </Button>
                    </div>
                </div>
                {loadingAttribute && <Loading style={{ borderRadius: '20px' }} />}
            </Modal>
        </>
    );
};

const AttributeListSelect = ({ attributes = [], onSelectAttribute }) => {
    return attributes.map((at, i) => (
        <div
            className="row_between"
            key={i + "row_attribute"}
            onClick={() => onSelectAttribute(at)}
        >
            <div>{at.label}</div>
            <img
                src={at.isActive ? tick_active : tick_inactive}
                alt="imgj"
            />
        </div>
    ))
}

export default PopupAddOption;
