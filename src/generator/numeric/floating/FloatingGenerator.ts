/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../utils';
import { NumericParams } from '../base/NumericGenerator';
import { FloatingIndividual } from './../../../individual/numeric/floating';
import { NumericGenerator } from './../base';

/**
 * ## Floating generator
 * Generates a [[FloatingIndividual]].
 */
export class FloatingGenerator extends NumericGenerator<FloatingIndividual> {
  /**
   * Generates a gene with the specified
   * params.
   * @param params of the generator.
   * @return the generated gene.
   */
  public generateGene(params: NumericParams): number {
    return Generator.generateFloating(params.range, params.engine);
  }

  /**
   * Construct the [[FloatingIndividual]] with
   * the specified genotype and range.
   * @param genotype of the generated individual.
   * @param params of the generator.
   * @return Constructed [[FloatingIndividual]] from genotype.
   */
  public construct(genotype: number[], params: NumericParams): FloatingIndividual {
    return new FloatingIndividual(genotype, params.range);
  }
}
