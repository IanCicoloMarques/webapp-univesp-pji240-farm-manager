/*
EXEMPLO#10
Como mostrado na parte de Grid, UI Frameworks são coleções de componentes já prontos
que facilitam muito o trabalho na hora de criar a parte visual do site.

Alguns FrameWorks também vem com funcionalidades extras além do visual, e podemos instalar
conforme a necessidade.

Geralmente os componentes vem prontos para uso, com opções para customizar.
Outra boa vantagem é o fato de padronizar os estilos, dando uma uniformidade visual ao site.

Seria bem interessante escolhermos um ou dois UI Frameworks para usarmos no projeto.
Não tem problema usarmos mais de um, mas cada um deles costuma pesar no projeto.

Para comparação:
PESO NO SEU COMPUTADOR
Pasta Projeto (Ambiente de desenvolvimento), sem nenhum UI Framework:
215MB
Pasta Projeto com Material UI:
317MB
Pasta Projeto com MUI, Blueprint, Bootstrap, AntDesign, ChakraUI e SemanticUI:
573MB

PESO NO SERVIDOR/VM
Pasta Build (Ambiente de prodção/lançamento), apenas MUI:
1.15MB
Pasta build com todos os Frameworks, sem utilizar:
1.46MB


*/

//MUI
import {
  Typography as MTypography,
  Card as MCard,
  CardActions as MCardActions,
  Button as MButton,
  CardContent as MCardContent,
  Box as MBox,
} from "@mui/material";

//BLUEPRINT
import "@blueprintjs/core/lib/css/blueprint.css";
import { Card as BCard, Button as BButton, H5 } from "@blueprintjs/core";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as BSButton, Card as BSCard } from "react-bootstrap";

// AntDesign
import { Card as ACard, Space as ASpace } from "antd";

//ChakraUIS
import { ChakraProvider } from "@chakra-ui/react";
import {
  Card as CCard,
  CardBody as CCardBody,
  CardFooter as CCardFooter,
  Heading as CHeading,
  Button as CButton,
  ButtonGroup as CButtonGroup,
  Text as CText,
  Stack as CStack,
  Divider as CDivider,
} from "@chakra-ui/react";

//SemanticUI
import "semantic-ui-css/semantic.min.css";
import { Card as SCard, Icon as SIcon } from "semantic-ui-react";

const BluePrintCard = () => {
  return (
    <div
      style={{
        display: "block",
        width: 500,
        padding: 30,
      }}>
      <h4>ReactJS Blueprint Card Component</h4>
      <BCard>
        <H5>Sample Heading</H5>

        <p>Sample Text</p>
        <div>
          <a href="https://blueprintjs.com/docs/#core/components/card">
            Documentação
          </a>
        </div>
        <BButton text="Save" />
      </BCard>
    </div>
  );
};

const bull = (
  <MBox
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </MBox>
);

const MUICard = () => {
  return (
    <div
      style={{
        display: "block",
        width: 500,
        padding: 30,
      }}>
      <MCard sx={{ minWidth: 275 }}>
        <MCardContent>
          <MTypography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom>
            Word of the Day
          </MTypography>
          <MTypography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </MTypography>
          <MTypography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </MTypography>
          <MTypography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            <div></div>
            <a href="https://mui.com/material-ui/react-card/">Documentação</a>
          </MTypography>
        </MCardContent>
        <MCardActions>
          <MButton size="small">Learn More</MButton>
        </MCardActions>
      </MCard>
    </div>
  );
};

const BootStrapCard = () => {
  return (
    <div
      style={{
        display: "block",
        width: 500,
        padding: 30,
      }}>
      <BSCard style={{ width: "18rem" }}>
        <BSCard.Body>
          <BSCard.Title>Card Title</BSCard.Title>
          <BSCard.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <div></div>
            <a href="https://react-bootstrap.netlify.app/docs/components/cards">
              Documentação
            </a>
          </BSCard.Text>
          <BSButton variant="primary">Go somewhere</BSButton>
        </BSCard.Body>
      </BSCard>
    </div>
  );
};

const AntDCard = () => {
  return (
    <div
      style={{
        display: "block",
        width: 500,
        padding: 30,
      }}>
      <ASpace direction="vertical" size={16}>
        <ACard
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}>
          <p>Card content</p>
          <a href="https://ant.design/components/card#">Documentação</a>
        </ACard>
      </ASpace>
    </div>
  );
};

const ChakraCard = () => {
  return (
    <ChakraProvider>
      <div
        style={{
          display: "block",
          width: 500,
          padding: 30,
        }}>
        <CCard maxW="sm">
          <CCardBody>
            <CStack mt="6" spacing="3">
              <CHeading size="md">Living room Sofa</CHeading>
              <CText>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </CText>
              <CText color="blue.600" fontSize="2xl">
                $450
              </CText>
              <a href="https://chakra-ui.com/docs/components/card/usage">
                Documentação
              </a>
            </CStack>
          </CCardBody>
          <CDivider />
          <CCardFooter>
            <CButtonGroup spacing="2">
              <CButton variant="solid" colorScheme="blue">
                Buy now
              </CButton>
              <CButton variant="ghost" colorScheme="blue">
                Add to cart
              </CButton>
            </CButtonGroup>
          </CCardFooter>
        </CCard>
      </div>
    </ChakraProvider>
  );
};

const SemanticCard = () => {
  return (
    <div
      style={{
        display: "block",
        width: 500,
        padding: 30,
      }}>
      <SCard>
        <SCard.Content>
          <SCard.Header>Matthew</SCard.Header>
          <SCard.Meta>
            <span className="date">Joined in 2015</span>
          </SCard.Meta>
          <SCard.Description>
            Matthew is a musician living in Nashville.
            <div>
              <a href="https://react.semantic-ui.com/views/card/#types-card">
                Documentação
              </a>
            </div>
          </SCard.Description>
        </SCard.Content>
        <SCard.Content extra>
          <a>
            <SIcon name="user" />
            22 Friends
          </a>
        </SCard.Content>
      </SCard>
    </div>
  );
};

export default function UiFrameworkPage() {
  return (
    <>
      <div>a</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}>
        {BluePrintCard()}
        {MUICard()}
        {BootStrapCard()}
        {AntDCard()}
        {ChakraCard()}
        {SemanticCard()}
      </div>
      <div>b</div>
    </>
  );
}
