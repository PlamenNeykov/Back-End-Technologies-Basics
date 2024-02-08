import{sum} from './sum.js'
import {expect} from 'chai'

describe('The function sum', ()=> {
    it ('should return 0 if an empty array is given',() =>{
        // Arrange
        const imputArr =[];

        //Act
        const result = sum(imputArr);

        //Assert
        expect(result).to.equals(0)
    })

    it ('should return single element by single element array',()=>{
        //Arrange
        const inputArr = [3];

        //Act
        const result = sum(inputArr)
        
        //Assert
        expect(result).to.equals(3)
    })
})