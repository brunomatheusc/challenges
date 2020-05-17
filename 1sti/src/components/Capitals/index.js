import React from 'react';

import { Container, Wrapper, Title, CapitalsContainer } from './styles';
import CapitalListItem from '../CapitalListItem';

export default function Capitals() {
    const capitals = [
        'Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília', 'Belém',
        'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa'
    ];

    return (
        <Container>
            <Wrapper>
                <Title>Capitais</Title>

				<CapitalsContainer>
					<CapitalListItem capitals={ capitals.slice(0, 5) } />

					<CapitalListItem capitals={ capitals.slice(5, capitals.length) } />
				</CapitalsContainer>

            </Wrapper>
        </Container>
    );
}