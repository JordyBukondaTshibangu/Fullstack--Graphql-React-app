const resolvers = {
    Query : {

        allPeople : (_,{skip,take}, { dataSources }) => {
            return dataSources.PeopleAPI.getAllPeople(take);
        },

        person : async(_,{filter}, { dataSources }) => {
            return dataSources.PeopleAPI.getPerson(filter)
        }
    },
    Mutation : {

        createPerson : (_, { name ,height ,mass ,gender ,homeworld }, context) => {
            const newPerson = context.prisma.person.create({
                data : {
                    name ,height ,mass ,gender ,homeworld 
                }
            });
            return newPerson;
        },

        updatePerson : (_, { name ,height ,mass ,gender ,homeworld }, context ) => {
            const updatePerson = context.prisma.person.update({
                where : { name }, 
                data : {
                     height ,mass ,gender ,homeworld 
                }
            });

            return updatePerson;
        },

        deletePerson : (_, { name }, context) => {
            const deletePerson = context.prisma.person.delete({ 
                where : { name }
            });

            return deletePerson;
        }
    }
}

module.exports =  resolvers;