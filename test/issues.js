'use strict';

var ltx = require('ltx')

describe('Issues', function() {

    it('Shouldn\'t crash on invalid JID', function(done) {
        var Router = require('../lib/router').Router
        var router = new Router()
        var message = new ltx.Element(
            'message', { to: 'foo@localhost', from: 'foo@localhost' }
        ).c('body').t('Hello')
        router.send(message)
        done()
    })

})
