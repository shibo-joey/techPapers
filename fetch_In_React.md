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
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, [setAppState]);

```
