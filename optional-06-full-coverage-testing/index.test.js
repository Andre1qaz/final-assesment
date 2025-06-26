import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function - valid positive numbers', () => {
  // Test dengan angka positif
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 15), 25);
  assert.strictEqual(sum(1, 1), 2);
  assert.strictEqual(sum(100, 200), 300);
});

test('sum function - zero values', () => {
  // Test dengan nilai nol (edge case untuk kondisi a < 0 || b < 0)
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum function - negative numbers', () => {
  // Test dengan angka negatif - harus return 0
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
  assert.strictEqual(sum(-10, -5), 0);
});

test('sum function - non-number types', () => {
  // Test dengan string
  assert.strictEqual(sum('5', 3), 0);
  assert.strictEqual(sum(3, '5'), 0);
  assert.strictEqual(sum('hello', 'world'), 0);
  
  // Test dengan boolean
  assert.strictEqual(sum(true, 5), 0);
  assert.strictEqual(sum(5, false), 0);
  assert.strictEqual(sum(true, false), 0);
  
  // Test dengan null
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(5, null), 0);
  assert.strictEqual(sum(null, null), 0);
  
  // Test dengan undefined
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum(undefined, undefined), 0);
  
  // Test dengan array
  assert.strictEqual(sum([1, 2], 5), 0);
  assert.strictEqual(sum(5, [1, 2]), 0);
  assert.strictEqual(sum([1], [2]), 0);
  
  // Test dengan object
  assert.strictEqual(sum({}, 5), 0);
  assert.strictEqual(sum(5, {}), 0);
  assert.strictEqual(sum({a: 1}, {b: 2}), 0);
});

test('sum function - decimal numbers', () => {
  // Test dengan angka desimal
  assert.strictEqual(sum(2.5, 3.5), 6);
  assert.strictEqual(sum(1.1, 2.2), 3.3000000000000003); // floating point precision
  assert.strictEqual(sum(0.1, 0.2), 0.30000000000000004); // floating point precision
});

test('sum function - large numbers', () => {
  // Test dengan angka besar
  assert.strictEqual(sum(1000000, 2000000), 3000000);
  assert.strictEqual(sum(Number.MAX_SAFE_INTEGER, 0), Number.MAX_SAFE_INTEGER);
});

test('sum function - special number values', () => {
  // Test dengan NaN - typeof NaN adalah 'number', jadi akan masuk ke operasi a + b
  // Hasil a + b dengan NaN akan selalu NaN
  assert.strictEqual(Number.isNaN(sum(NaN, 5)), true);
  assert.strictEqual(Number.isNaN(sum(5, NaN)), true);
  assert.strictEqual(Number.isNaN(sum(NaN, NaN)), true);
  
  // Test dengan Infinity - typeof Infinity adalah 'number' dan Infinity >= 0
  assert.strictEqual(sum(Infinity, 5), Infinity);
  assert.strictEqual(sum(5, Infinity), Infinity);
  assert.strictEqual(sum(Infinity, Infinity), Infinity);
  
  // Test dengan -Infinity (negatif, jadi harus return 0)
  assert.strictEqual(sum(-Infinity, 5), 0);
  assert.strictEqual(sum(5, -Infinity), 0);
  assert.strictEqual(sum(-Infinity, -Infinity), 0);
});

test('sum function - mixed edge cases', () => {
  // Test kombinasi berbagai edge cases
  assert.strictEqual(sum(0, -1), 0); // zero dengan negatif
  assert.strictEqual(sum(-1, 0), 0); // negatif dengan zero
  assert.strictEqual(sum('0', 0), 0); // string zero dengan number zero
  assert.strictEqual(sum(0, '0'), 0); // number zero dengan string zero
});