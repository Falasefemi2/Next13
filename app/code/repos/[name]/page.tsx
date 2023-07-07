import { Suspense } from "react"
import Link from "next/link"
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"

const RepoPage = ({ params: { name } }) => {
    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">
                Back to Repos
            </Link>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading dirs...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage