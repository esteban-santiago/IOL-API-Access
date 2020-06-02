'use strict';

import { SupervisedLearning as sl } from '../services/machine_learning/machine_learning.js';
import chai from 'chai';


const { expect } = chai;
const { assert } = chai;



describe('#Helpers', function () {
    describe('#1 - MachineLearning', () => {
        describe('#1 - getAccurateLRModel()', () => {
            it('should predict one point in the model', () => {
                let model = sl.getAccurateLRModel([[2, 5], [6, 7], [0, 4]]);
                assert.equal(model(4), 6);
            });
        });
    });
});
