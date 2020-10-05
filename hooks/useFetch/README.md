useFetch Hook

Example:
```
    const url = 'http://myApiwebsite.com/endpoint'
    const data = useFetch(url)
```

```
    const url = 'http://anotherApiwebsite.com/endpoint'
    const { data: null, loading: true, error:null} = useFetch(url)
```