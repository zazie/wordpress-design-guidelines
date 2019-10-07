/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../../utils';

export default function Positioner( props ) {
	const [ classnames ] = useClassNames( 'ColorInfoPositioner', props );
	return <PositionUI { ...props } classNames={ classnames() } />;
}

const PositionUI = styled.div`
	position: fixed;
	bottom: 10px;
	right: 10px;
	z-index: 100;
`;
