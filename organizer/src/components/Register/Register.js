import "./Register.css";

export const Register = () => {
    return (
        <>
        <div class="register">
	        <h1>Register</h1>
            <form method="post">
    	        <input type="text" name="username" placeholder="Username" required="required" />
                <input type="password" name="password" placeholder="Password" required="required" />
                <input type="password" name="confirm-password" placeholder="Confirm Password" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large">Register</button>
            </form>
        </div>
        </>
    )
}