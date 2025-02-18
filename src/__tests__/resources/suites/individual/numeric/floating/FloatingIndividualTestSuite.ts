/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import {FloatingIndividual} from '../../../../../../individual/numeric/floating/FloatingIndividual';
import FloatingIndividualMock from '../../../../mocks/individual/numeric/floating/FloatingIndividualMock';

const floatingIndividualTestSuite = (floatingIndividualTests: FloatingIndividualMock) => {
  describe('FloatingIndividual test suite', () => {
    test('creation test', () => {
      const { representation, range } = floatingIndividualTests.creation;
      const individual = new FloatingIndividual(representation, range);
      expect(individual.genotype).toEqual(floatingIndividualTests.expectedGenotype);
      expect(individual.range).toEqual(floatingIndividualTests.expectedRange);
    });

    if (floatingIndividualTests.creationError !== undefined) {
      test('creation error test', () => {
        const creationError = floatingIndividualTests.creationError!;
        creationError.forEach(test => {
          const { representation, range } = test;
          expect(() => new FloatingIndividual(representation, range)).toThrow(Error);
        });
      });
    }
  });
};

export default floatingIndividualTestSuite;
