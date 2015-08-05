/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	skewness = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number skewness', function tests() {

	it( 'should export a function', function test() {
		expect( skewness ).to.be.a( 'function' );
	});

	it( 'should compute the distribution skewness', function test() {
		assert.closeTo( skewness( 4 ), 0.5, 1e-5 );
		assert.closeTo( skewness( 8  ), 0.3535534, 1e-5 );
		assert.closeTo( skewness( 16  ), 0.25, 1e-5 );
		assert.closeTo( skewness( 32  ), 0.1767767, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter lambda', function test() {
		assert.isTrue( isnan( skewness( -1 ) ) );
	});

});
