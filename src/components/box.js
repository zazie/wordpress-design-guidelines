/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';
import { typography, space, color } from 'styled-system';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Box( props ) {
	const [ classnames ] = useClassNames( props, 'Box' );

	return <BoxUI { ...props } className={ classnames() } />;
}

const BoxUI = styled( 'div' )( typography, space, color );