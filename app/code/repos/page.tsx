import Link from "next/link";
import { resolve } from "path";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

type repoProps = {
    id: number
    name: string
    description: string
    stargazers_count: number
    forks_count: boolean
    watchers_count: number
}

async function fetchRepos() {
    const response = await fetch("https://api.github.com/users/Falasefemi2/repos");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // wait 1 seconds
    const repos = await response.json();
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {repos.map((repo: repoProps) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposPage