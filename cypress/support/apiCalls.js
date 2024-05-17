export class ApiCalls {

    getRequest(url, headers={}) {
        return cy.request({
            method: 'GET',
            url: url,
            headers: headers
        })
    }

    postRequest(url, body, headers={}) {
        return cy.request({
            method: 'POST',
            url: url,
            headers: headers,
            body: body
        })
    }

    putRequest(url, body, headers={}) {
        return cy.request({
            method: 'PUT',
            url: url,
            headers: headers,
            body: body
        })
    }

    deleteRequest(url) {
        return cy.request({
            method: 'DELETE',
            url: url
        })
    }
}

export const apiCalls = new ApiCalls();
