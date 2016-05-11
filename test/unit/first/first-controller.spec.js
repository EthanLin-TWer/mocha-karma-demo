import { expect } from 'chai'
import FirstController from '../../../app/first/first-controller.js'

describe('first controller', function() {
    describe('when initialized', function () {
        var firstController;

        beforeEach(function() {
            firstController = new FirstController();
        });

        it('should have a hello message variable', function () {
            expect(firstController.helloMessage).to.equal('hello world')
        });
    });
});
