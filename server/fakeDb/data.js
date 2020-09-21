const mongoose = require('mongoose')

const user1Id = mongoose.Types.ObjectId()
const user2Id = mongoose.Types.ObjectId()

const forum1Id = mongoose.Types.ObjectId()
const forum2Id = mongoose.Types.ObjectId()
const forum3Id = mongoose.Types.ObjectId()

const topic1Id = mongoose.Types.ObjectId()

const data = {
    users: [
        {
            _id: user1Id,
            avatar:
                'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
            email: 'user1test@gmail.com',
            name: 'User1 Name Test',
            username: 'user1test',
            info: "Hello I'm testing version of User1",
            password: 'user1test',
            role: 'admin',
        },
        {
            _id: user2Id,
            avatar:
                'https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg',
            email: 'user2test@gmail.com',
            name: 'User2 Name Test',
            username: 'user2test',
            info: "Hello I'm testing version of User2",
            password: 'user2test',
            role: 'admin',
        },
    ],
    portfolios: [
        {
            title: 'Job in Netcentric',
            company: 'Netcentric',
            companyWebsite: 'www.google.com',
            location: 'Spain, Barcelona',
            jobTitle: 'Engineer',
            description: 'Doing something, programing....',
            startDate: '01/01/2014',
            endDate: '01/01/2016',
            user: user1Id,
        },
        {
            title: 'Job in Siemens',
            company: 'Siemens',
            companyWebsite: 'www.google.com',
            location: 'Slovakia, Kosice',
            jobTitle: 'Software Engineer',
            description:
                'Responsoble for parsing framework for JSON medical data.',
            startDate: '01/01/2011',
            endDate: '01/01/2013',
            user: user1Id,
        },
        {
            title: 'Work in USA',
            company: 'WhoKnows',
            companyWebsite: 'www.google.com',
            location: 'USA, Montana',
            jobTitle: 'Housekeeping',
            description: 'So much responsibility....Overloaaaaaad',
            startDate: '01/01/2010',
            endDate: '01/01/2011',
            user: user1Id,
        },
    ],
    forumCategories: [
        {
            _id: forum1Id,
            title: 'General Discussion',
            subTitle: 'Open any topic you want',
            slug: 'general-discussion',
        },
        {
            _id: forum2Id,
            title: 'Job Requests',
            subTitle: 'Post here job opportunities',
            slug: 'job-requests',
        },
        {
            _id: forum3Id,
            title: 'Developer Jokes',
            subTitle: 'Just funny developing stuff',
            slug: 'developer-jokes',
        },
    ],
    topics: [
        {
            _id: topic1Id,
            title: 'How to learn JS',
            slug: 'how-to-learn-js',
            content:
                "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            forumCategory: forum1Id,
            user: user1Id,
        },
        {
            title: 'How to learn JAVA',
            slug: 'how-to-learn-java',
            content:
                "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            forumCategory: forum1Id,
            user: user1Id,
        },
        {
            title: 'How to learn C++',
            slug: 'how-to-learn-c++',
            content:
                "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            forumCategory: forum1Id,
            user: user1Id,
        },
    ],
}

module.exports = data
