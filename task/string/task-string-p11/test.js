const index = require('./index');

test('should be return zuguligi', () => {
    expect(index('zuli')).toEqual('zuguligi');
});


test('should be return kuguraga kuguraga', () => {
    expect(index('kura kura')).toEqual('kuguraga kuguraga');
});
