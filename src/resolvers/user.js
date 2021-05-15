const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { checkAuth } = require('../middleware/auth-middleware')

module.exports.resolverUser = {
	Query: {
		me: async (_, __, { prisma, req }) => {
			const user = checkAuth(req)

			const me = await prisma.user.findMany({ where: { email: user.email } })

			return me[0]
		},
	},
	Mutation: {
		register: async (
			_,
			{ createdUser: { name, email, dateOfBirth, country, password } },
			context
		) => {
			const user = await context.prisma.user.findMany({
				where: {
					email,
				},
			})

			const userRetrieved = user[0]
			if(userRetrieved){
				return null
			}

			const encryptedPassword = await bcrypt.hash(password, 8)
			const newUser = await context.prisma.user.create({
				data: {
					name,
					email,
					dateOfBirth,
					country,
					password: encryptedPassword,
				},
			})

			const token = await sign({ email }, 'Thisismysecretkey', {
				expiresIn: '3h',
			})

			return {
				...newUser,
				token,
			}
		},
		login: async (_, { email, password }, context) => {
			const user = await context.prisma.user.findMany({
				where: {
					email,
				},
			})

			const userRetrieved = user[0]

			if(user.length === 0){
				return null
			}
			const result = await bcrypt.compare(password, userRetrieved.password)

			const token = await sign({ email }, 'Thisismysecretkey', {
				expiresIn: '3h',
			})

			console.log(userRetrieved)

			if (result) {
				return {
					...userRetrieved,
					token,
				}
			}
		},
		updateProfile: async(
			_,
			{ updatedUser: { name, email, dateOfBirth, country } },
			{ prisma, req }
		) => {
			const user = checkAuth(req)

			const usersFound = await prisma.user.findMany({
				where: {
					email : user.email
				},
			})

			const userRetrieved = usersFound[0]

			if(!name) name = userRetrieved.name
			if(!dateOfBirth) dateOfBirth = userRetrieved.dateOfBirth
			if(!country) country = userRetrieved.country
	
			const updateUser = prisma.user.update({
				where: {
					email: user.email,
				},
				data: {
					name,
					email,
					dateOfBirth,
					country,
				},
			})
			return updateUser
		},
		deleteProfile: (_, __, { prisma, req }) => {
			const user = checkAuth(req)

			const deleteUser = prisma.user.delete({
				where: { email: user.email },
			})

			return deleteUser
		},
	},
}
