const { checkAuth } = require('../middleware/auth-middleware')

module.exports.resolverPerson = {
	Query: {
		allPeople: (_, { skip, take }, { dataSources }) =>
			dataSources.PeopleAPI.getAllPeople(take),
		person: async (_, { filter }, { dataSources }) =>
			dataSources.PeopleAPI.getPerson(filter),
	},
	Mutation: {
		createPerson: (
			_,
			{ createdPersonInput: { name, height, mass, gender, homeworld } },
			{ prisma, req }
		) => {
			try {
				checkAuth(req)

				const newPerson = prisma.person.create({
					data: { name, height, mass, gender, homeworld },
				})

				return newPerson
			} catch (error) {
				throw new Error('Person creation failed')
			}
		},
		updatePerson: (
			_,
			{ updatedPerson: { name, height, mass, gender, homeworld } },
			{ req, prisma }
		) => {
			checkAuth(req)

			const updatePerson = prisma.person.update({
				where: { name },
				data: {
					height,
					mass,
					gender,
					homeworld,
				},
			})

			return updatePerson
		},
		deletePerson: (_, { name }, { req, prisma }) => {
			checkAuth(req)

			const deletePerson = prisma.person.delete({
				where: { name },
			})

			return deletePerson
		},
	},
}
