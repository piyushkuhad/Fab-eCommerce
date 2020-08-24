import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const Directory = ({ sections }) => {
    return(
        <div className="directory-menu">
            {
                // this.state.sections.map(({title, imageUrl, size, id, linkUrl}) => (
                //     <MenuItem 
                //         key={id} 
                //         title={title} 
                //         imageUrl = {imageUrl}
                //         size={size}
                //         linkUrl = {linkUrl}
                //     />
                // ))
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem 
                        key={id} 
                        {...otherSectionProps}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);