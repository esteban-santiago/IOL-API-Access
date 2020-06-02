'use strict';

import Algebra from '../helpers/algebra.js';
import chai from 'chai';


const { expect } = chai;
const { assert } = chai;


import AuthService from '../services/auth/auth_service.js';

describe('#Helpers', function () {
    describe('#1 - Algebra()', () => {
        describe('#1 - getLinearRegressionModel()', () => {
            it('should predict one point in the model', () => {
                let model = Algebra.getLinearRegressionModel([[2, 5], [6, 7], [0, 4]]);
                assert.equal(model(4), 6);
            }
            );
        });
    });
});
