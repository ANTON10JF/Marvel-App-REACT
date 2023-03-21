import "./Container.scss"
import { Container as Content } from 'semantic-ui-react';

export default function Container({ children, bg }) {
    return (
        <div className={bg !== "light" ? "container-bg" : null}>
            <Content>{children}</Content>
        </div>
    )
}