import { apiCalls } from "../support/apiCalls"


describe('API tests for reqres.in', () => {

    const base_url = 'https://reqres.in/api'

    it('API GET request', () => {
        apiCalls.getRequest(`${base_url}/users/2`)
            .then(response => {
                // Assert status code and contents
                expect(response.status).to.equal(200)
                expect(response.status).to.equal(200)
                expect(response.body.data.email).to.equal('janet.weaver@reqres.in')
                expect(response.body.data.first_name).to.equal('Janet')
                expect(response.body.data.last_name).to.equal('Weaver')
            })
    })

    it('API POST request', () => {
        const req_body = {
            "name": "morpheus",
            "job": "leader"
        }
        apiCalls.postRequest(`${base_url}/users`, req_body)
            .then(response => {
                // Assert status code and contents
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(req_body['name'])
                expect(response.body.job).to.equal(req_body['job'])
            })
    })

    it('API PUT request', () => {
        const req_body = {
            "name": "morpheus",
            "job": "leader"
        }
        apiCalls.putRequest(`${base_url}/users/2`, req_body)
            .then(response => {
                // Assert status code and contents
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal(req_body['name'])
                expect(response.body.job).to.equal(req_body['job'])
                expect(response.body.updatedAt).to.not.be.undefined
            })
    })

    it('API DELETE request', () => {
        apiCalls.deleteRequest(`${base_url}/users/2`)
            .then(response => {
                expect(response.status).to.equal(204)
            })
    })
})
