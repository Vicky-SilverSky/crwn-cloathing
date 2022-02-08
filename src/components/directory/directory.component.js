import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectory } from "../../redux/directory/directory.selectors";
import { DirectoryMenu } from "./directory.styles";

const Directory = ({ diretories }) => (
    <DirectoryMenu>
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
    </DirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
    diretories: selectDirectory
})

export default connect(mapStateToProps)(Directory)
