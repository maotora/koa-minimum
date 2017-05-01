import request from 'supertest'
import app from '../build/app'

const inst = app.listen()

describe('Main App', () => {
    
    it('Has Roots', async() => {
        
        await request(inst)
            .get('/')
            .expect(/Hello World!/)
    })
})
