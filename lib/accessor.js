'use strict';

// MODULES //

var SKEWNESS = require( './number.js' );


// SKEWNESS //

/**
* FUNCTION: skewness( out, arr, accessor )
*	Computes the distribution skewness for parameters stored in an array using an accessor function.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function skewness( out, arr, clbk ) {
	var len = arr.length,
		v, i;
	for ( i = 0; i < len; i++ ) {
		v = clbk( arr[ i ], i );
		if ( typeof v === 'number' ) {
			out[ i ] = SKEWNESS( v );
		} else {
			out[ i ] = NaN;
		}
	}
	return out;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
