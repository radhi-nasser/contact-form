module.exports = function(io) {

    const express = require('express');
    const router = express.Router();

    const apiController = require('../controllers/api.controller')(io);

    /* show API documentation */
    router.get('/', apiController.showApiDocs);
    router.get('/docs', apiController.showApiDocs);

    /**
     * @api {get} /api/messages Get all messages
     * @apiName Get all messages
     * @apiGroup API
     * @apiSampleRequest off
     *
     * @apiSuccess status 'success'
     * @apiSuccess length The messages number
     * @apiSuccess messages The messages list
     *
     *
     * @apiError status 'fail'
     * @apiError error The error message
     */
    router.get('/messages', apiController.getMessages);


    /**
     * @api {post} /api/messages Create a message
     * @apiName Create a message
     * @apiGroup API
     * @apiSampleRequest off
     *
     * @apiSuccess status 'success'
     *
     * @apiError status 'fail'
     * @apiError errors The error messages
     */
    router.post('/messages', apiController.saveMessage);


    return router;
};
