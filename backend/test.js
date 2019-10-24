/*describe('Our application', function() {

    // This is the name of the test
    it('should understand basic mathematical principles', function(done) {
  
      // We want this test to pass.
      if (5 == 3) {
        // If the behavior is as expected, call done with no argument.
        done();
      } 
      else {
        // Otherwise, call done with an error.
        done(new Error("Not sure what's happened."));
      }
  
    });
  
  });*/

  var request = require("supertest");
  describe('loading express', function () {
    var server;
    before(function () {
      delete require.cache[require.resolve('./server')];
      server = require('./server');
    });
    after(function (done) {
      server.close()
      done();
    });
    
    
    it('responds to /users/',function testUserGet(done){
      request(server)
      .get('/users/')
      .expect(200,done);
    });
    it('responds to /users/add/', function testUserPost(done) {
        var user={'username':'uri'};
        request(server)
          .post('/users/add/')
          .send(user)
          .expect(200,done);
    });

    it('responds to /users/:name', function testUserGetByName(done) {
      request(server)
        .get('/users/uri')
        .expect(200, done);
      });

    it('responds to /users/:name', function testUserDeleteByName(done) {
      request(server)
        .delete('/users/uri')
        .expect(200, done);
      });

    it('responds to /food/',function testFoodGet(done){
      request(server)
      .get('/food/')
      .expect(200,done);
    });
    
    it('responds to /food/add/',function testFoodPost(done){
      var food={'food_name':'eggs','username':'uri','calorie':500};
      request(server)
        .post('/food/add/')
        .send(food)
        .expect(200,done);
    });
    it('responds to /food/:name', function testFoodGetByName(done) {
      request(server)
        .get('/food/uri')
        .expect(200, done);
      });

    it('responds to /food/:name', function testFoodDeleteByName(done) {
      request(server)
        .delete('/food/uri')
        .expect(200, done);
      });
  });