import * as funcs from './validation-functions';


describe('Validation Function', () => {
  it('digitCount should return length in digits', () => {
    let msg = '';

    msg = 'null has no digits';
    expect(funcs.digitCount(<any>null)).toBe(0, msg);

    msg = 'undefined has no digits';
    expect(funcs.digitCount(<any>undefined)).toBe(0, msg);

    msg = 'NaN has no digits';
    expect(funcs.digitCount(NaN)).toBe(0, msg);

    msg = 'not numbers have no digits';
    expect(funcs.digitCount(<any>'foo')).toBe(0, msg);
    expect(funcs.digitCount(<any>[])).toBe(0, msg);
    expect(funcs.digitCount(<any>{foo: 'bar'})).toBe(0, msg);

    msg = '0 has one digit';
    expect(funcs.digitCount(0)).toBe(1, msg);

    msg = '1 has one digit';
    expect(funcs.digitCount(1)).toBe(1, msg);

    msg = '42 has two digits';
    expect(funcs.digitCount(42)).toBe(2, msg);

    msg = '-42 has two digits';
    expect(funcs.digitCount(-42)).toBe(2, msg);

    msg = '0.42 has three digits';
    expect(funcs.digitCount(0.42)).toBe(3, msg);

    msg = 'Infinite values have infinite digits';
    expect(funcs.digitCount(Number.POSITIVE_INFINITY)).toBe(Infinity, msg);
    expect(funcs.digitCount(Number.NEGATIVE_INFINITY)).toBe(Infinity, msg);
  });

  it('decimalCount should return length of decimal part', () => {
    let msg = '';

    msg = 'null has no decimal part';
    expect(funcs.decimalCount(<any>null)).toBe(0, msg);

    msg = 'empty string has no decimal part';
    expect(funcs.decimalCount('')).toBe(0, msg);

    msg = 'undefined has no decimal part';
    expect(funcs.decimalCount(<any>undefined)).toBe(0, msg);

    msg = 'NaN has no decimal part';
    expect(funcs.decimalCount(NaN)).toBe(0, msg);

    msg = 'objects have no decimal part';
    expect(funcs.decimalCount(<any>{})).toBe(0, msg);

    msg = '"foo" string has no decimal part';
    expect(funcs.decimalCount('foo')).toBe(0, msg);

    msg = '"1" string has no decimal part';
    expect(funcs.decimalCount('1')).toBe(0, msg);

    msg = 'integer has no decimal part';
    expect(funcs.decimalCount(0)).toBe(0, msg);
    expect(funcs.decimalCount(1)).toBe(0, msg);
    expect(funcs.decimalCount(42)).toBe(0, msg);

    msg = '0.42 has two decimal digits';
    expect(funcs.decimalCount(0.42)).toBe(2, msg);

    msg = '-0.42 has two decimal digits';
    expect(funcs.decimalCount(-0.42)).toBe(2, msg);

    msg = '"0.42" string has two decimal digits';
    expect(funcs.decimalCount('0.42')).toBe(2, msg);

    msg = '"0.4200" string has two decimal digits';
    expect(funcs.decimalCount('0.4200')).toBe(2, msg);
  });
  it('isInt should recognize integers given their string representation', () => {
    let msg = '';

    msg = 'null should not be seen as integer';
    expect(funcs.isInt(<any>null)).toBe(false, msg);

    msg = 'undefined should not be seen as integer';
    expect(funcs.isInt(<any>undefined)).toBe(false, msg);

    msg = 'NaN should not be seen as integer';
    expect(funcs.isInt(NaN)).toBe(false, msg);

    msg = 'wrong typed value should not be seen as integer';
    expect(funcs.isInt(<any>[])).toBe(false, msg);
    expect(funcs.isInt(<any>{})).toBe(false, msg);

    msg = 'empty string should not be seen as integer';
    expect(funcs.isInt('')).toBe(false, msg);

    msg = '"foo" string should not be seen as integer';
    expect(funcs.isInt('foo')).toBe(false, msg);

    msg = 'string of float should not be seen as integer';
    expect(funcs.isInt('0.42')).toBe(false, msg);

    msg = 'string of integer should be seen as integer';
    expect(funcs.isInt('42')).toBe(true, msg);

    msg = 'string of negative integer should be seen as integer';
    expect(funcs.isInt('-42')).toBe(true, msg);

    msg = 'float should not be seen as integer';
    expect(funcs.isInt(0.42)).toBe(false, msg);

    msg = 'integer should be seen as integer';
    expect(funcs.isInt(42)).toBe(true, msg);

    msg = 'negative integer should be seen as integer';
    expect(funcs.isInt(-42)).toBe(true, msg);
  });
  it('sumLastProperties should return the sum of the number not the concat string', () => {
    let msg = '';
    const src = [{'a': 3, 'b': 5, 'c': '', 'd': 10}];
    const props = ['a', 'b', 'c', 'd'];

    msg = 'empty string should not be sum as string';
    expect(funcs.sumLastProperties(src, props)).toBe(18, msg);
  });
  it('extractArray should return the sum of the number not the concat string', () => {
    let msg = '';
    const src = [{'a': 3, 'b': ''}, {'a': 2, 'b': 6}, {'a': 2, 'b': null}];
    const props = ['a', 'b'];

    msg = 'empty string should not be sum as string';
    expect(funcs.extractArray(src, props[0], props[1])).toEqual([3, 8, 2], msg);
  });
});
