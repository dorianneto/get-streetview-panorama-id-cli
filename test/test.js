'use strict';
import test from 'ava';
import execa from 'execa';

const PANO_ID = 'F:-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S0fV-EYAEqJfYCq_b5asuJ5iKbgcw';
const EMBED   = 'https://www.google.com/maps/embed/v1/streetview?pano=' + PANO_ID + '&key=YOUR_APIKEY'
const URL     = 'https://www.google.com/maps/contrib/102203465270483008280/photos/@-43.6982751,170.0969594,3a,75y,30.' +
								'47h,90t/data=!3m8!1e1!3m6!1s-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S0fV-EYAEqJfYCq_b5asuJ5' +
								'iKbgcw!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S' +
								'0fV-EYAEqJfYCq_b5asuJ5iKbgcw%2Fw203-h100-p-k-no%2F!7i14000!8i7000!4m3!8m2!3m1!1e1!6m1!1e1';

function decodeValue(value) {
	return decodeURIComponent(value);
}

test('empty option', async t => {
	let expected = '\n   Copy the panorama ID: ' + decodeValue(PANO_ID);

	t.is((await execa('../cli.js', [URL])).stdout, expected);
});

test('option -e', async t => {
	let expected = '\n   Copy the embed url: ' + decodeValue(EMBED);

	t.is((await execa('../cli.js', [URL, '-e'])).stdout, expected);
});