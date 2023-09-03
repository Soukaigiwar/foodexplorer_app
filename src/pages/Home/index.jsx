import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TitleHeader } from "../../components/TitleHeader";

export function Home() {
    return (
        <Container>
            <Header />
            <TitleHeader />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ab esse hic corporis modi? Provident, consequatur? Veritatis, dignissimos reprehenderit impedit deserunt error incidunt aliquam placeat sunt magni dolorum voluptatem fugit.</p>
            
            <Footer />
        </Container>
    );
};
