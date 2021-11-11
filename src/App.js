import React, { } from 'react';
import Layout from './componentes/layout';
import NoSearch from './componentes/no-search';
import Perfil from './componentes/perfil';
import Repositories from './componentes/repositorio';
import useGithub from './hooks/github-hooks';


const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? ( 
        <>
          {githubState.loading ? (
            <p>Carregando</p>
          ) : (
            <>
              <Perfil />
              <Repositories />
            </>
          )}
        </> 
          ) : ( 
          <NoSearch />          
          )}
    </Layout>
  );
}

export default App;
