const [names , setNames] = useState([])

useEffect(() => {
  setLoading(true)
  axios.get(currentPageUrl).then(res => {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setNames(res.data.results.map(p => p.name))
  })
}, [currentPageUrl])