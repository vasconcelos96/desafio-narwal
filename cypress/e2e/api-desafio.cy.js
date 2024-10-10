describe('GitHub API Tests', () => {
    let owner
    const timestamp = Date.now()
    const repoName = `Desafio-Narwal-${timestamp}`
    const repoData = {
        name: repoName,
        description: 'Repositório criado via Postman',
        private: false,
    };
    const issueData = {
        title: 'Primeira Issue',
        body: 'Essa é uma issue criada via Postman',
    }

    it('Should create a new repository', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers: {
                'Authorization': `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
                'Content-Type': 'application/json',
            },
            body: repoData,
        }).then((createResponse) => {
            expect(createResponse.status).to.eq(201)
            expect(createResponse.body).to.have.property('id')
            expect(createResponse.body.name).to.eq(repoData.name)
            expect(createResponse.body.description).to.eq(repoData.description)
            expect(createResponse.body.private).to.eq(repoData.private)

            owner = createResponse.body.owner.login
        })
    })

    it('Should get the repository details', () => {        
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${repoName}`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', repoName)
            expect(response.body).to.have.property('owner')
            expect(response.body.owner.login).to.eq(owner)
        })
    })

    it('Should create a new issue in the repository', () => {
        cy.request({
            method: 'POST',
            url: `https://api.github.com/repos/${owner}/${repoName}/issues`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
                'Content-Type': 'application/json',
            },
            body: issueData, 
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body.title).to.eq(issueData.title)
            expect(response.body.body).to.eq(issueData.body)
        });
    });

    it('Should retrieve issues from the repository', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${repoName}/issues`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')            
            expect(response.body.length).to.be.greaterThan(0);
        })
    })

    it('Should delete the repository', () => {
        cy.request({
            method: 'DELETE',
            url: `https://api.github.com/repos/${owner}/${repoName}`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            expect(response.status).to.eq(204) 
        })
    })

    it('Should confirm repository deletion', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${repoName}`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
                'Content-Type': 'application/json',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})















