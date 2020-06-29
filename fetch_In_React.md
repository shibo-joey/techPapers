# Ways to fetch data in react

- ## 1. Fetch in componentDidMount with default js fetch

```jsx
  fetch("API key")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.items
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }
```

- ## 2. Fetch in componentDidMount with axios

    axios.request(config)
    axios.get(url[, config])
    axios.delete(url[, config])
    axios.head(url[, config])
    axios.options(url[, config])
    axios.post(url[, data[, config]])
    axios.put(url[, data[, config]])
    axios.patch(url[, data[, config]])
```jsx
import axios from 'axios'

 componentDidMount() {
     axios.get(API + DEFAULT_QUERY)
      .then(result => this.setState({
        hits: result.data.hits
      }))
      .catch(error => this.setState({
        error
      }));
    }
```
- ## 3. Fetch in react hooks with default js fetch

```jsx
  useEffect(() => {
      setState({ });
      const apiUrl = `API KEY`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setState({ state: data });
        });
    }, [setState]);

```
- ## 4. Fetch in react hooks with axios

```jsx
useEffect(() => {
    setState({ });
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const data = repos.data;
      setState({ repos: data });
    });
  }, [setState]);
```
