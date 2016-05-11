import FirstController from '../../../app/first/first-controller'

describe("first controller", function() {

    let firstController;

    beforeEach(function() {
        firstController = new FirstController();
    });

    it("should initialize a greeting message when bootstraped", function() {
        expect(firstController.helloMessage).toBe('hello world');
    });
});
