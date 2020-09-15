import {
    GET_PORTFOLIOS,
    CREATE_PORTFOLIO,
    UPDATE_PORTFOLIO,
    DELETE_PORTFOLIO,
} from './../queries/index'
import { useQuery, useMutation } from '@apollo/react-hooks'

export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS)
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
            const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS })
            const newPortfolios = portfolios.filter(
                (p) => p._id !== deletePortfolio
            )
            cache.writeQuery({
                query: GET_PORTFOLIOS,
                data: { portfolios: newPortfolios },
            })
        },
    })
