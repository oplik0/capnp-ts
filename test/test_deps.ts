export { assert, assertEquals, assertThrows, fail } from '@std/assert';

export const { test } = Deno;
export type Test = Deno.TestContext;

export * as testcheck from 'npm:testcheck';
