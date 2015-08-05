'use strict';

// MODULES //

var SKEWNESS = require( './number.js' );


// SKEWNESS //

/**
* FUNCTION: skewness( out, x )
*	Computes the distribution skewness for each parameter stored in a matrix.
*
* @param {Matrix} out - output matrix
* @param {Matrix} x - input matrix
* @returns {Matrix} output matrix
*/
function skewness( out, x ) {
	var len = x.length,
		i;
	if ( out.length !== len ) {
		throw new Error( 'skewness()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	for ( i = 0; i < len; i++ ) {
		out.data[ i ] = SKEWNESS( x.data[ i ] );
	}
	return out;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
