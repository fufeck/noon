(function(window, angular, undefined) {'use strict';

var urlBase = "http://ns502537.ip-198-100-147.net/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name noon.service
 * @module
 * @description
 *
 * The `noon.service` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("noon.service", ['ngResource']);

/**
 * @ngdoc object
 * @name noon.service.Quizz
 * @header noon.service.Quizz
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Quizz` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Quizz",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/quizzes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Quizz.questions.findById() instead.
        "prototype$__findById__questions": {
          url: urlBase + "/quizzes/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Quizz.questions.destroyById() instead.
        "prototype$__destroyById__questions": {
          url: urlBase + "/quizzes/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.questions.updateById() instead.
        "prototype$__updateById__questions": {
          url: urlBase + "/quizzes/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Quizz.tickets.findById() instead.
        "prototype$__findById__tickets": {
          url: urlBase + "/quizzes/:id/tickets/:fk",
          method: "GET"
        },

        // INTERNAL. Use Quizz.tickets.destroyById() instead.
        "prototype$__destroyById__tickets": {
          url: urlBase + "/quizzes/:id/tickets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.tickets.updateById() instead.
        "prototype$__updateById__tickets": {
          url: urlBase + "/quizzes/:id/tickets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Quizz.lottery() instead.
        "prototype$__get__lottery": {
          url: urlBase + "/quizzes/:id/lottery",
          method: "GET"
        },

        // INTERNAL. Use Quizz.questions() instead.
        "prototype$__get__questions": {
          isArray: true,
          url: urlBase + "/quizzes/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Quizz.questions.create() instead.
        "prototype$__create__questions": {
          url: urlBase + "/quizzes/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Quizz.questions.destroyAll() instead.
        "prototype$__delete__questions": {
          url: urlBase + "/quizzes/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.questions.count() instead.
        "prototype$__count__questions": {
          url: urlBase + "/quizzes/:id/questions/count",
          method: "GET"
        },

        // INTERNAL. Use Quizz.tickets() instead.
        "prototype$__get__tickets": {
          isArray: true,
          url: urlBase + "/quizzes/:id/tickets",
          method: "GET"
        },

        // INTERNAL. Use Quizz.tickets.create() instead.
        "prototype$__create__tickets": {
          url: urlBase + "/quizzes/:id/tickets",
          method: "POST"
        },

        // INTERNAL. Use Quizz.tickets.destroyAll() instead.
        "prototype$__delete__tickets": {
          url: urlBase + "/quizzes/:id/tickets",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.tickets.count() instead.
        "prototype$__count__tickets": {
          url: urlBase + "/quizzes/:id/tickets/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#create
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/quizzes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#upsert
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/quizzes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#exists
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/quizzes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#findById
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/quizzes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#find
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/quizzes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#findOne
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/quizzes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#updateAll
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/quizzes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#deleteById
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/quizzes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#count
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/quizzes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#prototype$updateAttributes
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/quizzes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#saveComplete
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "saveComplete": {
          url: urlBase + "/quizzes/complete",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#updateComplete
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "updateComplete": {
          url: urlBase + "/quizzes/complete",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#dropComplete
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `quizz` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "dropComplete": {
          url: urlBase + "/quizzes/:quizz/complete",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#deletePicture
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `quizz` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "deletePicture": {
          url: urlBase + "/quizzes/:quizz/picture",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#copyPicture
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `from` – `{string=}` - 
         *
         *  - `to` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "copyPicture": {
          url: urlBase + "/quizzes/picture/:from/:to",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#uploadPicture
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `quizz` – `{string=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "uploadPicture": {
          url: urlBase + "/quizzes/:quizz/picture",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#downloadPicture
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `quizz` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "downloadPicture": {
          url: urlBase + "/quizzes/:quizz/picture",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#listSplashScreens
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `quizz` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "listSplashScreens": {
          url: urlBase + "/quizzes/:quizz/splash-screens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#dailyStatistics
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `day` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "dailyStatistics": {
          url: urlBase + "/quizzes/daily-statistics/:day",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#weeklyStatistics
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `day` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "weeklyStatistics": {
          isArray: true,
          url: urlBase + "/quizzes/weekly-statistics/:day",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Quizz#statistics
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `quizz` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        "statistics": {
          url: urlBase + "/quizzes/:quizz/statistics",
          method: "GET"
        },

        // INTERNAL. Use Question.quizz() instead.
        "::get::Question::quizz": {
          url: urlBase + "/questions/:id/quizz",
          method: "GET"
        },

        // INTERNAL. Use Ticket.quizz() instead.
        "::get::Ticket::quizz": {
          url: urlBase + "/tickets/:id/quizz",
          method: "GET"
        },

        // INTERNAL. Use Lottery.quizzes.findById() instead.
        "::findById::Lottery::quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lottery.quizzes.destroyById() instead.
        "::destroyById::Lottery::quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.quizzes.updateById() instead.
        "::updateById::Lottery::quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lottery.quizzes() instead.
        "::get::Lottery::quizzes": {
          isArray: true,
          url: urlBase + "/lotteries/:id/quizzes",
          method: "GET"
        },

        // INTERNAL. Use Lottery.quizzes.create() instead.
        "::create::Lottery::quizzes": {
          url: urlBase + "/lotteries/:id/quizzes",
          method: "POST"
        },

        // INTERNAL. Use Lottery.quizzes.destroyAll() instead.
        "::delete::Lottery::quizzes": {
          url: urlBase + "/lotteries/:id/quizzes",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.quizzes.count() instead.
        "::count::Lottery::quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Quizz#updateOrCreate
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Quizz#update
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Quizz#destroyById
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Quizz#removeById
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.Quizz#modelName
    * @propertyOf noon.service.Quizz
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Quizz`.
    */
    R.modelName = "Quizz";

    /**
     * @ngdoc object
     * @name lbServices.Quizz.questions
     * @header lbServices.Quizz.questions
     * @object
     * @description
     *
     * The object `Quizz.questions` groups methods
     * manipulating `Question` instances related to `Quizz`.
     *
     * Call {@link lbServices.Quizz#questions Quizz.questions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Quizz#questions
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Queries questions of Quizz.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Quizz::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.questions#count
         * @methodOf noon.service.Quizz.questions
         *
         * @description
         *
         * Counts questions of Quizz.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Quizz::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.questions#create
         * @methodOf noon.service.Quizz.questions
         *
         * @description
         *
         * Creates a new instance in questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Quizz::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.questions#destroyAll
         * @methodOf noon.service.Quizz.questions
         *
         * @description
         *
         * Deletes all questions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Quizz::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.questions#destroyById
         * @methodOf noon.service.Quizz.questions
         *
         * @description
         *
         * Delete a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Quizz::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.questions#findById
         * @methodOf noon.service.Quizz.questions
         *
         * @description
         *
         * Find a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Quizz::questions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.questions#updateById
         * @methodOf noon.service.Quizz.questions
         *
         * @description
         *
         * Update a related item by id for questions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for questions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Quizz::questions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Quizz.tickets
     * @header lbServices.Quizz.tickets
     * @object
     * @description
     *
     * The object `Quizz.tickets` groups methods
     * manipulating `Ticket` instances related to `Quizz`.
     *
     * Call {@link lbServices.Quizz#tickets Quizz.tickets()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Quizz#tickets
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Queries tickets of Quizz.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::get::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.tickets#count
         * @methodOf noon.service.Quizz.tickets
         *
         * @description
         *
         * Counts tickets of Quizz.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tickets.count = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::count::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.tickets#create
         * @methodOf noon.service.Quizz.tickets
         *
         * @description
         *
         * Creates a new instance in tickets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets.create = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::create::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.tickets#destroyAll
         * @methodOf noon.service.Quizz.tickets
         *
         * @description
         *
         * Deletes all tickets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tickets.destroyAll = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::delete::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.tickets#destroyById
         * @methodOf noon.service.Quizz.tickets
         *
         * @description
         *
         * Delete a related item by id for tickets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tickets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tickets.destroyById = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::destroyById::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.tickets#findById
         * @methodOf noon.service.Quizz.tickets
         *
         * @description
         *
         * Find a related item by id for tickets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tickets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets.findById = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::findById::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz.tickets#updateById
         * @methodOf noon.service.Quizz.tickets
         *
         * @description
         *
         * Update a related item by id for tickets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tickets
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets.updateById = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::updateById::Quizz::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Quizz#lottery
         * @methodOf noon.service.Quizz
         *
         * @description
         *
         * Fetches belongsTo relation lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        R.lottery = function() {
          var TargetResource = $injector.get("Lottery");
          var action = TargetResource["::get::Quizz::lottery"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Question
 * @header noon.service.Question
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Question` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Question",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/questions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Question.quizz() instead.
        "prototype$__get__quizz": {
          url: urlBase + "/questions/:id/quizz",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.findById() instead.
        "prototype$__findById__answers": {
          url: urlBase + "/questions/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.destroyById() instead.
        "prototype$__destroyById__answers": {
          url: urlBase + "/questions/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.updateById() instead.
        "prototype$__updateById__answers": {
          url: urlBase + "/questions/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers() instead.
        "prototype$__get__answers": {
          isArray: true,
          url: urlBase + "/questions/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.create() instead.
        "prototype$__create__answers": {
          url: urlBase + "/questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.destroyAll() instead.
        "prototype$__delete__answers": {
          url: urlBase + "/questions/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.count() instead.
        "prototype$__count__answers": {
          url: urlBase + "/questions/:id/answers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#create
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/questions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#upsert
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/questions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#exists
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/questions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#findById
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/questions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#find
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/questions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#findOne
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/questions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#updateAll
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/questions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#deleteById
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/questions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#count
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/questions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#prototype$updateAttributes
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/questions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#saveComplete
         * @methodOf noon.service.Question
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "saveComplete": {
          url: urlBase + "/questions/complete",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#updateComplete
         * @methodOf noon.service.Question
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "updateComplete": {
          url: urlBase + "/questions/complete",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Question#dropComplete
         * @methodOf noon.service.Question
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `question` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "dropComplete": {
          url: urlBase + "/questions/:question/complete",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.questions.findById() instead.
        "::findById::Quizz::questions": {
          url: urlBase + "/quizzes/:id/questions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Quizz.questions.destroyById() instead.
        "::destroyById::Quizz::questions": {
          url: urlBase + "/quizzes/:id/questions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.questions.updateById() instead.
        "::updateById::Quizz::questions": {
          url: urlBase + "/quizzes/:id/questions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Quizz.questions() instead.
        "::get::Quizz::questions": {
          isArray: true,
          url: urlBase + "/quizzes/:id/questions",
          method: "GET"
        },

        // INTERNAL. Use Quizz.questions.create() instead.
        "::create::Quizz::questions": {
          url: urlBase + "/quizzes/:id/questions",
          method: "POST"
        },

        // INTERNAL. Use Quizz.questions.destroyAll() instead.
        "::delete::Quizz::questions": {
          url: urlBase + "/quizzes/:id/questions",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.questions.count() instead.
        "::count::Quizz::questions": {
          url: urlBase + "/quizzes/:id/questions/count",
          method: "GET"
        },

        // INTERNAL. Use Answer.question() instead.
        "::get::Answer::question": {
          url: urlBase + "/answers/:id/question",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Question#updateOrCreate
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Question#update
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Question#destroyById
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Question#removeById
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.Question#modelName
    * @propertyOf noon.service.Question
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Question`.
    */
    R.modelName = "Question";


        /**
         * @ngdoc method
         * @name noon.service.Question#quizz
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Fetches belongsTo relation quizz.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R.quizz = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::get::Question::quizz"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.answers
     * @header lbServices.Question.answers
     * @object
     * @description
     *
     * The object `Question.answers` groups methods
     * manipulating `Answer` instances related to `Question`.
     *
     * Call {@link lbServices.Question#answers Question.answers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Question#answers
         * @methodOf noon.service.Question
         *
         * @description
         *
         * Queries answers of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Question.answers#count
         * @methodOf noon.service.Question.answers
         *
         * @description
         *
         * Counts answers of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answers.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Question.answers#create
         * @methodOf noon.service.Question.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Question.answers#destroyAll
         * @methodOf noon.service.Question.answers
         *
         * @description
         *
         * Deletes all answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Question.answers#destroyById
         * @methodOf noon.service.Question.answers
         *
         * @description
         *
         * Delete a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Question.answers#findById
         * @methodOf noon.service.Question.answers
         *
         * @description
         *
         * Find a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Question.answers#updateById
         * @methodOf noon.service.Question.answers
         *
         * @description
         *
         * Update a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::Question::answers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Answer
 * @header noon.service.Answer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Answer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Answer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/answers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Answer.question() instead.
        "prototype$__get__question": {
          url: urlBase + "/answers/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Answer.givenAnswers.findById() instead.
        "prototype$__findById__givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Answer.givenAnswers.destroyById() instead.
        "prototype$__destroyById__givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Answer.givenAnswers.updateById() instead.
        "prototype$__updateById__givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Answer.givenAnswers() instead.
        "prototype$__get__givenAnswers": {
          isArray: true,
          url: urlBase + "/answers/:id/givenAnswers",
          method: "GET"
        },

        // INTERNAL. Use Answer.givenAnswers.create() instead.
        "prototype$__create__givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers",
          method: "POST"
        },

        // INTERNAL. Use Answer.givenAnswers.destroyAll() instead.
        "prototype$__delete__givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers",
          method: "DELETE"
        },

        // INTERNAL. Use Answer.givenAnswers.count() instead.
        "prototype$__count__givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#create
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/answers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#upsert
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/answers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#exists
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/answers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#findById
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/answers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#find
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/answers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#findOne
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/answers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#updateAll
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/answers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#deleteById
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/answers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#count
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/answers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#prototype$updateAttributes
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/answers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#saveComplete
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "saveComplete": {
          url: urlBase + "/answers/complete",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#updateComplete
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "updateComplete": {
          url: urlBase + "/answers/complete",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Answer#dropComplete
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `answer` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "dropComplete": {
          url: urlBase + "/answers/:answer/complete",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.findById() instead.
        "::findById::Question::answers": {
          url: urlBase + "/questions/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.destroyById() instead.
        "::destroyById::Question::answers": {
          url: urlBase + "/questions/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.updateById() instead.
        "::updateById::Question::answers": {
          url: urlBase + "/questions/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers() instead.
        "::get::Question::answers": {
          isArray: true,
          url: urlBase + "/questions/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.create() instead.
        "::create::Question::answers": {
          url: urlBase + "/questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.destroyAll() instead.
        "::delete::Question::answers": {
          url: urlBase + "/questions/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.count() instead.
        "::count::Question::answers": {
          url: urlBase + "/questions/:id/answers/count",
          method: "GET"
        },

        // INTERNAL. Use PlayerAnswer.answer() instead.
        "::get::PlayerAnswer::answer": {
          url: urlBase + "/player-answers/:id/answer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Answer#updateOrCreate
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Answer#update
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Answer#destroyById
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Answer#removeById
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.Answer#modelName
    * @propertyOf noon.service.Answer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Answer`.
    */
    R.modelName = "Answer";


        /**
         * @ngdoc method
         * @name noon.service.Answer#question
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Fetches belongsTo relation question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Answer::question"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Answer.givenAnswers
     * @header lbServices.Answer.givenAnswers
     * @object
     * @description
     *
     * The object `Answer.givenAnswers` groups methods
     * manipulating `PlayerAnswer` instances related to `Answer`.
     *
     * Call {@link lbServices.Answer#givenAnswers Answer.givenAnswers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Answer#givenAnswers
         * @methodOf noon.service.Answer
         *
         * @description
         *
         * Queries givenAnswers of Answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.givenAnswers = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::get::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Answer.givenAnswers#count
         * @methodOf noon.service.Answer.givenAnswers
         *
         * @description
         *
         * Counts givenAnswers of Answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.givenAnswers.count = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::count::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Answer.givenAnswers#create
         * @methodOf noon.service.Answer.givenAnswers
         *
         * @description
         *
         * Creates a new instance in givenAnswers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.givenAnswers.create = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::create::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Answer.givenAnswers#destroyAll
         * @methodOf noon.service.Answer.givenAnswers
         *
         * @description
         *
         * Deletes all givenAnswers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.givenAnswers.destroyAll = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::delete::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Answer.givenAnswers#destroyById
         * @methodOf noon.service.Answer.givenAnswers
         *
         * @description
         *
         * Delete a related item by id for givenAnswers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givenAnswers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.givenAnswers.destroyById = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::destroyById::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Answer.givenAnswers#findById
         * @methodOf noon.service.Answer.givenAnswers
         *
         * @description
         *
         * Find a related item by id for givenAnswers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givenAnswers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.givenAnswers.findById = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::findById::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Answer.givenAnswers#updateById
         * @methodOf noon.service.Answer.givenAnswers
         *
         * @description
         *
         * Update a related item by id for givenAnswers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givenAnswers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.givenAnswers.updateById = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::updateById::Answer::givenAnswers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Account
 * @header noon.service.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Account",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/accounts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__findById__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__destroyById__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__updateById__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__get__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Queries accessTokens of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/accounts/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__create__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__delete__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$__count__accessTokens
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Counts accessTokens of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#create
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/accounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#upsert
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/accounts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#exists
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/accounts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#findById
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/accounts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#find
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/accounts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#findOne
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/accounts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#updateAll
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/accounts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#deleteById
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/accounts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#count
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/accounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#prototype$updateAttributes
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/accounts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#login
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/accounts/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#logout
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/accounts/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#confirm
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/accounts/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#resetPassword
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/accounts/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#passwordReset
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Reset the password
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "passwordReset": {
          url: urlBase + "/accounts/password-reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#whoami
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Returns the current Account
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "whoami": {
          url: urlBase + "/accounts/whoami",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#fakeFacebook
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Returns the request given by fb
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "fakeFacebook": {
          url: urlBase + "/accounts/fake/facebook",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Account#getCurrent
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/accounts" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Account#updateOrCreate
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Account#update
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Account#destroyById
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Account#removeById
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Account#getCachedCurrent
         * @methodOf noon.service.Account
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link noon.service.Account#login} or
         * {@link noon.service.Account#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Account instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name noon.service.Account#isAuthenticated
         * @methodOf noon.service.Account
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name noon.service.Account#getCurrentId
         * @methodOf noon.service.Account
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name noon.service.Account#modelName
    * @propertyOf noon.service.Account
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Account`.
    */
    R.modelName = "Account";


    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.PlayerAnswer
 * @header noon.service.PlayerAnswer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PlayerAnswer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PlayerAnswer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/player-answers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PlayerAnswer.answer() instead.
        "prototype$__get__answer": {
          url: urlBase + "/player-answers/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use PlayerAnswer.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/player-answers/:id/player",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#create
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/player-answers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#upsert
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/player-answers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#exists
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/player-answers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#findById
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/player-answers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#find
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/player-answers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#findOne
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/player-answers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#updateAll
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/player-answers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#deleteById
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/player-answers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#count
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/player-answers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#prototype$updateAttributes
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/player-answers/:id",
          method: "PUT"
        },

        // INTERNAL. Use Answer.givenAnswers.findById() instead.
        "::findById::Answer::givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Answer.givenAnswers.destroyById() instead.
        "::destroyById::Answer::givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Answer.givenAnswers.updateById() instead.
        "::updateById::Answer::givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Answer.givenAnswers() instead.
        "::get::Answer::givenAnswers": {
          isArray: true,
          url: urlBase + "/answers/:id/givenAnswers",
          method: "GET"
        },

        // INTERNAL. Use Answer.givenAnswers.create() instead.
        "::create::Answer::givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers",
          method: "POST"
        },

        // INTERNAL. Use Answer.givenAnswers.destroyAll() instead.
        "::delete::Answer::givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers",
          method: "DELETE"
        },

        // INTERNAL. Use Answer.givenAnswers.count() instead.
        "::count::Answer::givenAnswers": {
          url: urlBase + "/answers/:id/givenAnswers/count",
          method: "GET"
        },

        // INTERNAL. Use Player.answers.findById() instead.
        "::findById::Player::answers": {
          url: urlBase + "/players/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.answers.destroyById() instead.
        "::destroyById::Player::answers": {
          url: urlBase + "/players/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.answers.updateById() instead.
        "::updateById::Player::answers": {
          url: urlBase + "/players/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.answers() instead.
        "::get::Player::answers": {
          isArray: true,
          url: urlBase + "/players/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Player.answers.create() instead.
        "::create::Player::answers": {
          url: urlBase + "/players/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Player.answers.destroyAll() instead.
        "::delete::Player::answers": {
          url: urlBase + "/players/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Player.answers.count() instead.
        "::count::Player::answers": {
          url: urlBase + "/players/:id/answers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#updateOrCreate
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#update
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#destroyById
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#removeById
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.PlayerAnswer#modelName
    * @propertyOf noon.service.PlayerAnswer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PlayerAnswer`.
    */
    R.modelName = "PlayerAnswer";


        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#answer
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Fetches belongsTo relation answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::PlayerAnswer::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PlayerAnswer#player
         * @methodOf noon.service.PlayerAnswer
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::PlayerAnswer::player"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Player
 * @header noon.service.Player
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Player` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Player",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/players/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__findById__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/players/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__destroyById__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/players/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__updateById__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/players/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.answers.findById() instead.
        "prototype$__findById__answers": {
          url: urlBase + "/players/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.answers.destroyById() instead.
        "prototype$__destroyById__answers": {
          url: urlBase + "/players/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.answers.updateById() instead.
        "prototype$__updateById__answers": {
          url: urlBase + "/players/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.promotionCodes.findById() instead.
        "prototype$__findById__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.promotionCodes.destroyById() instead.
        "prototype$__destroyById__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.promotionCodes.updateById() instead.
        "prototype$__updateById__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.promotionCodes.link() instead.
        "prototype$__link__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.promotionCodes.unlink() instead.
        "prototype$__unlink__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.promotionCodes.exists() instead.
        "prototype$__exists__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Player.tickets.findById() instead.
        "prototype$__findById__tickets": {
          url: urlBase + "/players/:id/tickets/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.tickets.destroyById() instead.
        "prototype$__destroyById__tickets": {
          url: urlBase + "/players/:id/tickets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.tickets.updateById() instead.
        "prototype$__updateById__tickets": {
          url: urlBase + "/players/:id/tickets/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__get__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Queries accessTokens of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/players/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__create__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/players/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__delete__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/players/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$__count__accessTokens
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Counts accessTokens of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/players/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Player.answers() instead.
        "prototype$__get__answers": {
          isArray: true,
          url: urlBase + "/players/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Player.answers.create() instead.
        "prototype$__create__answers": {
          url: urlBase + "/players/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Player.answers.destroyAll() instead.
        "prototype$__delete__answers": {
          url: urlBase + "/players/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Player.answers.count() instead.
        "prototype$__count__answers": {
          url: urlBase + "/players/:id/answers/count",
          method: "GET"
        },

        // INTERNAL. Use Player.promotionCodes() instead.
        "prototype$__get__promotionCodes": {
          isArray: true,
          url: urlBase + "/players/:id/promotionCodes",
          method: "GET"
        },

        // INTERNAL. Use Player.promotionCodes.create() instead.
        "prototype$__create__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes",
          method: "POST"
        },

        // INTERNAL. Use Player.promotionCodes.destroyAll() instead.
        "prototype$__delete__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes",
          method: "DELETE"
        },

        // INTERNAL. Use Player.promotionCodes.count() instead.
        "prototype$__count__promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/count",
          method: "GET"
        },

        // INTERNAL. Use Player.tickets() instead.
        "prototype$__get__tickets": {
          isArray: true,
          url: urlBase + "/players/:id/tickets",
          method: "GET"
        },

        // INTERNAL. Use Player.tickets.create() instead.
        "prototype$__create__tickets": {
          url: urlBase + "/players/:id/tickets",
          method: "POST"
        },

        // INTERNAL. Use Player.tickets.destroyAll() instead.
        "prototype$__delete__tickets": {
          url: urlBase + "/players/:id/tickets",
          method: "DELETE"
        },

        // INTERNAL. Use Player.tickets.count() instead.
        "prototype$__count__tickets": {
          url: urlBase + "/players/:id/tickets/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#create
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/players",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#upsert
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/players",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#exists
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/players/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#findById
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/players/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#find
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/players",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#findOne
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/players/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#updateAll
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/players/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#deleteById
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/players/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#count
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/players/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#prototype$updateAttributes
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/players/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#login
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/players/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#logout
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/players/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#confirm
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/players/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#resetPassword
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/players/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#answerQuestion
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `answer` – `{string}` - 
         *
         *  - `device` – `{string=}` - 
         *
         *  - `provider` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "answerQuestion": {
          url: urlBase + "/players/answer-question",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#statistics
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "statistics": {
          url: urlBase + "/players/statistics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#takePromotionCode
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `code` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "takePromotionCode": {
          url: urlBase + "/players/promotion-code",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#exportCSV
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "exportCSV": {
          url: urlBase + "/players/csv",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#current
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "current": {
          url: urlBase + "/players/current",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#facebook
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `code` – `{string=}` - 
         *
         *  - `clientId` – `{string=}` - 
         *
         *  - `redirectUri` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "facebook": {
          url: urlBase + "/players/facebook",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#getFacebook
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `code` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "getFacebook": {
          url: urlBase + "/players/facebook",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#google
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `code` – `{string=}` - 
         *
         *  - `clientId` – `{string=}` - 
         *
         *  - `redirectUri` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "google": {
          url: urlBase + "/players/google",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#getGoogle
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `code` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "getGoogle": {
          url: urlBase + "/players/google",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#twitter
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `oauth_token` – `{string=}` - 
         *
         *  - `oauth_verifier` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "twitter": {
          url: urlBase + "/players/twitter",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#getTwitter
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `oauth_token` – `{string=}` - 
         *
         *  - `oauth_verifier` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "getTwitter": {
          url: urlBase + "/players/twitter",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#uploadPicture
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "uploadPicture": {
          url: urlBase + "/players/picture",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#downloadPicture
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `player` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "downloadPicture": {
          url: urlBase + "/players/:player/picture",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#deletePicture
         * @methodOf noon.service.Player
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "deletePicture": {
          url: urlBase + "/players/picture",
          method: "DELETE"
        },

        // INTERNAL. Use PlayerAnswer.player() instead.
        "::get::PlayerAnswer::player": {
          url: urlBase + "/player-answers/:id/player",
          method: "GET"
        },

        // INTERNAL. Use PromotionCode.players.findById() instead.
        "::findById::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/:fk",
          method: "GET"
        },

        // INTERNAL. Use PromotionCode.players.destroyById() instead.
        "::destroyById::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PromotionCode.players.updateById() instead.
        "::updateById::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PromotionCode.players.link() instead.
        "::link::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PromotionCode.players.unlink() instead.
        "::unlink::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PromotionCode.players.exists() instead.
        "::exists::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use PromotionCode.players() instead.
        "::get::PromotionCode::players": {
          isArray: true,
          url: urlBase + "/promotion-codes/:id/players",
          method: "GET"
        },

        // INTERNAL. Use PromotionCode.players.create() instead.
        "::create::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players",
          method: "POST"
        },

        // INTERNAL. Use PromotionCode.players.destroyAll() instead.
        "::delete::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players",
          method: "DELETE"
        },

        // INTERNAL. Use PromotionCode.players.count() instead.
        "::count::PromotionCode::players": {
          url: urlBase + "/promotion-codes/:id/players/count",
          method: "GET"
        },

        // INTERNAL. Use Ticket.player() instead.
        "::get::Ticket::player": {
          url: urlBase + "/tickets/:id/player",
          method: "GET"
        },

        // INTERNAL. Use LotteryRank.player() instead.
        "::get::LotteryRank::player": {
          url: urlBase + "/lottery-ranks/:id/player",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Player#getCurrent
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/players" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Player#updateOrCreate
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Player#update
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Player#destroyById
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Player#removeById
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Player#getCachedCurrent
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link noon.service.Player#login} or
         * {@link noon.service.Player#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Player instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name noon.service.Player#isAuthenticated
         * @methodOf noon.service.Player
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name noon.service.Player#getCurrentId
         * @methodOf noon.service.Player
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name noon.service.Player#modelName
    * @propertyOf noon.service.Player
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Player`.
    */
    R.modelName = "Player";

    /**
     * @ngdoc object
     * @name lbServices.Player.answers
     * @header lbServices.Player.answers
     * @object
     * @description
     *
     * The object `Player.answers` groups methods
     * manipulating `PlayerAnswer` instances related to `Player`.
     *
     * Call {@link lbServices.Player#answers Player.answers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Player#answers
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Queries answers of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.answers = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::get::Player::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.answers#count
         * @methodOf noon.service.Player.answers
         *
         * @description
         *
         * Counts answers of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answers.count = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::count::Player::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.answers#create
         * @methodOf noon.service.Player.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.answers.create = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::create::Player::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.answers#destroyAll
         * @methodOf noon.service.Player.answers
         *
         * @description
         *
         * Deletes all answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::delete::Player::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.answers#destroyById
         * @methodOf noon.service.Player.answers
         *
         * @description
         *
         * Delete a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::destroyById::Player::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.answers#findById
         * @methodOf noon.service.Player.answers
         *
         * @description
         *
         * Find a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.answers.findById = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::findById::Player::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.answers#updateById
         * @methodOf noon.service.Player.answers
         *
         * @description
         *
         * Update a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlayerAnswer` object.)
         * </em>
         */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("PlayerAnswer");
          var action = TargetResource["::updateById::Player::answers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Player.promotionCodes
     * @header lbServices.Player.promotionCodes
     * @object
     * @description
     *
     * The object `Player.promotionCodes` groups methods
     * manipulating `PromotionCode` instances related to `Player`.
     *
     * Call {@link lbServices.Player#promotionCodes Player.promotionCodes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Player#promotionCodes
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Queries promotionCodes of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCodes = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::get::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#count
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Counts promotionCodes of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.promotionCodes.count = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::count::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#create
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Creates a new instance in promotionCodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCodes.create = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::create::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#destroyAll
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Deletes all promotionCodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.promotionCodes.destroyAll = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::delete::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#destroyById
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Delete a related item by id for promotionCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for promotionCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.promotionCodes.destroyById = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::destroyById::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#exists
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Check the existence of promotionCodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for promotionCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCodes.exists = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::exists::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#findById
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Find a related item by id for promotionCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for promotionCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCodes.findById = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::findById::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#link
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Add a related item by id for promotionCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for promotionCodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCodes.link = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::link::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#unlink
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Remove the promotionCodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for promotionCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.promotionCodes.unlink = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::unlink::Player::promotionCodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.promotionCodes#updateById
         * @methodOf noon.service.Player.promotionCodes
         *
         * @description
         *
         * Update a related item by id for promotionCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for promotionCodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCodes.updateById = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::updateById::Player::promotionCodes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Player.tickets
     * @header lbServices.Player.tickets
     * @object
     * @description
     *
     * The object `Player.tickets` groups methods
     * manipulating `Ticket` instances related to `Player`.
     *
     * Call {@link lbServices.Player#tickets Player.tickets()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Player#tickets
         * @methodOf noon.service.Player
         *
         * @description
         *
         * Queries tickets of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::get::Player::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.tickets#count
         * @methodOf noon.service.Player.tickets
         *
         * @description
         *
         * Counts tickets of Player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tickets.count = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::count::Player::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.tickets#create
         * @methodOf noon.service.Player.tickets
         *
         * @description
         *
         * Creates a new instance in tickets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets.create = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::create::Player::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.tickets#destroyAll
         * @methodOf noon.service.Player.tickets
         *
         * @description
         *
         * Deletes all tickets of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tickets.destroyAll = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::delete::Player::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.tickets#destroyById
         * @methodOf noon.service.Player.tickets
         *
         * @description
         *
         * Delete a related item by id for tickets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tickets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tickets.destroyById = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::destroyById::Player::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.tickets#findById
         * @methodOf noon.service.Player.tickets
         *
         * @description
         *
         * Find a related item by id for tickets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tickets
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets.findById = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::findById::Player::tickets"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Player.tickets#updateById
         * @methodOf noon.service.Player.tickets
         *
         * @description
         *
         * Update a related item by id for tickets.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tickets
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R.tickets.updateById = function() {
          var TargetResource = $injector.get("Ticket");
          var action = TargetResource["::updateById::Player::tickets"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.FrequentlyAskedQuestion
 * @header noon.service.FrequentlyAskedQuestion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FrequentlyAskedQuestion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FrequentlyAskedQuestion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/frequently-asked-questions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#create
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/frequently-asked-questions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#upsert
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/frequently-asked-questions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#exists
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/frequently-asked-questions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#findById
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/frequently-asked-questions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#find
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/frequently-asked-questions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#findOne
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/frequently-asked-questions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#updateAll
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/frequently-asked-questions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#deleteById
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/frequently-asked-questions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#count
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/frequently-asked-questions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#prototype$updateAttributes
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/frequently-asked-questions/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#updateOrCreate
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FrequentlyAskedQuestion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#update
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#destroyById
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.FrequentlyAskedQuestion#removeById
         * @methodOf noon.service.FrequentlyAskedQuestion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.FrequentlyAskedQuestion#modelName
    * @propertyOf noon.service.FrequentlyAskedQuestion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `FrequentlyAskedQuestion`.
    */
    R.modelName = "FrequentlyAskedQuestion";


    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.PromotionCode
 * @header noon.service.PromotionCode
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PromotionCode` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PromotionCode",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/promotion-codes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PromotionCode.players.findById() instead.
        "prototype$__findById__players": {
          url: urlBase + "/promotion-codes/:id/players/:fk",
          method: "GET"
        },

        // INTERNAL. Use PromotionCode.players.destroyById() instead.
        "prototype$__destroyById__players": {
          url: urlBase + "/promotion-codes/:id/players/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PromotionCode.players.updateById() instead.
        "prototype$__updateById__players": {
          url: urlBase + "/promotion-codes/:id/players/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PromotionCode.players.link() instead.
        "prototype$__link__players": {
          url: urlBase + "/promotion-codes/:id/players/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PromotionCode.players.unlink() instead.
        "prototype$__unlink__players": {
          url: urlBase + "/promotion-codes/:id/players/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PromotionCode.players.exists() instead.
        "prototype$__exists__players": {
          url: urlBase + "/promotion-codes/:id/players/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use PromotionCode.players() instead.
        "prototype$__get__players": {
          isArray: true,
          url: urlBase + "/promotion-codes/:id/players",
          method: "GET"
        },

        // INTERNAL. Use PromotionCode.players.create() instead.
        "prototype$__create__players": {
          url: urlBase + "/promotion-codes/:id/players",
          method: "POST"
        },

        // INTERNAL. Use PromotionCode.players.destroyAll() instead.
        "prototype$__delete__players": {
          url: urlBase + "/promotion-codes/:id/players",
          method: "DELETE"
        },

        // INTERNAL. Use PromotionCode.players.count() instead.
        "prototype$__count__players": {
          url: urlBase + "/promotion-codes/:id/players/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#create
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/promotion-codes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#upsert
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/promotion-codes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#exists
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/promotion-codes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#findById
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/promotion-codes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#find
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/promotion-codes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#findOne
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/promotion-codes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#updateAll
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/promotion-codes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#deleteById
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/promotion-codes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#count
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/promotion-codes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#prototype$updateAttributes
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/promotion-codes/:id",
          method: "PUT"
        },

        // INTERNAL. Use Player.promotionCodes.findById() instead.
        "::findById::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.promotionCodes.destroyById() instead.
        "::destroyById::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.promotionCodes.updateById() instead.
        "::updateById::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.promotionCodes.link() instead.
        "::link::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.promotionCodes.unlink() instead.
        "::unlink::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.promotionCodes.exists() instead.
        "::exists::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Player.promotionCodes() instead.
        "::get::Player::promotionCodes": {
          isArray: true,
          url: urlBase + "/players/:id/promotionCodes",
          method: "GET"
        },

        // INTERNAL. Use Player.promotionCodes.create() instead.
        "::create::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes",
          method: "POST"
        },

        // INTERNAL. Use Player.promotionCodes.destroyAll() instead.
        "::delete::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes",
          method: "DELETE"
        },

        // INTERNAL. Use Player.promotionCodes.count() instead.
        "::count::Player::promotionCodes": {
          url: urlBase + "/players/:id/promotionCodes/count",
          method: "GET"
        },

        // INTERNAL. Use Ticket.promotionCode() instead.
        "::get::Ticket::promotionCode": {
          url: urlBase + "/tickets/:id/promotionCode",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#updateOrCreate
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#update
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#destroyById
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#removeById
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.PromotionCode#modelName
    * @propertyOf noon.service.PromotionCode
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PromotionCode`.
    */
    R.modelName = "PromotionCode";

    /**
     * @ngdoc object
     * @name lbServices.PromotionCode.players
     * @header lbServices.PromotionCode.players
     * @object
     * @description
     *
     * The object `PromotionCode.players` groups methods
     * manipulating `Player` instances related to `PromotionCode`.
     *
     * Call {@link lbServices.PromotionCode#players PromotionCode.players()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.PromotionCode#players
         * @methodOf noon.service.PromotionCode
         *
         * @description
         *
         * Queries players of PromotionCode.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#count
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Counts players of PromotionCode.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.players.count = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::count::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#create
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Creates a new instance in players of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.create = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::create::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#destroyAll
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Deletes all players of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.players.destroyAll = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::delete::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#destroyById
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Delete a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.players.destroyById = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::destroyById::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#exists
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Check the existence of players relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.exists = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::exists::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#findById
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Find a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.findById = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::findById::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#link
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Add a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.link = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::link::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#unlink
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Remove the players relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.players.unlink = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::unlink::PromotionCode::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.PromotionCode.players#updateById
         * @methodOf noon.service.PromotionCode.players
         *
         * @description
         *
         * Update a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.updateById = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::updateById::PromotionCode::players"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.EndUserLicenseAgreement
 * @header noon.service.EndUserLicenseAgreement
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EndUserLicenseAgreement` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "EndUserLicenseAgreement",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/end-user-license-agreements/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#create
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/end-user-license-agreements",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#upsert
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/end-user-license-agreements",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#exists
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/end-user-license-agreements/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#findById
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/end-user-license-agreements/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#find
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/end-user-license-agreements",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#findOne
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/end-user-license-agreements/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#updateAll
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/end-user-license-agreements/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#deleteById
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/end-user-license-agreements/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#count
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/end-user-license-agreements/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#prototype$updateAttributes
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/end-user-license-agreements/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#updateOrCreate
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EndUserLicenseAgreement` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#update
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#destroyById
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.EndUserLicenseAgreement#removeById
         * @methodOf noon.service.EndUserLicenseAgreement
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.EndUserLicenseAgreement#modelName
    * @propertyOf noon.service.EndUserLicenseAgreement
    * @description
    * The name of the model represented by this $resource,
    * i.e. `EndUserLicenseAgreement`.
    */
    R.modelName = "EndUserLicenseAgreement";


    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.SliderPicture
 * @header noon.service.SliderPicture
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SliderPicture` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SliderPicture",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/slider-pictures/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name noon.service.SliderPicture#getFiles
         * @methodOf noon.service.SliderPicture
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SliderPicture` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/slider-pictures/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.SliderPicture#download
         * @methodOf noon.service.SliderPicture
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filename` – `{string}` - 
         *
         *  - `res` – `{object}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "download": {
          url: urlBase + "/slider-pictures/download/:filename",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.SliderPicture#upload
         * @methodOf noon.service.SliderPicture
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object}` - 
         *
         *  - `res` – `{object}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/slider-pictures",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.SliderPicture#delete
         * @methodOf noon.service.SliderPicture
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filename` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "delete": {
          url: urlBase + "/slider-pictures/:filename",
          method: "DELETE"
        },
      }
    );




    /**
    * @ngdoc property
    * @name noon.service.SliderPicture#modelName
    * @propertyOf noon.service.SliderPicture
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SliderPicture`.
    */
    R.modelName = "SliderPicture";


    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Ticket
 * @header noon.service.Ticket
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ticket` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ticket",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tickets/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Ticket.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/tickets/:id/player",
          method: "GET"
        },

        // INTERNAL. Use Ticket.quizz() instead.
        "prototype$__get__quizz": {
          url: urlBase + "/tickets/:id/quizz",
          method: "GET"
        },

        // INTERNAL. Use Ticket.promotionCode() instead.
        "prototype$__get__promotionCode": {
          url: urlBase + "/tickets/:id/promotionCode",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#create
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tickets",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#upsert
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tickets",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#exists
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tickets/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#findById
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tickets/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#find
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tickets",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#findOne
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tickets/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#updateAll
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/tickets/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#deleteById
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/tickets/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#count
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tickets/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Ticket#prototype$updateAttributes
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tickets/:id",
          method: "PUT"
        },

        // INTERNAL. Use Quizz.tickets.findById() instead.
        "::findById::Quizz::tickets": {
          url: urlBase + "/quizzes/:id/tickets/:fk",
          method: "GET"
        },

        // INTERNAL. Use Quizz.tickets.destroyById() instead.
        "::destroyById::Quizz::tickets": {
          url: urlBase + "/quizzes/:id/tickets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.tickets.updateById() instead.
        "::updateById::Quizz::tickets": {
          url: urlBase + "/quizzes/:id/tickets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Quizz.tickets() instead.
        "::get::Quizz::tickets": {
          isArray: true,
          url: urlBase + "/quizzes/:id/tickets",
          method: "GET"
        },

        // INTERNAL. Use Quizz.tickets.create() instead.
        "::create::Quizz::tickets": {
          url: urlBase + "/quizzes/:id/tickets",
          method: "POST"
        },

        // INTERNAL. Use Quizz.tickets.destroyAll() instead.
        "::delete::Quizz::tickets": {
          url: urlBase + "/quizzes/:id/tickets",
          method: "DELETE"
        },

        // INTERNAL. Use Quizz.tickets.count() instead.
        "::count::Quizz::tickets": {
          url: urlBase + "/quizzes/:id/tickets/count",
          method: "GET"
        },

        // INTERNAL. Use Player.tickets.findById() instead.
        "::findById::Player::tickets": {
          url: urlBase + "/players/:id/tickets/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.tickets.destroyById() instead.
        "::destroyById::Player::tickets": {
          url: urlBase + "/players/:id/tickets/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.tickets.updateById() instead.
        "::updateById::Player::tickets": {
          url: urlBase + "/players/:id/tickets/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.tickets() instead.
        "::get::Player::tickets": {
          isArray: true,
          url: urlBase + "/players/:id/tickets",
          method: "GET"
        },

        // INTERNAL. Use Player.tickets.create() instead.
        "::create::Player::tickets": {
          url: urlBase + "/players/:id/tickets",
          method: "POST"
        },

        // INTERNAL. Use Player.tickets.destroyAll() instead.
        "::delete::Player::tickets": {
          url: urlBase + "/players/:id/tickets",
          method: "DELETE"
        },

        // INTERNAL. Use Player.tickets.count() instead.
        "::count::Player::tickets": {
          url: urlBase + "/players/:id/tickets/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Ticket#updateOrCreate
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Ticket#update
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Ticket#destroyById
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Ticket#removeById
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.Ticket#modelName
    * @propertyOf noon.service.Ticket
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ticket`.
    */
    R.modelName = "Ticket";


        /**
         * @ngdoc method
         * @name noon.service.Ticket#player
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::Ticket::player"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Ticket#quizz
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Fetches belongsTo relation quizz.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R.quizz = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::get::Ticket::quizz"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Ticket#promotionCode
         * @methodOf noon.service.Ticket
         *
         * @description
         *
         * Fetches belongsTo relation promotionCode.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PromotionCode` object.)
         * </em>
         */
        R.promotionCode = function() {
          var TargetResource = $injector.get("PromotionCode");
          var action = TargetResource["::get::Ticket::promotionCode"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Lottery
 * @header noon.service.Lottery
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Lottery` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Lottery",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/lotteries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Lottery.quizzes.findById() instead.
        "prototype$__findById__quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lottery.quizzes.destroyById() instead.
        "prototype$__destroyById__quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.quizzes.updateById() instead.
        "prototype$__updateById__quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lottery.ranks.findById() instead.
        "prototype$__findById__ranks": {
          url: urlBase + "/lotteries/:id/ranks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lottery.ranks.destroyById() instead.
        "prototype$__destroyById__ranks": {
          url: urlBase + "/lotteries/:id/ranks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.ranks.updateById() instead.
        "prototype$__updateById__ranks": {
          url: urlBase + "/lotteries/:id/ranks/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__findById__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Find a related item by id for repartitions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for repartitions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "prototype$__findById__repartitions": {
          url: urlBase + "/lotteries/:id/repartitions/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__destroyById__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Delete a related item by id for repartitions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for repartitions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__repartitions": {
          url: urlBase + "/lotteries/:id/repartitions/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__updateById__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Update a related item by id for repartitions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for repartitions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "prototype$__updateById__repartitions": {
          url: urlBase + "/lotteries/:id/repartitions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lottery.quizzes() instead.
        "prototype$__get__quizzes": {
          isArray: true,
          url: urlBase + "/lotteries/:id/quizzes",
          method: "GET"
        },

        // INTERNAL. Use Lottery.quizzes.create() instead.
        "prototype$__create__quizzes": {
          url: urlBase + "/lotteries/:id/quizzes",
          method: "POST"
        },

        // INTERNAL. Use Lottery.quizzes.destroyAll() instead.
        "prototype$__delete__quizzes": {
          url: urlBase + "/lotteries/:id/quizzes",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.quizzes.count() instead.
        "prototype$__count__quizzes": {
          url: urlBase + "/lotteries/:id/quizzes/count",
          method: "GET"
        },

        // INTERNAL. Use Lottery.ranks() instead.
        "prototype$__get__ranks": {
          isArray: true,
          url: urlBase + "/lotteries/:id/ranks",
          method: "GET"
        },

        // INTERNAL. Use Lottery.ranks.create() instead.
        "prototype$__create__ranks": {
          url: urlBase + "/lotteries/:id/ranks",
          method: "POST"
        },

        // INTERNAL. Use Lottery.ranks.destroyAll() instead.
        "prototype$__delete__ranks": {
          url: urlBase + "/lotteries/:id/ranks",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.ranks.count() instead.
        "prototype$__count__ranks": {
          url: urlBase + "/lotteries/:id/ranks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__get__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Queries repartitions of Lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "prototype$__get__repartitions": {
          isArray: true,
          url: urlBase + "/lotteries/:id/repartitions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__create__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Creates a new instance in repartitions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "prototype$__create__repartitions": {
          url: urlBase + "/lotteries/:id/repartitions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__delete__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Deletes all repartitions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__repartitions": {
          url: urlBase + "/lotteries/:id/repartitions",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$__count__repartitions
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Counts repartitions of Lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__repartitions": {
          url: urlBase + "/lotteries/:id/repartitions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#create
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/lotteries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#upsert
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/lotteries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#exists
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/lotteries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#findById
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/lotteries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#find
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/lotteries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#findOne
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/lotteries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#updateAll
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/lotteries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#deleteById
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/lotteries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#count
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/lotteries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#prototype$updateAttributes
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/lotteries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#saveComplete
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "saveComplete": {
          url: urlBase + "/lotteries/complete",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#updateComplete
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "updateComplete": {
          url: urlBase + "/lotteries/complete",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#exportCSV
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `lottery` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "exportCSV": {
          url: urlBase + "/lotteries/:lottery/csv",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#info
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "info": {
          url: urlBase + "/lotteries/info",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.Lottery#statistics
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `lottery` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        "statistics": {
          url: urlBase + "/lotteries/:lottery/statistics",
          method: "GET"
        },

        // INTERNAL. Use Quizz.lottery() instead.
        "::get::Quizz::lottery": {
          url: urlBase + "/quizzes/:id/lottery",
          method: "GET"
        },

        // INTERNAL. Use LotteryRank.lottery() instead.
        "::get::LotteryRank::lottery": {
          url: urlBase + "/lottery-ranks/:id/lottery",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.Lottery#updateOrCreate
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.Lottery#update
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.Lottery#destroyById
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.Lottery#removeById
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.Lottery#modelName
    * @propertyOf noon.service.Lottery
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Lottery`.
    */
    R.modelName = "Lottery";

    /**
     * @ngdoc object
     * @name lbServices.Lottery.quizzes
     * @header lbServices.Lottery.quizzes
     * @object
     * @description
     *
     * The object `Lottery.quizzes` groups methods
     * manipulating `Quizz` instances related to `Lottery`.
     *
     * Call {@link lbServices.Lottery#quizzes Lottery.quizzes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Lottery#quizzes
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Queries quizzes of Lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R.quizzes = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::get::Lottery::quizzes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.quizzes#count
         * @methodOf noon.service.Lottery.quizzes
         *
         * @description
         *
         * Counts quizzes of Lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.quizzes.count = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::count::Lottery::quizzes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.quizzes#create
         * @methodOf noon.service.Lottery.quizzes
         *
         * @description
         *
         * Creates a new instance in quizzes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R.quizzes.create = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::create::Lottery::quizzes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.quizzes#destroyAll
         * @methodOf noon.service.Lottery.quizzes
         *
         * @description
         *
         * Deletes all quizzes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.quizzes.destroyAll = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::delete::Lottery::quizzes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.quizzes#destroyById
         * @methodOf noon.service.Lottery.quizzes
         *
         * @description
         *
         * Delete a related item by id for quizzes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for quizzes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.quizzes.destroyById = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::destroyById::Lottery::quizzes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.quizzes#findById
         * @methodOf noon.service.Lottery.quizzes
         *
         * @description
         *
         * Find a related item by id for quizzes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for quizzes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R.quizzes.findById = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::findById::Lottery::quizzes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.quizzes#updateById
         * @methodOf noon.service.Lottery.quizzes
         *
         * @description
         *
         * Update a related item by id for quizzes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for quizzes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Quizz` object.)
         * </em>
         */
        R.quizzes.updateById = function() {
          var TargetResource = $injector.get("Quizz");
          var action = TargetResource["::updateById::Lottery::quizzes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Lottery.ranks
     * @header lbServices.Lottery.ranks
     * @object
     * @description
     *
     * The object `Lottery.ranks` groups methods
     * manipulating `LotteryRank` instances related to `Lottery`.
     *
     * Call {@link lbServices.Lottery#ranks Lottery.ranks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name noon.service.Lottery#ranks
         * @methodOf noon.service.Lottery
         *
         * @description
         *
         * Queries ranks of Lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        R.ranks = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::get::Lottery::ranks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.ranks#count
         * @methodOf noon.service.Lottery.ranks
         *
         * @description
         *
         * Counts ranks of Lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.ranks.count = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::count::Lottery::ranks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.ranks#create
         * @methodOf noon.service.Lottery.ranks
         *
         * @description
         *
         * Creates a new instance in ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        R.ranks.create = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::create::Lottery::ranks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.ranks#destroyAll
         * @methodOf noon.service.Lottery.ranks
         *
         * @description
         *
         * Deletes all ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ranks.destroyAll = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::delete::Lottery::ranks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.ranks#destroyById
         * @methodOf noon.service.Lottery.ranks
         *
         * @description
         *
         * Delete a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ranks.destroyById = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::destroyById::Lottery::ranks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.ranks#findById
         * @methodOf noon.service.Lottery.ranks
         *
         * @description
         *
         * Find a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        R.ranks.findById = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::findById::Lottery::ranks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.Lottery.ranks#updateById
         * @methodOf noon.service.Lottery.ranks
         *
         * @description
         *
         * Update a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        R.ranks.updateById = function() {
          var TargetResource = $injector.get("LotteryRank");
          var action = TargetResource["::updateById::Lottery::ranks"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.LotteryRank
 * @header noon.service.LotteryRank
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `LotteryRank` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "LotteryRank",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/lottery-ranks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use LotteryRank.lottery() instead.
        "prototype$__get__lottery": {
          url: urlBase + "/lottery-ranks/:id/lottery",
          method: "GET"
        },

        // INTERNAL. Use LotteryRank.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/lottery-ranks/:id/player",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#create
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/lottery-ranks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#upsert
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/lottery-ranks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#exists
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/lottery-ranks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#findById
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/lottery-ranks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#find
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/lottery-ranks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#findOne
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/lottery-ranks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#updateAll
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/lottery-ranks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#deleteById
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/lottery-ranks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#count
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/lottery-ranks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#prototype$updateAttributes
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/lottery-ranks/:id",
          method: "PUT"
        },

        // INTERNAL. Use Lottery.ranks.findById() instead.
        "::findById::Lottery::ranks": {
          url: urlBase + "/lotteries/:id/ranks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Lottery.ranks.destroyById() instead.
        "::destroyById::Lottery::ranks": {
          url: urlBase + "/lotteries/:id/ranks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.ranks.updateById() instead.
        "::updateById::Lottery::ranks": {
          url: urlBase + "/lotteries/:id/ranks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Lottery.ranks() instead.
        "::get::Lottery::ranks": {
          isArray: true,
          url: urlBase + "/lotteries/:id/ranks",
          method: "GET"
        },

        // INTERNAL. Use Lottery.ranks.create() instead.
        "::create::Lottery::ranks": {
          url: urlBase + "/lotteries/:id/ranks",
          method: "POST"
        },

        // INTERNAL. Use Lottery.ranks.destroyAll() instead.
        "::delete::Lottery::ranks": {
          url: urlBase + "/lotteries/:id/ranks",
          method: "DELETE"
        },

        // INTERNAL. Use Lottery.ranks.count() instead.
        "::count::Lottery::ranks": {
          url: urlBase + "/lotteries/:id/ranks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#updateOrCreate
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LotteryRank` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#update
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#destroyById
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#removeById
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name noon.service.LotteryRank#modelName
    * @propertyOf noon.service.LotteryRank
    * @description
    * The name of the model represented by this $resource,
    * i.e. `LotteryRank`.
    */
    R.modelName = "LotteryRank";


        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#lottery
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Fetches belongsTo relation lottery.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lottery` object.)
         * </em>
         */
        R.lottery = function() {
          var TargetResource = $injector.get("Lottery");
          var action = TargetResource["::get::LotteryRank::lottery"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name noon.service.LotteryRank#player
         * @methodOf noon.service.LotteryRank
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::LotteryRank::player"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name noon.service.Email
 * @header noon.service.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name noon.service.Email#modelName
    * @propertyOf noon.service.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name noon.service.LoopBackResourceProvider
   * @header noon.service.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name noon.service.LoopBackResourceProvider#setAuthHeader
     * @methodOf noon.service.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name noon.service.LoopBackResourceProvider#setUrlBase
     * @methodOf noon.service.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
