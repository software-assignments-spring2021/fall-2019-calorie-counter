const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
let food = require('../backend/models/food.model');
let analysis = require('../backend/analysis.js');

describe('Analyzing and creating some statistics for a list of meals/food assuming current day is October 25th', function () {
    var sampleData = [];
    var empty = [];
    var eggs = {'food_name':'eggs','username':'uri','calorie':500,'time_eaten':new Date('October 25, 2019 09:20:00')}
    var cburger = {'food_name':'cheeseburger','username':'uri','calorie':1800,'time_eaten':new Date('October 25, 2019 12:20:00')}
    var chkn = {'food_name':'chicken nuggets','username':'uri','calorie':1000,'time_eaten':new Date('October 24, 2019 17:20:00')}
    var pizza = {'food_name':'pizza','username':'uri','calorie':1200,'time_eaten':new Date('October 24, 2019 13:20:00')}
    var pancake = {'food_name':'pancakes','username':'uri','calorie':600,'time_eaten':new Date('October 24, 2019 09:20:00')}
    sampleData.push(eggs);
    sampleData.push(cburger);
    sampleData.push(chkn);
    sampleData.push(pizza);
    sampleData.push(pancake);
    

    it('should return correct total amount of calories for meals in a day and return 0 cal today for empty data received', function testGetTotalCaloriesToday(done) {
      getCaloriesToday(sampleData).should.equal(2300);
      getCaloriesToday(empty).should.equal(0);
    });

    it('should return correct total amount of calories for meals in the past week and return 0 cal for week for empty data received', function testGetTotalCaloriesWeek(done) {
      getCaloriesWeek(sampleData).should.equal(5100);
      getCaloriesWeek(empty).should.equal(0);
    });

    it('should return correct average calories per meal for past week and return 0 avg calories for week for empty data received', function testGetTotalCaloriesWeek(done) {
      getAvgCaloriesWeek(sampleData).should.equal(1200);
      getAvgCaloriesWeek(empty).should.equal(0);
    });

    it('should return amount of calories over recommended (2000), if any, for the past day and return 0 for empty data received', function testGetTotalCaloriesWeek(done) {
      getCaloriesOverToday(sampleData).should.equal(300);
      getCaloriesOverToday(empty).should.equal(0);
    });

    it('should return amount of calories over recommended (2000), if any, for the past week and return 0 for empty data received', function testGetTotalCaloriesWeek(done) {
      getCaloriesOverWeek(sampleData).should.equal(0);
      getCaloriesOverWeek(empty).should.equal(0);
    });

    it('should return most calorie-heavy dish of the month', function testMostCalorieDish(done) {
      getMostCalorieDish(sampleData).expect.equal(cburger);
      getMostCalorieDish(empty).expect.equal(null);
    });

    it('should return least calorie-heavy dish of the month', function testLeastCalorieDish(done) {
      getLeastCalorieDish(sampleData).expect.equal(eggs);
      getLeastCalorieDish(empty).expect.equal(null);
    });

    it('should return dishes under certain amount of calories', function testFindDishesUnder(done) {
      var under750 = [eggs, pancake];
      FindDishesUnder(sampleData, 750).expect.equal(under750);
    });

    it('should return dishes over certain amount of calories', function testFindDishesOver(done) {
      var over1000 = [pizza, cburger];
      FindDishesOver(sampleData, 1000).expect.equal(over1000);
    });

    it('should return all meals from a given date', function testFindMealsByDate(done) {
      var oct25meals = [eggs, cburger];
      FindMealsByDate(sampleData, new Date('October 25, 2019 00:00:00')).expect.equal(oct25meals);
    });

  });