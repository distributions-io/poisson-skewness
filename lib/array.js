'use strict';

// MODULES //

var SKEWNESS = require( './number.js' );


// SKEWNESS //

/**
* FUNCTION: skewness( out, lambda )
*	Computes the distribution skewness for parameters stored in an array.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} lambda - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function skewness( out, arr ) {
	var len = arr.length,
		i;
	for ( i = 0; i < len; i++ ) {
		if ( typeof arr[ i ] === 'number' ) {
			out[ i ] = SKEWNESS( arr[ i ] );
		} else {
			out[ i ] = NaN;
		}
	}
	return out;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
