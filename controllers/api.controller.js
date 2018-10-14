const moment = require('moment');
const Message = require('../models/message.model');

module.exports = function(io) {

    var module = {};

    /* show API documentation */
    module.showApiDocs = function(req, res) {
        res.sendFile('index.html');
    };


    /* Get messages */
    module.getMessages = function(req, res) {

        Message.find({}, function(error, messages) {

            if (error) {

                res.status(500);
                res.send({
                    'status': 'fail',
                    'error': error
                });
                return;
            }

            let nbMessages = messages.length;
            let newMessages = [];

            for (let i = 0; i < nbMessages; i++) {

                let message = {
                    '#': i + 1,
                    'name': messages[i].name,
                    'email': messages[i].email,
                    'phone': messages[i].phone,
                    'message': messages[i].message,
                    'createdAt': moment(messages[i].createdAt).format('DD/MM/YYYY HH:mm'),
                };

                newMessages.push(message);
            }

            newMessages.sort(messagesSortCompare);

            res.status(200);
            res.send({
                status: 'success',
                length: messages.length,
                messages: newMessages
            });
            return;

        });

    };

    function messagesSortCompare(a, b) {
        if (a.createdAt < b.createdAt)
            return 1;
        if (a.createdAt > b.createdAt)
            return -1;
        return 0;
    }


    /* Save a message  */
    module.saveMessage = function(req, res) {

        let message = new Message(req.body);

        message.save()
            .then((message) => {

                res.status(200);
                res.send({
                    status: 'success'
                });

                Message.find({}, function(error, messages) {

                    let messageToSend = {
                        '#': messages.length,
                        'name': message.name,
                        'email': message.email,
                        'phone': message.phone,
                        'message': message.message,
                        'createdAt': moment(message.createdAt).format('DD/MM/YYYY HH:mm'),
                    };

                    io.emit('new-message', messageToSend);
                });

            })
            .catch(error => {

                if (error.hasOwnProperty('name') && error.name === 'ValidationError') {

                    var errors = [];

                    for (let key in error.errors)
                        errors.push({
                            [key]: error.errors[key].message
                        });

                    res.status(400);
                    res.send({
                        'status': 'fail',
                        'errors': errors
                    });
                } else {

                    res.status(500);
                    res.send(error);
                }
            });
    };


    return module;
};
