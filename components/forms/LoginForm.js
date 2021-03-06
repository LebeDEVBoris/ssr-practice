import { useForm } from 'react-hook-form'

const LoginForm = ({ onSubmit, loading }) => {
    const { handleSubmit, register } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    ref={register}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    ref={register}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                />
            </div>
            {loading && 'Singing in...'}
            {!loading && (
                <button type="submit" className="btn btn-main bg-blue py-2 ttu">
                    Submit
                </button>
            )}
        </form>
    )
}

export default LoginForm
