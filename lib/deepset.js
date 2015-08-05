'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	SKEWNESS  = require( './number.js' );


// SKEWNESS //

/**
* FUNCTION: skewness( arr, path[, sep] )
*	Computes the distribution skewness and deep sets the input array.
*
* @param {Array} arrays - input array
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array} input array
*/
function skewness( arr, path, sep ) {
	var len = arr.length,
		opts = {},
		dget,
		dset,
		v, i;
	if ( arguments.length > 2 ) {
		opts.sep = sep;
	}
	if ( len ) {
		dget = deepGet( path, opts );
		dset = deepSet( path, opts );
		for ( i = 0; i < len; i++ ) {
			v = dget( arr[ i ] );
			if ( typeof v === 'number' ) {
				dset( arr[i], SKEWNESS ( v ) );
			} else {
				dset( arr[i], NaN );
			}
		}
	}
	return arr;
} // end FUNCTION skewness()


// EXPORTS //

module.exports = skewness;
