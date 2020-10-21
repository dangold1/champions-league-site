import React from 'react';
import { Container, TableContainer } from '../styles/ContainersStyle';
import TableComponent from '../components/TableComponent';
import { SecondaryTitle } from '../styles/TitlesStyle';
import { LoadingComponent, ErrorComponent } from '../components/ExceptionComponents';
import { GET_COMPETITION_TEAMS_API, REQUSET_PARAMS } from '../utils/constans';
import useRequest from '../hooks/useRequest';

const TeamsPage = props => {
    const { history } = props;
    const { data, isLoading, error } = useRequest({ url: GET_COMPETITION_TEAMS_API, reqParams: REQUSET_PARAMS });
    return (
        <Container>
            {
                isLoading ? <LoadingComponent />
                    : error ? <ErrorComponent message={error} />
                        : (
                            <TableContainer>
                                <SecondaryTitle>Season 20/21 Teams</SecondaryTitle>
                                <TableComponent
                                    data={data.teams}
                                    headers={["name", "founded", "address"]}
                                    onRowClick={id => history.push(`/teams/${id}`)}
                                />
                            </TableContainer>
                        )
            }
        </Container >
    )
}

export default TeamsPage;
