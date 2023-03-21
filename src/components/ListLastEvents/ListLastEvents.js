import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvent from "../LastEvent";

export default function ListLastEvents() {
    const lastEventsFetch = useFetch(
        `${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`
    );

    return (
        <div className="container-list-last-events">
            <Header size="large">Últimos eventos</Header>

            <Container>
                <Card.Group itemsPerRow={5}>
                    <LastEvent lastEventsFetch={lastEventsFetch} />
                </Card.Group>
            </Container>
        </div>
    );
}
