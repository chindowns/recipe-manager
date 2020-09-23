import React from 'react';
import Card from '../components/Recipe-Cards'

export default () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) {
            
        }
    })

    return (
        <div>
            This will be cards
        </div>
    )
}