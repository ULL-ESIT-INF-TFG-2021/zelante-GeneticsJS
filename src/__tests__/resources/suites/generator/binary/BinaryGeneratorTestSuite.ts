/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import {BinaryGenerator, BinaryGeneratorParams } from '../../../../../generator/binary/BinaryGenerator';
import { BinaryIndividual } from '../../../../../individual/binary';

const binaryGeneratorTestSuite = <
  G extends BinaryGenerator,
  I extends BinaryIndividual,
  Params extends BinaryGeneratorParams
>(
  generator: G,
  individual: I,
  params: Params,
) => {
  describe('BinaryGenerator tests', () => {
    test('creation length test', () => {
      expect(individual.length()).toEqual(params.length);
    });
  });

  describe('chance error with negative chance', () => {
    expect(() => generator.generate(params.length, Number.NEGATIVE_INFINITY, params.engine)).toThrow(Error);
    expect(() => generator.generate(params.length, -0.000000000000000001, params.engine)).toThrow(Error);
    expect(() => generator.generate(params.length, -1000, params.engine)).toThrow(Error);
  });

  describe('chance error with positive chance', () => {
    expect(() => generator.generate(params.length, Number.POSITIVE_INFINITY, params.engine)).toThrow(Error);
    expect(() => generator.generate(params.length, 1.001, params.engine)).toThrow(Error);
    expect(() => generator.generate(params.length, 1000, params.engine)).toThrow(Error);
  });
};

export default binaryGeneratorTestSuite;
