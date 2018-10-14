const request = require('supertest');
const mongoose = require('mongoose');
const expect = require('expect');

const app = require('../app');
const Message = require('../models/message.model');


require('dotenv').config();


// connect to mongodb
before((done) => {

    mongoose.connect('mongodb://' + process.env.DATABASE_USERNAME + ':' + process.env.DATABASE_PASSWORD + '@' + process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT + '/' + process.env.DATABASE_NAME, {
        useNewUrlParser: true,
        useCreateIndex: true
    }, done);
});


// clear data and create new one
before((done) => {

    let quotas = {};
    quotas[new Date().toJSON().slice(0, 10)] = 79999;

    let message = new Message();
    message.name = 'Radhi Nasser';
    message.phone = '0021627836049';
    message.email = 'radhinasser@gmail.com';
    message.message = 'My name is Radhi Nasser';

    Message.deleteMany({}).then(() => {
        return message.save();
    }).then(() => done());
});


// execute tests for: POST /api/token
describe('GET /api/message', () => {

    // test 1
    it('should get all messages (only 1 message)', (done) => {

        request(app)
            .get('/api/messages')
            .expect(200)
            .expect((res) => {
                expect(res.body).toHaveProperty('status', 'success');
                expect(res.body).toHaveProperty('length', 1);
                expect(res.body).toHaveProperty('messages');
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

});


// execute tests for: POST /api/messages
describe('POST /api/messages', () => {

    // test 1
    it('should create a new message', (done) => {

        let message = new Message();
        message.name = 'Joh Doe';
        message.phone = '123456789';
        message.email = 'john.doe@gmail.com';
        message.message = 'My name is Joh Doe';

        request(app)
            .post('/api/messages')
            .send(message)
            .expect(200)
            .expect((res) => {
                expect(res.body).toHaveProperty('status', 'success');
            })
            .end((err, res) => {

                if (err) {
                    return done(err);
                }

                Message.find({
                    name: message.name,
                    phone: message.phone,
                    email: message.email,
                    message: message.message
                }).then((users) => {
                    expect(users.length).toBe(1);
                    done();
                }).catch((e) => done(e));
            });
    });

    // test 2
    it('it should not create a new message', (done) => {

        let message = new Message();
        message.name = 'Joh Doe';
        message.phone = '123456789';
        message.email = 'john.doe@gmail.com';

        request(app)
            .post('/api/messages')
            .send(message)
            .expect(400)
            .expect((res) => {
                expect(res.body).toHaveProperty('status', 'fail');
                expect(res.body).toHaveProperty('errors');
            })
            .end((err, res) => {

                if (err) {
                    return done(err);
                }

                done();
            });
    });

});

after(function(done) {

    done();
    process.exit(0);
});
