import React from "react";
import './directory.styles.scss'

import MenuItem from "../menu-item/menu-item.component";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectory } from "../../redux/directory/directory.selectors";

const Directory = ({ diretories }) => (
    <div className='directory-menu'>
        {
            diretories.map(({ id, ...otherParams }) => {
                return (
                    <MenuItem
                        key={id}
                        {...otherParams}
                    />
                )
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    diretories: selectDirectory
})

export default connect(mapStateToProps)(Directory)
