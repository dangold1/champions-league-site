import React from 'react';
import { useParams } from "react-router-dom";
import { Container, TableContainer } from '../styles/ContainersStyle';
import TableComponent from '../components/TableComponent';
import { LoadingComponent, ErrorComponent } from '../components/ExceptionComponents';
import TeamDetailsComponent from '../components/TeamDetailsComponent';
import { SecondaryTitle } from '../styles/TitlesStyle';
import { GET_TEAM_API, REQUSET_PARAMS } from '../utils/constans';
import useRequest from '../hooks/useRequest';

const TeamPage = props => {
    // Set selected team by id url params
    const { id } = useParams();
    const { data, isLoading, error } = useRequest({ url: `${GET_TEAM_API + id}`, reqParams: REQUSET_PARAMS });
    return (
        <Container>
            {
                isLoading ? <LoadingComponent />
                    : error ? <ErrorComponent message={error} />
                        : (
                            <TableContainer>
                                <TeamDetailsComponent data={data} />
                                <SecondaryTitle>Season 20/21 Squad</SecondaryTitle>
                                <TableComponent
                                    data={data.squad}
                                    headers={["name", "position", "nationality"]}
                                />
                            </TableContainer>
                        )
            }
        </Container >
    )
}

export default TeamPage;
