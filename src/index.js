import React from 'react';
import { withTheme } from 'emotion-theming';
console.log(React);

const withResponsiveProps = (responsiveProps = []) => Component => withTheme(props => {
    Object.keys(props).forEach(propName => {
        if (responsiveProps.indexOf(propName) !== -1) {
            console.log(`${propName}: make this responsive please.`);
        }
    })
    const newProps = props;

    console.log(props);
    console.log(newProps);
    return <Component {...newProps} />
});

export default withResponsiveProps;
