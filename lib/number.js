'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var pow = Math.pow;


// SKEWNESS //

/**
* FUNCTION skewness( lambda )
*	Computes the distribution skewness for a Poisson distribution with parameter lambda.
*
* @param {Number} lambda - mean parameter
* @returns {Number} distribution skewness
*/
function skewness( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return pow( lambda, -0.5 );
} // end FUNCTION skewness()


// EXPORTS

module.exports =  skewness;
