const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        author: String
        description: String
        bookId: String
        image: String
        link: String
        title String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Query {
        me: User
        books: [Book]
        book(bookId: String!): Book
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String!): Book
    }
`;

module.exports = typeDefs;