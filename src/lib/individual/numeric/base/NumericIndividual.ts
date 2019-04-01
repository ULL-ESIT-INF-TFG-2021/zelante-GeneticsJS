/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MutableIndividual } from './../../base/';

export interface NumericRange {
  lowest: number;
  highest: number;
}

abstract class NumericIndividual extends MutableIndividual<number> {
  constructor(genotype: number[], private _range: NumericRange) {
    super(genotype);
  }

  get range(): NumericRange {
    return this._range;
  }

  set range(range: NumericRange) {
    if (range.lowest < range.highest) {
      this._range = range;
    } else {
      throw new Error('range is not valid, first element must be lower than last');
    }
  }

  public copy(other: NumericIndividual): void {
    super.copy(other);
    this.range = other.range;
  }

  public deepCopy(other: NumericIndividual): void {
    this.setGenotype(Array.from(other.genotype));
    this.range = {
      highest: other.range.highest,
      lowest: other.range.lowest,
    };
  }

  public set(geneIndex: number, gene: number): void {
    this.checkGeneRange(gene);
    super.set(geneIndex, gene);
  }

  public fill(gene: number, start: number, end: number) {
    this.checkGeneRange(gene);
    super.fill(gene, start, end);
  }

  public map(callback: (gene: number, geneIndex?: number, genotype?: number[]) => number) {
    const inRangeCallback = (gene: number, geneIndex?: number, genotype?: number[]) => {
      const result = callback(gene, geneIndex, genotype);
      this.checkGeneRange(result);
      return result;
    };
    super.map(inRangeCallback);
  }

  protected checkGeneRange(gene: number) {
    if (!this.geneIsInRange(gene)) {
      throw new RangeError(`Range error: gene value ${gene} is not in range`);
    }
  }

  protected geneIsInRange(gene: number): boolean {
    return gene >= this.range.lowest && gene <= this.range.highest;
  }

  protected geneToString(gene: number): string {
    return gene.toString();
  }
}

export default NumericIndividual;
