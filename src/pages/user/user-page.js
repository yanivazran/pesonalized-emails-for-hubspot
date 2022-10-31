import Head from "next/head";
import Layout from "src/common/components/layout";
import { Signup } from "../../modules/auth/components/signup";


export default function UserPage() {
    return (
			<Layout>
				<Head>
						<title>User Page</title> 
				</Head>
				<div className="container w-50 my-5 ">
					<div className="row bg-light text-dark  border border-2 shadow-lg rounded-3">
						<div className="col">
								<Signup />
						</div>
					</div>
				</div>
			</Layout>
                
    )
}