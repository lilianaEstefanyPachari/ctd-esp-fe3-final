import React from 'react'
import Card from '../Components/Card'
import { useGlobalState } from '../Components/utils/global.context'

const Home = () => {
  const {state} = useGlobalState()

  return (
    <main className="home-page">
      {state.dentistas && 
      <>
        <h1>👩‍🔬 Dentistas</h1>
        <div className='card-grid'>
          {
            state.dentistas.map((dentista) => (
              <Card key={dentista.id}  dentista={dentista} tipoFavorita={false}>                
              </Card>
            ))
          }
        </div>
      </>  
      }
    </main>
  )
}

export default Home