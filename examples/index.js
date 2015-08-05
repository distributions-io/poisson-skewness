'use strict';

var matrix = require( 'dstructs-matrix' ),
	skewness = require( './../lib' );

var lambda,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
lambda = new Array( 10 );
for ( i = 0; i < lambda.length; i++ ) {
	lambda[ i ] = i;
}
out = skewness( lambda );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < lambda.length; i++ ) {
	lambda[ i ] = {
		'x': lambda[ i ]
	};
}
out = skewness( lambda, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < lambda.length; i++ ) {
	lambda[ i ] = {
		'x': [ i, lambda[ i ].x ]
	};
}
out = skewness( lambda, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
lambda = new Float64Array( 10 );
for ( i = 0; i < lambda.length; i++ ) {
	lambda[ i ] = i;
}
tmp = skewness( lambda );
out = '';
for ( i = 0; i < lambda.length; i++ ) {
	out += tmp[ i ];
	if ( i < lambda.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( lambda, [5,2], 'float64' );
out = skewness( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = skewness( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );
