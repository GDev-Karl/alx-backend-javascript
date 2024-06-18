// __tests__/displayMessage.test.js
const displayMessage = require('../0-console')

describe('displayMessage', () => {
    it('should call console.log with the correct message', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const message = 'Hello, world!';

        displayMessage(message);

        expect(consoleSpy).toHaveBeenCalledWith(message);

        consoleSpy.mockRestore();
    });
});
