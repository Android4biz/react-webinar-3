// @ts-nocheck
import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onAddItem, cart }) {

    return <div className="List">
            {list.map(item => <div key={item.code} className="List-item">
                    <Item item={item} onAddItem={onAddItem} />
                </div>)}
        </div>;
}

List.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.number,
        })
    ).isRequired,
    onAddItem: PropTypes.func
};

List.defaultProps = {
    onAddItem: () => {}
};

export default React.memo(List);