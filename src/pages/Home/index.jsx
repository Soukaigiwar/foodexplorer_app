import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TitleHeader } from "../../components/TitleHeader";
import { Carrousel } from "../../components/Carrousel";

export function Home() {
    return (
        <Container>
            <Header />
            <TitleHeader />
            <Carrousel title="Refeições" category="refeição" />
            <Carrousel title="Sobremesa" category="Sobremesa"/>
            <Carrousel title="Bebidas" category="Bebidas"/>
            <Footer />
        </Container>
    );
};
