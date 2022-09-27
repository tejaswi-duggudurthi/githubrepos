import React, { useState } from "react"
import UserData from "./components/UserData"
const App = () => {
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = e => {
    setIsLoading(true)
    const query = e.target.value
    fetch(`https://api.github.com/users/${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setUsers(data)
      })
    fetch(`https://api.github.com/users/${query}/repos`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRepos(data)
          })
  }

  return (
    <div>
    <h1> GitHub Repo Viewer </h1><br />
    <label> Enter the username of the user </label>
      <input style={{marginLeft: 'auto',textAlign: 'center',fontSize: '25px',width: '200px'}} onChange={fetchData} label="Search User" />
<br/>
      {isLoading && <p>Loading...</p>}
      
      <UserData name={users.name} bio={users.bio} img={users.avatar_url} url={users.html_url} twitter={users.twitter_username} followers={users.followers} following={users.following}/>
      
            {repos.length > 0 && (
              <ul>
                {repos.map(repo => (
                  <div style={{display: 'flex',flexFlow: 'row',flexWrap: 'wrap',width: '900px'}}>
                    <a href={repo.html_url} style={{display: 'block',boxSizing: 'border-box',border: '1px solid gray',margin: '10px',padding: '20px',color: 'royalblue',textDecoration: 'none',fontSize: '13px',flex: '1',minWidth: '250px'}} >
                      <h5 style={{color: 'black'}}>{repo.full_name}</h5>
                      <h3>{repo.name}</h3>
                      <p style={{color: '#222'}}>{repo.description} </p>
                    </a>
                    </div>
                ))}
              </ul>
            )}
    </div>
  )
}

export default App
