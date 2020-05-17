import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Wrapper, Header, Search, InputGroup, Input } from './styles';
import Capitals from '../../components/Capitals';
import City from '../../components/City';

import { get } from '../../services/api';

function Main() {
	const [search, setSearch] = useState('');
	const [city, setCity] = useState(null);
	const [isFirst, setIsFirst] = useState(true);

	useEffect(() => {
		if (!isFirst) {
			const timer = setTimeout(() => {
				handleSearchCity();
			}, 500);


			return () => clearTimeout(timer);
		}

		async function handleSearchCity() {
			try {
				const response = await get({ location: search });
				setCity(response);
			} catch (error) {
				console.log(error)
			}
		}
		setIsFirst(false);
	}, [isFirst, search]);

    return (
        <Container>
            <Wrapper>
                <Header>Previsão do tempo</Header>

				{ city && <City city={ city } />}

                <Search>
                    <InputGroup>
                        <Input type="text" value={search} onChange={ e => setSearch(e.target.value) } placeholder="Insira aqui o nome da cidade" />
                        <MdSearch color="#525252" size={24} />
                    </InputGroup>
                </Search>
            </Wrapper>

            <Capitals />
        </Container>
    );
}

export default Main;