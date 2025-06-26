import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

test('menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('menjumlahkan angka negatif', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test('menjumlahkan angka positif dan negatif', () => {
  assert.strictEqual(sum(5, -3), 2);
});

test('menjumlahkan dengan nol', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(10, 0), 10);
});

test('menjumlahkan nol dengan nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('menjumlahkan angka desimal', () => {
  assert.strictEqual(sum(1.5, 2.3), 3.8);
});

test('menjumlahkan angka besar', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
});