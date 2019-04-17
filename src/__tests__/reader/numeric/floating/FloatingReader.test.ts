/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import FloatingReaderData from '../../../resources/mocks/reader/data/FloatingReaderData';
import readerTestSuite from '../../../resources/suites/reader/ReaderTestSuite';

import Genetics from '../../../../index';
const { FloatingReader } = Genetics.reader;

const reader = new FloatingReader();
readerTestSuite(reader, FloatingReaderData);
