import request from 'supertest'
import app from '../build/app'

const inst = app.listen()

describe('Main App', () => {
    
    it('Gets Root', async() => {
        
        await request(inst)
            .get('/')
            .expect(/Hello World!/)
    })

    it('Gives 404', async() => {
        await request(inst)
            .get('/blah')
            .expect(404)
    })
})
