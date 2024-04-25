// Imports (composants, données, css, hooks et autres )
import { useEffect, useState } from "react"
import { ColorRing } from 'react-loader-spinner'
import './Museum.css'


// Fonction de composant
function Museum() {
    // 1) Données : state, effect, variables
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')
    const [ids, setIds] = useState([])
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    let searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${search}`
    // let detailUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`

    // On vient lister les IDs 
    useEffect(() => { 
        if (search) {
            fetchData()
        }  
    }, [search])

    useEffect(() => {
        if (ids) {
            fetchArtworks()
        }
        
    }, [ids])

    // 2) Comportements : fonctions qui seront utilisée dans le JSX
    function handleSearch() {
        setResults([])
        setLoading(true)

        let cleanValue = value.toLowerCase().trim().replace(/(<([^>]+)>)/gi, "").replaceAll(/\s/g,'')
        setSearch(cleanValue)
    }

    function fetchData() {
        fetch(searchUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setIds(data.objectIDs.slice(0, 100))
        })
        .catch(err => console.log(err))
    }

    function fetchArtworks() {
        ids.map((id) => (
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.primaryImageSmall.length > 0) {
                    let art = {
                        name: data.artistDisplayName,
                        image : data.primaryImageSmall,
                        year : data.objectDate,
                        title: data.title,
                        collection : data.creditLine
                    } 
                    setResults(results => [...results, art])
                }  
            })
            .catch(err => console.log(err))
        ))

        setLoading(false)
    }

    console.log(search.length > 0)

    // 3) Afficher la vue du composant avec JSX
    return ( 
        <>
            <h1>Mon app de musée</h1>
            <input 
                type="text" 
                placeholder="Rechercher une oeuvre ..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => handleSearch()}>Rechercher</button>

                <ul className="card">
                    {(results.length > 0) && results.slice(0, 20).map((result, index) => (
                        <li key={index}>
                            <h3>{result.title}</h3>
                            <img src={result.image} alt={result.title} />
                            <p>{result.name} - {result.year}</p>
                            <p>{result.collection}</p>
                        </li>
                    ))} 
                </ul>

                {loading && <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#ced7f0', '#1e2357', '#d95763', '#8496b1', '#84cab1']}
                />}
        </> 
    );
}

export default Museum;