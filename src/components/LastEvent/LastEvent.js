import "./LastEvent.scss";
import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";

export default function LastEvent({ lastEventsFetch }) {
    const { loading, result } = lastEventsFetch;

    if (loading || !result)
        return (
            <Dimmer active inverted>
                <Loader inverted>Cargando...</Loader>
            </Dimmer>
        )

    const { results } = result.data;


    return results.map((event, index) => (
        <Card key={index} className="last-event">
            <Image src={`${event.thumbnail.path}.${event.thumbnail.extension}`} wrapped ui={false}></Image>

            <Card.Content>
                <Card.Header>{event.title}</Card.Header>
                <Card.Meta>
                    <span>
                        <Icon name="book" />
                        {event.comics.available} Comics
                    </span>
                </Card.Meta>
                <Card.Description>{event.description}</Card.Description>
            </Card.Content>

            <Card.Content>
                <Button animated fluid as="a" href={event.urls[0].url} target="blank" color="black">
                    <Button.Content visible>Ver Evento</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow right" />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card>


    ))

}