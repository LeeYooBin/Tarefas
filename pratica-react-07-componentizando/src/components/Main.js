import styled from "styled-components";

const Inicio = styled.div`
    padding: 2%;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled.h1`
    text-align: left;
`;

const Profile = styled.div`
    position: relative;
    padding: 1%;
    border: solid grey;
    width: 23vw;
    height: auto;
`;

const ProfileDiv = styled.div`
    padding: 2%;
    margin-top: 1vh;
    width: 100%
    height: auto;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
`;

const ProfileImg = styled.img`
    margin-top: 1vh;
    width: 100%;
    height: 30vh;
`;

const ProfileInfo = styled.div`
    margin-top: 0.5vh;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileParagraph = styled.p`
    margin-top: 0.5vh;
`;

const Resume = styled.div`
    position: absolute;
    top: 8.3%;
    left: 27%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Paragraph = styled.p`
    margin-bottom: 1vh;
    text-align: justify
`
const ResumeParagraph = styled.p`
    width: 98%;
    margin-bottom: 1vh;
    text-align: justify
`;
const Sobre = styled.div`
    padding: 2%;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SobreTitle = styled.h3`
    margin: 2vh 0 1vh 0;
`;

const Galeria = styled.div`
    padding: 2%;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const GaleriaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 40vh);
    grid-gap: 15px;
    margin-top: 1vh;
`;

const GaleriaImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function Main() {
    return (
        <> 
            <Inicio>
                <Profile>
                    <ProfileDiv><h4>Maçã</h4></ProfileDiv>
                    <ProfileImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fapple-plant-wood-fruit-sweet-food-red-produce-healthy-eat-delicious-close-up-red-apple-beautiful-vitamins-macro-photography-about-flowering-plant-rose-family-invitation-land-plant-rose-order-1170809.jpg&f=1&nofb=1"></ProfileImg>
                    <ProfileDiv><p>Classificação científica</p></ProfileDiv>
                    <ProfileInfo>
                        <ProfileParagraph>Reino: Plantae</ProfileParagraph>
                        <ProfileParagraph>Clado: angiospérmicas</ProfileParagraph>
                        <ProfileParagraph>Clado: eudicotiledóneas</ProfileParagraph>
                        <ProfileParagraph>Clado: rosídeas</ProfileParagraph>
                        <ProfileParagraph>Ordem: Rosales</ProfileParagraph>
                        <ProfileParagraph>Família: Rosaceae</ProfileParagraph>
                        <ProfileParagraph>Subfamília: Maloideae</ProfileParagraph>
                        <ProfileParagraph>Género: Malus</ProfileParagraph>
                    </ProfileInfo>
                    <ProfileDiv><p>Espécies</p></ProfileDiv>
                    <ProfileInfo>
                        <ProfileParagraph>Malus domestica</ProfileParagraph>
                        <ProfileParagraph>Malus sieversii</ProfileParagraph>
                        <ProfileParagraph>entre outras.</ProfileParagraph>
                    </ProfileInfo>
                </Profile>
                <Resume>
                    <Title>Maçã</Title>
                    <ResumeParagraph>
                        A maçã é o pseudofruto pomáceo da macieira (Malus domestica), árvore da família Rosaceae.
                        É um dos pseudofrutos de árvore mais cultivados, e o mais conhecido dos muitos membros do
                        género Malus que são usados ​​pelos seres humanos. As maçãs crescem em pequenas árvores, de
                        folha caducifólia que florescem na Primavera e produzem fruto no Outono. A árvore é
                        originária da Ásia Ocidental, onde o seu ancestral selvagem, Malus sieversii, ainda é
                        encontrado atualmente. As maçãs têm sido cultivadas há milhares de anos na Ásia e Europa,
                        tendo sido trazidas para a América do Norte pelos colonizadores europeus. As maçãs têm
                        estado presentes na mitologia e religiões de muitas culturas, incluindo as tradições nórdica,
                        grega e cristã. Em 2010, o genoma da fruta foi descodificado, levando a uma nova compreensão
                        no controle de doenças e na reprodução seletiva durante a produção da maçã.
                        Existem mais de 7.500 plantações conhecidas de maçãs, resultando numa gama de características desejadas.
                    </ResumeParagraph>
                    <Title>História</Title>
                    <ResumeParagraph>
                        O centro da variedade do gênero Malus é no leste do Turquia. A macieira era talvez a mais antiga árvore
                        que tenha sido cultivada, e seus frutos foram melhorados com a seleção ao longo de milhares de anos.
                        Relata-se que Alexandre, o Grande encontrou maçãs anãs no Cazaquistão em 328 a.C.; aquelas que ele trouxe
                        de volta para a Macedônia podem ter sido as geradoras das plantações de maças anãs. As maçãs do inverno,
                        colhidas no final do outono e armazenadas em temperatura pouco acima do congelamento, foram um alimento
                        importante na Ásia e na Europa por milênios.
                        <br></br>
                        As maçãs foram trazidas para a América do Norte pelos colonos no século XVII, e o primeiro pomar de maçãs
                        no norte do continente americano foi plantada em Boston pelo Reverendo William Blaxton em 1625. As únicas
                        maçãs nativas da América do Norte são as maçãs silvestres, que já foram chamadas de "maçãs comuns" Variedades
                        de maçãs trazidas da Europa como semente foram espalhadas ao longo das rotas comerciais dos nativos americanos,
                        bem como foram cultivadas em fazendas coloniais. Em 1845, um catálogo de viveiro de maçãs nos Estados Unidos
                        vendia 350 das "melhores" variedades, mostrando a proliferação de novas variedades norte-americanas no início
                        do século XIX. No século XX, iniciaram os projetos de irrigação na parte leste do estado de Washington,
                        permitindo o desenvolvimento de uma indústria de frutas multibilionária, onde a maçã é o produto líder.
                        <br></br>
                        Até o século XX, os agricultores armazenavam maçãs em depósitos total ou parcialmente subterrâneos durante o
                        inverno para seu próprio uso ou para venda. As melhorias no transporte de maçãs frescas por trem e estradas
                        dispensou a necessidade de armazenamento. No século XXI, o armazenamento de longo prazo novamente tornou-se
                        popular, quando instalações com "atmosfera controlada" passaram a ser usadas para manter maçãs frescas durante todo
                        o ano. Tais instalações usam alta umidade, baixo teor oxigênio e níveis de dióxido de carbono controlados para manter
                        o frescor da fruta.
                    </ResumeParagraph>

                </Resume>
            </Inicio>
            <Sobre>
                <Title>Informações nutricionais</Title>
                <Paragraph>
                    O consumo regular de maçã é excelente para manter a taxa de colesterol em níveis aceitáveis, com a ingestão recomendada de uma 
                    unidade por dia. Esse efeito é devido ao alto teor de pectina, encontrada na casca.
            
                    A maçã contém as seguintes vitaminas: B1, B2 e Niacina, além de sais minerais, como fósforo e ferro.
               
                    A maçã é consumida, em sua maioria, na forma de fruta, ou de suco de maçã. Fermentada, é utilizada na elaboração de bebidas 
                    alcoólicas como a sidra asturiana, o Calvados francês e a sagardua basca. Também há o vinagre de maçã e a geléia de maçã. 
                    É muito utilizada na confecção de tortas.
                
                    É rica em quercetina, substância que ajuda a evitar a formação de coágulos sanguíneos capazes de provocar derrames. 
                    A maçã é recomendada para pessoas com problemas de intestino, obesidade, reumatismo, gota, diabetes, enfermidades da 
                    pele e do sistema nervoso. A sua casca seca é empregada como chá para purificar o sangue e como diurético.
                
                    Para melhor aproveitamento das suas vitaminas, o ideal é consumi-la ao natural com casca, pois é junto dela que estão a 
                    maior parte das suas vitaminas e os sais minerais.
               
                    Na hora de comprar, escolha as de casca de cor acentuada e brilhante, polpa firme, pesadas, sem partes moles, furos ou 
                    rachaduras. Nessas condições ela se conserva até um mês no frigorífico.

                    Estima-se que uma típica maçã de 240g contém cerca de 100 milhões de bactérias. A maioria das bactérias está nas sementes, 
                    com a carne representando a maior parte do restante. Estudos sugerem que o microbioma e os perfis antioxidantes de produtos 
                    frescos podem se tornar informações nutricionais padrão, exibidos ao lado de macronutrientes, vitaminas e minerais para 
                    orientar os consumidores.
                </Paragraph>
                <Title>Aspectos Culturais</Title>
                    <SobreTitle>Paganismo germânico</SobreTitle>
                    <Paragraph>
                    Na mitologia nórdica, a deusa Iduna é retratada no Prosa Edda (escrito no século XIII por Snorri Sturluson) como a 
                    fornecedora de maçãs para deuses que lhes dão a juventude eterna. A acadêmica inglesa Hilda Ellis Davidson diz que
                    práticas religiosas com maças eram desenvolvidas na mitologia nórdica. Ela ressalta que baldes de maçãs foram 
                    encontrados no navio Oseberg na Noruega, e que as frutas e nozes (Iduna tendo sido descrito como sendo transformada 
                    em uma porca em Skáldskaparmál) foram encontrados nos túmulos dos primeiros povos germânicos na Inglaterra e outras 
                    partes da Europa, que pode ter tido um significado simbólico, e que as nozes são ainda um simboliza fertilidade, no 
                    sudoeste da Inglaterra.

                    Davidson observou uma ligação entre maçãs e os Vanir, uma tribo de deuses associados com a fertilidade na mitologia 
                    nórdica, citando um exemplo de onze "maçãs douradas" a ser dada para cortejar a bela Gerðr por Skirnir, que era 
                    mensageiro dos principais deuses. Davidson também observa uma conexão ainda mais entre a fertilidade e as maçãs 
                    na mitologia nórdica no capítulo 2 da saga Völsunga quando a deusa principal Frigg envia ao Rei Rerir uma maçã, 
                    o mensageiro de Frigg (sob a forma de um corvo) deixa cair maçã em seu colo enquanto ele fica no topo de um monte.
                    O consumo das maças resulta na gravidez da mulher de Rerir, nascendo mais tarde o herói Volsungo.

                    Além disso, Davidson assinala a "estranha" expressão "Maçãs de Hel" usada em um poema do século XI pelo escaldo 
                    Thorbiorn Brúnarson. Ela afirma que escaldo poderia ter pensado que maçã era o alimento dos mortos. Além disso, 
                    Davidson observa que a deusa germânica Nealênia às vezes é representada com maçãs. Davidson afirma que, enquanto 
                    o cultivo da maçã no norte da Europa se estende até pelo menos no tempo do Império Romano e chegou à Europa a partir 
                    do Oriente, as variedades nativas da maçã são pequenas e amargos. Davidson conclui que na figura de Iduna "devemos 
                    ter um pálido reflexo de um velho símbolo: o da deusa guardiã do fruto doador da vida do outro mundo".
                    </Paragraph>
                    <SobreTitle>Mitologia grega</SobreTitle>
                    <Paragraph>
                    Na mitologia grega, as maçãs aparecem em muitas tradições religiosas, muitas vezes como um místico ou um fruto proibido.
                    Um dos problemas para identificar as maçãs na religião, mitologia e lendas populares é que a palavra "maçã" era usado 
                    como um termo genérico para todos os frutos (estrangeiros). Por exemplo, na mitologia grega, o herói grego Héracles
                    , como parte de seus doze trabalhos, foi obrigado a viajar para o Jardim das Hespérides e pegar as maçãs de ouro da Árvore
                    da Vida.

                    A deusa grega da discórdia Eris, ficou insatisfeita depois que ela foi excluída do casamento de Peleu e Tétis.
                    Em retaliação, ela jogou uma maçã de ouro na festa de casamento.

                    A maçã foi considerada, na Grécia antiga, o símbolo do amor.
                    </Paragraph>
                    <SobreTitle>O fruto proibido no Jardim do Éden</SobreTitle>
                    <Paragraph>
                    Embora não há uma especificação sobre o fruto proibido no livro de Génesis, a tradição popular cristã considerou que 
                    foi uma maçã que Eva persuadiu Adão a compartilhar com ela. Em latim, a palavra "maçã" e "mal" são semelhantes 
                    (malum, "uma maçã", malum, "um mal, uma desgraça"). Isso também pode ter influenciado a maçã ter se tornando o 
                    "fruto proibido". A laringe na garganta humana tem sido chamada de "maçã de Adão". A maçã também é um símbolo 
                    de sedução sexual.
                    </Paragraph>
                    <SobreTitle>O fruto de Isaac Newton</SobreTitle>
                    <Paragraph>
                    Não se pode afirmar com certeza que a história de que Newton estava sentado embaixo de uma macieira e uma maçã caiu em 
                    sua cabeça seja verdadeira, mas o suposto ocorrido hipoteticamente fez com que o cientista ficasse ciente da existência 
                    da força da gravidade.
                    </Paragraph>
                    <SobreTitle>A maçã e Apple</SobreTitle>
                    <Paragraph>
                    A marca de eletrônicos Apple adotou a maçã como marca registrada. A dentada na maçã foi introduzida no design 
                    para que não fosse confundida com uma cereja. O nome Macintosh, um dos produtos da empresa, é inspirado no 
                    tipo de maçã McIntosh Red, variedade comum nos Estados Unidos.
                    </Paragraph>
                <Title>Nutrição</Title>
                <Paragraph>
                    O ditado Uma maçã por dia mantém o médico longe, mostra os efeitos da maçã na saúde, a citação foi criada no século XIX no 
                    País de Gales. Uma pesquisa revelou que as maçãs podem reduzir o risco de câncer de cólon, câncer de próstata e 
                    câncer de pulmão. Em comparação com muitas outras frutas e vegetais, a maçã contêm quantidades relativamente baixas 
                    de vitamina C, mas são uma fonte rica de outros antioxidantes compostos.[39] O teor de fibra, embora menos que na maioria 
                    dos outros frutos, ajuda a regular os movimentos intestinais e pode assim, reduzir o risco de câncer de cólon. Eles também 
                    podem ajudar com doenças cardíacas, a perda de peso, e ajudam a controlar o colesterol. A fibra contida nas maçãs 
                    reduz o colesterol, evitando a reabsorção, e (como a maioria das frutas e vegetais) são volumosos para o seu conteúdo 
                    calórico. No entanto, as sementes da maçã são levemente venenosas, contendo uma pequena quantidade de amigdalina. 
                    Ela geralmente não é forte o suficiente para oferecer perigo aos seres humanos, mas pode matar os pássaros.

                    Há evidências de experimentos em que foi supostamente confirmado que as maçãs possuem fenólicos compostos que podem ser 
                    uma proteção contra o câncer. O fenólicos predominante nas maçãs são a quercetina, epicatequina e procianidina B2.

                    Além dos já citados benefícios, você irá encontrar outros nutrientes importantes e vitaminas da maçã, que sem dúvidas 
                    vão contribuir com a sua saúde, promovendo cada vez mais o seu bem estar e confirmar a frase citada acima Uma maçã por 
                    dia mantém o médico longe.

                    O tecido fibroso contido na fruta é altamente rico em micromoléculas adenina e guanina, responsáveis pela síntese e, 
                    consequentemente, reabsorção de material linfático, o que acarreta em uma melhoria no condicionamento e integridade 
                    do fluxo sanguíneo e respiratório. O suco de maçã tem um concentrado teor de neurotransmissor acetilcolina em 
                    camundongos, fornecendo um mecanismo potencial para a "prevenção do declínio da performance cognitiva que acompanha a 
                    deficiências alimentares e genéticas e combate o envelhecimento." Outros estudos têm mostrado uma "redução do dano 
                    oxidativo e declínio cognitivo" em ratos após a ingestão do suco de maçã. Pesquisadores da Universidade de Hong 
                    Kong descobriram que moscas que foram alimentados com um extrato de maçã viveram 10% mais em relação às outras moscas.
                </Paragraph>
            </Sobre>
            
            <Galeria>
                <Title>Galeria</Title>
                <GaleriaGrid>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fapple-plant-wood-fruit-sweet-food-red-produce-healthy-eat-delicious-close-up-red-apple-beautiful-vitamins-macro-photography-about-flowering-plant-rose-family-invitation-land-plant-rose-order-1170809.jpg&f=1&nofb=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3-y63OfCPuvjymQvTkQ7xgHaEo%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yqbPm_uhcAT7frpbha8mPwHaD1%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5nv0UzF34g_hLb5epryB9gHaE7%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dwka17AxpbUcUc8oiseEfAHaFj%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8enPit8dUx2cT8-aGXaEgAHaLH%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DDVlQGu5HXuNvGvmqLGL1wHaHa%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cFoBQLH3c9szjzTZdG2G-QHaFj%26pid%3DApi&f=1"></GaleriaImg>
                    <GaleriaImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oldZGC1-y5ii4OoN6c9LnQHaE6%26pid%3DApi&f=1"></GaleriaImg>
                </GaleriaGrid>
            </Galeria>
        </>  
    );
}

export default Main;
