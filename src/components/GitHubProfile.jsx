import IconGitHub from "/github.svg"
import './GitHubProfile.css'

export default function GitHubProfile({username, profileLink}) {
    return (
        <div className="gh-profile">
            <a className="gh-link" href={profileLink} target="_blank">
                <img
                    src={IconGitHub}
                    className="gh-icon"
                    alt="GitHub icon"
                />
                {username}
            </a>
        </div>
    )
}