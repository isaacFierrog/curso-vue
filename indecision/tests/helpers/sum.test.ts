import { expect, test, describe } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum'

describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
        // preparacion
        const a = 1;
        const b = 5;
    
        // estimula
        const res = sum(a, b);
    
        // resultado
        expect(res).toBe(a + b);
    })
})

describe('addArray function', () => {
    test('Deberia ser 0 si el array esta vacio', () => {
        const arr = [];
    
        const res = addArray(arr);
    
        expect(res).toBe(0);
    });
    
    test('Suma de numeros en un arreglo', () => {
        //preparacion
        const arr = [1,2,4];
    
        //estimulo
        const  res = addArray(arr);
    
        // resultado
        expect(res).toBe(7);
    })
})