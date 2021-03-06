import {
    GET_PORTFOLIOS,
    CREATE_PORTFOLIO,
    UPDATE_PORTFOLIO,
    DELETE_PORTFOLIO,
    SIGN_IN,
    SIGN_OUT,
    GET_USER,
    GET_USER_PORTFOLIOS,
    GET_PORTFOLIO,
    FORUM_CATEGORIES,
    TOPICS_BY_CATEGORY,
    CREATE_TOPIC,
    TOPIC_BY_SLUG,
    POSTS_BY_TOPIC,
    CREATE_POST,
} from './../queries/index'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useLazyQuery } from 'react-apollo'

export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS)
export const useGetPortfolio = (options) => useQuery(GET_PORTFOLIO, options)
export const useCreatePortfolio = () =>
    useMutation(CREATE_PORTFOLIO, {
        // Updating the Apollo Cache
        update(cache, { data: { createPortfolio } }) {
            // Getting already existing data from cache
            const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS })
            cache.writeQuery({
                query: GET_PORTFOLIOS,
                data: {
                    portfolios: [...portfolios, createPortfolio],
                },
            })
        },
    })

export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO)
export const useDeletePortfolio = () =>
    useMutation(DELETE_PORTFOLIO, {
        update(cache, { data: { deletePortfolio } }) {
            const { userPortfolios } = cache.readQuery({
                query: GET_USER_PORTFOLIOS,
            })
            const newPortfolios = userPortfolios.filter(
                (p) => p._id !== deletePortfolio
            )
            cache.writeQuery({
                query: GET_USER_PORTFOLIOS,
                data: { userPortfolios: newPortfolios },
            })
        },
    })

// Auth actions

export const useSignIn = () => {
    return useMutation(SIGN_IN, {
        update(cache, { data: { signIn: signedInUser } }) {
            cache.writeQuery({
                query: GET_USER,
                data: { user: signedInUser },
            })
        },
    })
}

export const useLazyGetUser = () => {
    return useLazyQuery(GET_USER)
}

export const useSignOut = () => useMutation(SIGN_OUT)
export const useGetUser = () => useQuery(GET_USER)
export const useGetUserPortfolios = () => useQuery(GET_USER_PORTFOLIOS)

// FORUM ACTIONS

export const useGetTopicBySlug = (options) => useQuery(TOPIC_BY_SLUG, options)
export const useGetForumCategories = () => useQuery(FORUM_CATEGORIES)
export const useGetTopicsByCategory = (options) =>
    useQuery(TOPICS_BY_CATEGORY, options)

export const useCreateTopic = () =>
    useMutation(CREATE_TOPIC, {
        update(cache, { data: { createTopic } }) {
            try {
                const { topicsByCategory } = cache.readQuery({
                    query: TOPICS_BY_CATEGORY,
                    variables: {
                        category: createTopic.forumCategory.slug,
                    },
                })
                cache.writeQuery({
                    query: TOPICS_BY_CATEGORY,
                    data: {
                        topicsByCategory: [...topicsByCategory, createTopic],
                    },
                    variables: {
                        category: createTopic.forumCategory.slug,
                    },
                })
            } catch (e) {}
        },
    })

export const useGetPostsByTopic = (options) => useQuery(POSTS_BY_TOPIC, options)
export const useCreatePost = () =>
    useMutation(CREATE_POST, {
        update(cache, { data: { createPost } }) {
            try {
                Object.keys(cache.data.data).forEach((key) => {
                    key.match(/^Post/) && cache.data.delete(key)
                })
            } catch (e) {}
        },
    })
