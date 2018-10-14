define({ "api": [
  {
    "type": "post",
    "url": "/api/messages",
    "title": "Create a message",
    "name": "Create_a_message",
    "group": "API",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "status",
            "description": "<p>'success'</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "status",
            "description": "<p>'fail'</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "errors",
            "description": "<p>The error messages</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.route.js",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "/api/messages",
    "title": "Get all messages",
    "name": "Get_all_messages",
    "group": "API",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "status",
            "description": "<p>'success'</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "length",
            "description": "<p>The messages number</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "messages",
            "description": "<p>The messages list</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "status",
            "description": "<p>'fail'</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.route.js",
    "groupTitle": "API"
  }
] });
