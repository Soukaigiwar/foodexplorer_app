import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TitleHeader } from "../../components/TitleHeader";
import { Carrousel } from "../../components/Carrousel";

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <TitleHeader />
                <Carrousel title="Refeições" category="refeição" />
                <Carrousel title="Sobremesas" category="Sobremesas"/>
                <Carrousel title="Bebidas" category="Bebidas" />
            </Content>
            <Footer />
        </Container>
    );
}
