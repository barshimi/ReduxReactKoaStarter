/**
 *  logo svg component
 */

import React from 'react';


export default class SvgLogo extends React.Component {
    static propTypes = {
        width: React.PropTypes.string,
        height: React.PropTypes.string
    }

    render() {
        const { width , height } = this.props;
        return (
          <div className="avatar">
           <svg enableBackground="new -27 24 100 100" height={ height } id="female1" version="1.1" viewBox="-27 24 100 100" width={ width } xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><circle cx="23" cy="74" fill="#F5EEE5" r="50"/><g><defs><circle cx="23" cy="74" id="SVGID_1_" r="50"/></defs><clipPath id="SVGID_2_"><use overflow="visible" xlinkHref="#SVGID_1_"/></clipPath><rect clipPath="url(#SVGID_2_)" fill="#D98C21" height="43" width="31" x="-3" y="65"/><rect clipPath="url(#SVGID_2_)" fill="#CC751F" height="47" width="31" x="18" y="61"/><path clipPath="url(#SVGID_2_)" d="M36,95.9c0,4,4.7,5.2,7.1,5.8c7.6,2,22.8,5.9,22.8,5.9      c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8c1.3-3.1,3.9-5.5,7.1-6.6c0,0,15.2-3.9,22.8-5.9c2.4-0.6,7.1-1.8,7.1-5.8      c0-4,0-10.9,0-10.9h26C36,85,36,91.9,36,95.9z" fill="#E6C19C"/><g clipPath="url(#SVGID_2_)"><defs><path d="M36,95.9c0,4,4.7,5.2,7.1,5.8c7.6,2,22.8,5.9,22.8,5.9c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8        c1.3-3.1,3.9-5.5,7.1-6.6c0,0,15.2-3.9,22.8-5.9c2.4-0.6,7.1-1.8,7.1-5.8c0-4,0-10.9,0-10.9h26C36,85,36,91.9,36,95.9z" id="SVGID_3_"/></defs><clipPath id="SVGID_4_"><use overflow="visible" xlinkHref="#SVGID_3_"/></clipPath><path clipPath="url(#SVGID_4_)" d="M23.2,35l0.2,0l0,0c3.3,0,8.2,0.2,11.4,2c3.3,1.9,7.3,5.6,8.5,12.1       c2.4,13.7-2.1,35.4-6.3,42.4c-4,6.7-9.8,9.2-13.5,9.4l-0.1,0l-0.2,0l-0.2,0l-0.1,0c-3.7-0.2-9.5-2.7-13.5-9.4       c-4.2-7-8.7-28.7-6.3-42.4c1.2-6.5,5.2-10.2,8.5-12.1c3.2-1.8,8.1-2,11.4-2l0,0L23.2,35z" fill="#D4B08C"/><path clipPath="url(#SVGID_4_)" d="M-27,82H73v42H-27V82z M23,113c12.1,0,20.8-14.1,20.8-14.1S33.9,83,23,83       S2.2,98.9,2.2,98.9S10.9,113,23,113z" fill="#6B363E"/><g clipPath="url(#SVGID_4_)"><defs><path d="M-27,82H73v42H-27V82z M23,113c12.1,0,20.8-14.1,20.8-14.1S33.9,83,23,83S2.2,98.9,2.2,98.9         S10.9,113,23,113z" id="SVGID_5_"/></defs><clipPath id="SVGID_6_"><use overflow="visible" xlinkHref="#SVGID_5_"/></clipPath><path clipPath="url(#SVGID_6_)" d="M45.4,101.7c-1.3,10-9.3,17.3-9.3,17.3s-8.2-7-10.2-7.6        c12.7-7.6,17.1-12,17.1-12S46.6,91.7,45.4,101.7z M0.7,101.7C2,111.8,10,119,10,119s8.2-7,10.2-7.6c-12.7-7.6-17.1-12-17.1-12        S-0.5,91.7,0.7,101.7z" fill="#FFFFFF"/></g></g></g><path d="M23,40c19.1,0,20.7,13.8,20.8,15.1c1.1,11.9-3,28.1-6.8,33.7c-4,5.9-9.8,8.1-13.5,8.3c-0.2,0-0.2,0-0.3,0     L23,97c-3.8-0.2-9.6-2.4-13.6-8.3c-3.8-5.6-7.9-21.8-6.8-33.8C2.7,53.7,3.9,40,23,40z" fill="#F2CEA5"/><path d="M18.8,85c-0.2,0-0.4,0.4-0.3,0.7c0.9,2.1,2.3,3.3,4.2,3.4c2,0.2,4.1-1.2,5.2-3.4c0.1-0.3,0-0.7-0.3-0.7     L18.8,85z" fill="#A3705F"/><circle cx="32" cy="69" fill="#262626" r="2"/><circle cx="14" cy="69" fill="#262626" r="2"/><path d="M8.5,64.2c0,0,1.4-1.2,4.9-1.2c2.5,0,4.9,0.7,6.4,2.6" fill="none" stroke="#CC9872" strokeWidth="2"/><path d="M37.4,64.2c0,0-1.4-1.2-4.9-1.2s-6.9,1.5-7.7,5.7s0.3,7.7,2.1,10.1" fill="none" stroke="#BB8660" strokeWidth="2"/><path d="M-3,69.3c2.4-0.9,7.2-3.5,12-11.9c6.8-12,17.2-6.5,20.5-2.6c0.4,0.4,0.9,0.2,0.9,0.2s8.6-3.7,12,3.8     c2.5,5.5,3.9,7.1,6.5,8.8v-7.9C49,44.2,39.5,44,39.1,44s-0.7,0-0.9-0.6C37.3,40.5,28,30.9,12.4,37S-3,65-3,65V69.3z" fill="#E6A422"/><g><defs><path d="M-3,69.3c2.4-0.9,7.2-3.5,12-11.9c6.8-12,17.2-6.5,20.5-2.6c0.4,0.4,0.9,0.2,0.9,0.2s8.6-3.7,12,3.8       c2.5,5.5,3.9,7.1,6.5,8.8v-7.9C49,44.2,39.5,44,39.1,44s-0.7,0-0.9-0.6C37.3,40.5,28,30.9,12.4,37S-3,65-3,65V69.3z" id="SVGID_7_"/></defs><clipPath id="SVGID_8_"><use overflow="visible" xlinkHref="#SVGID_7_"/></clipPath><path clipPath="url(#SVGID_8_)" d="M29.8,55.6c0,0,3-7.5,9-12.1S50,50.9,50,50.9l0.3,19.6L29.8,55.6z" fill="#D98C21"/></g></g></g></svg>
          </div>
        )
    }
}