const { verify } = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server')

module.exports.checkAuth = (req) => {
	const authHeader = req.headers.authorization
	if (authHeader) {
		const token = authHeader.split('Bearer ')[1]
		if (token) {
			try {
				const user = verify(token, 'Thisismysecretkey')
				return user
			} catch (error) {
				throw new AuthenticationError('Invalid token')
			}
		}
		throw new Error('Authentication failed, it must be Bearer space token')
	}

	throw new Error('Authorization header must be provided')
}
