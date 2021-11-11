import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './estilo'


const Perfil = () => {

    const { githubState } = useGithub()
    
    return (
        <S.Wrapper>
            <S.WrapperImage src={githubState.user.avatar}
                alt="Foto do Usuario"
            />
            <S.WrapperInfosUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserGenerico>
                        <h3>Nome do Usuario</h3>
                        <a href={githubState.user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >{githubState.user.login}
                        </a>
                    </S.WrapperUserGenerico>
                    <S.WrapperUserGenerico>
                        <h3>Empresa</h3>
                        <span> {githubState.user.company} </span> 
                    </S.WrapperUserGenerico>
                    <S.WrapperUserGenerico>
                        <h3>País</h3>
                        <span> {githubState.user.location} </span> 
                    </S.WrapperUserGenerico>
                    <S.WrapperUserGenerico>
                        <h3>Blog</h3>
                        <a href={githubState.user.blog}
                            target="_blank"
                            rel="noreferrer"
                        >{githubState.user.blog}</a>
                    </S.WrapperUserGenerico>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Seguindo</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Seguidores</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>repositorio</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfosUser>
        </S.Wrapper>
    )
};

export default Perfil;