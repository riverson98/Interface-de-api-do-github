import React from "react";
import * as S from './estilo'
import useGithub from "../../hooks/github-hooks";
import { useState } from "react";


const Header = () => {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };
    return (<header>
        <S.Wrapper>
            <input type="text" 
                placeholder="Digite o nome do Usuario que você quer buscar no github"
                onChange= {(event) => setUsernameForSearch (event.target.value)  } 
            />
            <button type="submit" onClick={submitGetUser}>
                <span>Buscar</span></button>
        </S.Wrapper>
    </header>
    )}; 

export default Header;