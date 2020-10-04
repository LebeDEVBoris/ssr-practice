exports.portfolioTypes = `
type Portfolio {
    _id: ID!,
    title: String,
    company: String,
    companyWebsite: String,
    location: String,
    jobTitle: String,
    description: String,
    startDate: String,
    endDate: String
}

input PortfolioInput {
    title: String,
    company: String,
    companyWebsite: String,
    location: String,
    jobTitle: String,
    description: String,
    startDate: String,
    endDate: String
}
`

exports.userTypes = `
    
    type User {
        _id: ID,
        avatar: String,
        username: String,
        name: String,
        email: String,
        role: String
    }
    
    input SignUpInput {
        avatar: String,
        username: String!,
        name: String,
        email: String!,
        password: String!,
        passwordConfirmation: String!
    }

    input SignInInput {
        email: String!,
        password: String!
    }
`

exports.forumTypes = `
    type ForumCategory {
        _id: ID
        title: String
        subTitle: String
        slug: String
        createdAt: String
    }

    type Author {
        avatar: String
        username: String
    }

    type Topic {
        _id: ID
        slug: String
        title: String
        content: String
        forumCategory: ForumCategory
        user: Author
        createdAt: String
    }

    input TopicInput {
        title: String
        content: String
        forumCategory: String
    }

    type Post {
        _id: ID,
        content: String,
        slug: String,
        fullSlug: String,
        topic: Topic,
        user: User,
        parent: Post,
        createdAt: String
    }

    input PostInput {
        content: String
        parent: String
        topic: String
    }

    type PagPosts {
        posts: [Post]
        count: Int
    }
`
